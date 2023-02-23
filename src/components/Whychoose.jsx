import React from "react";

export default function Whychoose() {
  return (
    <div className=" bg-slate-100 py-8">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-2xl text-blue-900 md:text-4xl text-center">
          Why Choose Us
        </h2>
        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
        </div>
      </div>
      {/* component */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {/* 1 card */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink left-4 -top-6">
              {/* svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2 text-blue-900">
                Effective Time Investment
              </p>
              <article>
                <p>
                  Time is the most valuable commodity & its utilisation should
                  be effective in all aspects of the business. Hiring is no
                  exception,
                </p>
              </article>
            </div>
          </div>
          {/* 2 card */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-orange left-4 -top-6">
              {/* svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2 text-blue-900">
                Greater Flexibility of Time & Place
              </p>
              <article>
                <p>
                  Freelance Interviewer Marketplace enables you to schedule the
                  interview at your convenient time and right from anywhere.
                  These interviews will be conducted through video conferencing,
                </p>
              </article>
            </div>
          </div>
          {/* 3 card */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue left-4 -top-6">
              {/* svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2 text-blue-900">
                Interviews Via Video Conferencing
              </p>
              <div className="border-t-2 " />
              <div className="flex justify-between">
                <div className="my-2">
                  <div className="flex space-x-2">
                    <article>
                      <p>
                        Freelancers conduct the interview rounds via video
                        conferencing or teleconferencing rather than in-person
                        interviews. You no longer need to travel a mile to take
                        the interview,
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 4 card */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-dark-blue left-4 -top-6">
              {/* svg  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2 text-blue-900">
                Higher Bucks
              </p>
              <article>
                <p>
                  An interviewer listed on the Freelance Interviewers Platform
                  of InCruiter can earn up to 1.5X than their current salary.
                  Hurry up, join this platform for part-time earning.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
