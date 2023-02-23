/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 hero-bg small-screen">
        <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-2 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className=" text-xl font-extrabold leading-none sm:text-6xl text-blue-400 hero-text font-sans">
              BUILD <span className="hero-sub">GREAT</span> TECH TEAMS
              <span className=" text-orange-500"> FASTER</span> WITH CLIQIN
            </h1>
            <h2 className="py-6 text-xl">
              A fully automated platform to conduct <br /> Exit Interviews with
              Real-Time analytics.
            </h2>
            <div className=" flex gap-8">
              <button className="btn-4 font-bold">Request Demo</button>
              <button
                className="text-pink-500 border border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-500 font-bold capitalize text-sm px-6 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 small-scr-btn"
                type="button"
              >
                Become an Interviewer
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 sm:h-full lg:h-96 xl:h-112 2xl:h-128 h-full w-6/12 hero-img">
            <img src="images/Group 167.png" alt="img-1" />
          </div>
        </div>
      </section>
    </div>
  );
}
