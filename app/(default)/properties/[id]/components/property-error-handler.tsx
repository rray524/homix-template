import Link from "next/link";
import React from "react";

const PropertyNotFoundFallback = () => {
  return (
    <div className="my-16 w-[70%] mx-auto text-center min-h-[300px] flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
      <p className="text-xl my-10">
        Sorry, the property you are looking for does not exist or has been
        removed.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PropertyNotFoundFallback;
