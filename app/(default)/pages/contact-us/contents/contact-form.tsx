"use client";
import { useToast } from "@/context/toast-context";
import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { sendMail } from "../action";
import FormField from "./form-field";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const { showToast } = useToast();
  const methods = useForm<FormValues>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const templateParams = {
      from_email: data.email,
      name: data.name,
      phone: data.phone,
      message: data.message,
    };

    try {
      await sendMail(templateParams);
      showToast("Your message has been sent successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <div className="p-8 bg-custom-gradient rounded-lg shadow-lg w-full md:w-1/2 relative h-[580px]">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 absolute inset-0 m-auto h-[60%] w-[70%]"
          noValidate
        >
          <FormField
            name="name"
            type="text"
            placeholder="Enter your full name"
            validationRules={{ required: "Name is required" }}
          />
          <FormField
            name="email"
            type="email"
            placeholder="Enter your email address"
            validationRules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
          <FormField
            name="phone"
            type="text"
            placeholder="Enter your phone number"
            validationRules={{
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be 10 digits & neumaric",
              },
            }}
            maxLength={10}
          />
          <FormField
            name="message"
            type="textarea"
            placeholder="Enter your message"
            validationRules={{ required: "Message is required" }}
          />
          <button
            type="submit"
            className="w-full mx-auto bg-black text-white p-3 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send message"}
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
