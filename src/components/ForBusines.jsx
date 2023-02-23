/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function ForBusines() {
  const [value, setValue] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <section className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-10">
            <div className="lg:w-1/2 lg:mx-10">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-4xl">
                Let’s talk about Business
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-600">
                Ask us everything and we would love to hear from you
              </p>

              <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: true, maxLength: 30 })}
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring-opacity-40"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <span className=" text-red-600">This is required</span>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <span className=" text-red-600">Max length exceeded</span>
                  )}
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address <span className=" text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@company\.com$/i,
                    })}
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none  focus:ring-opacity-40"
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className=" text-red-600">enter email</p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className=" text-red-600">enter email pattern wrong</p>
                  )}
                </div>
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Company Name
                  </label>
                  <input
                    type="text"
                    {...register("CompanyName", { required: true })}
                    placeholder="Geetha tech"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none  focus:ring-opacity-40"
                  />
                  {errors.CompanyName &&
                    errors.CompanyName.type === "required" && (
                      <p className=" text-red-600">Enter Company Name</p>
                    )}
                </div>
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone Number <span className=" text-red-600">*</span>
                  </label>
                  <div className=" flex justify-center items-center gap-1">
                    <PhoneInput
                      defaultCountry="IN"
                      value={value}
                      onChange={setValue}
                      placeholder={+91}
                      className="block w-24 py-1 mt-2 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <input
                      type="number"
                      {...register("number", { required: true })}
                      placeholder="0123456789"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none  focus:ring-opacity-40"
                    />
                  </div>
                  {errors.number && errors.number.type === "required" && (
                    <p className=" text-red-600">Enter contact number</p>
                  )}
                </div>

                <div className="w-full mt-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message <span className=" text-red-600">*</span>
                  </label>
                  <textarea
                    className="block w-full h-16 px-5 py-3 mt-2 text-gray-700 placeholder-gray-600 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-orange-600 dark:focus:border-orange-600 focus:ring-orange-600 focus:outline-none  focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="get in touch"
                  className="w-1/2 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50"
                />
              </form>
            </div>

            <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
              <img
                className="hidden object-cover mx-auto  lg:block shrink-0 w-3/4 h-3/4"
                src="/images/Object1.png"
                alt=""
              />

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-orange-500 dark:text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-600">
                    Chennai. India
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-orange-500 dark:text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-600">
                    0123456789
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-orange-500 dark:text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-600">
                    careers@cliqhr.co.in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
