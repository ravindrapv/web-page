import React, { useState } from "react";
import * as emailjs from "emailjs-com";
export default function ContactUs() {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [contactData, setContactData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setContactData({
      ...contactData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dazirsj",
        "template_2s7iovl",
        e.target,
        "IuEWj5yPuldsFllob"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //reset the form after submission
    setContactData({ ...initialFormState });
  };
  return (
    <div>
      <div className=" text-center max-w-screen-xl  gap-8 px-8 py-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 bg-slate-100">
        <h1 className="text-3xl font-semibold text-blue-900  capitalize lg:text-4xl dark:text-white">
          Feedback
        </h1>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
        </div>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 bg-slate-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2 grid place-content-center">
            <h2 className="text-4xl font-bold leading-tight text-blue-900 lg:text-5xl">
              We Expect your <br /> Valuable Feedback
            </h2>
          </div>
          <img
            src="https://resources.biginterview.com/wp-content/uploads/2022/12/Top-20-questions-to-ask-in-an-interview.jpg"
            alt=""
            className=" h-72 md:h-64 rounded-3xl m-4"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 bg-blue-900"
        >
          <div>
            <label for="name" className="block mb-1 ml-1"></label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="block w-full p-2 rounded focus:outline-none   focus:target:ring-4  focus:border-orange-600 dark:bg-gray-800"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="company" className="block mb-1 ml-1"></label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              onChange={handleChange}
              required
              className="block w-full p-2 rounded focus:outline-none  dark:bg-gray-400"
            />
          </div>
          <div>
            <label for="email" className="block mb-1 ml-1"></label>
            <input
              name="email"
              type="email"
              placeholder="Enter company"
              onChange={handleChange}
              required
              className="block w-full p-2 rounded focus:outline-none  dark:bg-gray-400"
            />
          </div>
          <div>
            <label for="message" className="block mb-1 ml-1"></label>
            <textarea
              name="message"
              type="text"
              placeholder="Message..."
              className="h-20 block w-full p-4 rounded autoexpand focus:outline-none  dark:bg-gray-800"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none  hover:ring -opacity-50 dark:bg-sky-40 hover:ring-sky-400 dark:text-gray-900 bg-orange-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
