"use client";
import { useToast } from "@/context/toast-context";
import React from "react";
import { useForm } from "react-hook-form";
import { sendMail } from "./action";
type FormData = {
  email: string;
};

const SubscribeForm: React.FC = () => {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      from_email: data.email,
      email: data.email,
    };

    try {
      await sendMail(templateParams);
      showToast("Your email has been subscribed successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error subscribing your email.", "error");
    }
  };

  return (
    <div>
      <h1 className="text-[20px] font-semibold my-5 text-blue-600">
        Keep Yourself Up to Date
      </h1>
      <p className="text-[15px] py-1">
        For getting latest offers from us please get subscribed!
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 flex justify-center flex-col"
        noValidate
      >
        <div className="flex items-center bg-white shadow-lg rounded-full overflow-hidden max-w-md">
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co|info|io|biz|us|uk|ca|de|fr|jp|cn|au|ru|in|ch|es|it|nl|se|no)$/,
                message: "Invalid email address",
              },
            })}
            className="border-none px-6 py-6 focus:outline-none w-full text-sm md:text-lg"
            placeholder="Enter email address"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white rounded-full px-3 md:px-6 mr-[8px] py-4 hover:bg-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </button>
        </div>
        {errors.email && (
          <p className="text-red-500 pl-6 mt-3">{errors.email.message}</p>
        )}
      </form>

      <hr className="h-[2px] bg-gray-300 my-10" />
    </div>
  );
};
export default SubscribeForm;
