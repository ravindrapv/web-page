import React from "react";

export default function CTA() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="/images/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-blue-900">
                  Earn Extra Bucks With <span className="hero-sub">CLIQHR</span>{" "}
                  Freelance Interviewers Platform
                </h2>

                <p className="mt-4 text-gray-600">
                  By teaming up with the InCruiter’s exit interview services
                  family, make the most lucrative use of your free time &
                  expertise. We are the first & one-stop dedicated freelance
                  interviewers platform from an array of domains. Earning
                  thousands of bucks with this platform is a cakewalk.
                  Interviews will be conducted at your convenient location by
                  telephone or video conference. We maintain complete secrecy
                  between candidates and the interviewer to ensure unbiased
                  decisions. Do not miss your chance to use your talent and get
                  paid for every minute.
                </p>
                <button className="btn-6">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
