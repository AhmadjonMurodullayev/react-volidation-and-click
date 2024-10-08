import React from "react";
import { useForm } from "react-hook-form";

export default function InputValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex items-center justify-center h-[100vh] bg-red-400 gap-6">
      <div className="p-24 w-full md:w-1/2 md:py-20 text-center md:text-left md:pl-24 md:pr-8">
        <h1 className="text-4xl font-bold text-white leading-tight">
          Learn to code by watching others
        </h1>
        <p className="mt-6 text-white opacity-80">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="w-full md:w-1/2 px-8 md:px-16 py-12 bg-white rounded-lg shadow-lg">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mb-8">
          Try it free 7 days then $20/mo. thereafter
        </button>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="First Name"
            className={`p-4 border-2 rounded-lg ${
              errors.firstName ? "border-red-500" : ""
            }`}
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}

          <input
            type="text"
            placeholder="Last Name"
            className={`p-4 border-2 rounded-lg ${
              errors.lastName ? "border-red-500" : ""
            }`}
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}

          <input
            type="email"
            placeholder="Email Address"
            className={`p-4 border-2 rounded-lg ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email address is invalid",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <input
            type="password"
            placeholder="Password"
            className={`p-4 border-2 rounded-lg ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <button className="bg-green-500 text-white py-4 rounded-lg hover:bg-green-600">
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4 text-sm">
          By clicking the button, you are agreeing to our{" "}
          <a href="#" className="text-blue-500">
            Terms and Services
          </a>
        </p>
      </div>
    </div>
  );
}
