/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function BringBusiness() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight cliqin-blue-text xl:text-3xl dark:text-white">
            Bring your Business to the{" "}
            <span className="cliqin-text-orange">next level.</span>
          </h2>
          <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
            An interviewer might ask this question to determine how familiar a
            business owner is with their market. As some business owners are
            entrepreneurs, this question can also tell an interviewer about why
            someone starts a company, especially when the reasoning is based in
            a need in the market. To answer this question, you can identify
            which market your company operates in and point to aspects of the
            market that your business can serve directly.
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold cliqin-blue-text  text-white md:text-3xl">
                  How have you expanded your customer base
                </h2>
                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  An interviewer might ask this question to get perspective on a
                  company's customer base, including how many customers they
                  serve and which demographics their customers typically exist
                  in. Knowing about how many customers a business serves can
                  indicate their general levels of success and can identify
                  effective processes in marketing and sales that a company
                  uses. When answering this question, you can list actions you
                  take to attract new customers and also identify methods you
                  use to maintain your existing customer base, such as marketing
                  campaigns, outreach programs and digital advertising.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
              <img
                alt="Student"
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
