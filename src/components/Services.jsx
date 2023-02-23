/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
export default function Services() {
  return (
    <div
      className=" flex justify-center items-center service-bg px-8"
      id="Services"
    >
      <div className="py-16  from-green-50 to-blue-100">
        <div className="container m-auto px-6  md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl cliqin-blue-text md:text-4xl text-center font-bold">
              Our Services
            </h2>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
              <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
              <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
            </div>
            <p className=" lg:w-9/12 lg:mx-auto font-bold text-3xl my-14 cliqin-blue-text">
              Ease the job application process and let you meet the best
              candidates in the shortest time
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl group sm:flex space-x-6 bg-w bg-opacity-50 shadow-xl hover:rounded-2xl p-4 justify-between">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSDUoU4V4IQ_V5Q118TiM_7NsrK704fjbJw&usqp=CAU"
                alt="art cover"
                loading="lazy"
                height="100"
                width="200"
                className=" object-cover h-56 mt-6 object-top rounded-lg transition duration-500 group-hover:rounded-xl"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold cliqin-blue-text">
                      For Business
                    </h4>
                    <p className="">
                      Acquiring talent is not easy! We are glad to share a
                      different tale here. With the right bandwidth of
                      interviewers across multiple skills, finding your ideal
                      candidate becomes easier and faster. interviewers across
                      faster ,finding your ideal finding your ideal
                    </p>
                  </div>
                  <NavLink to="/BusinessPanel">
                    <button class=" btn-6">
                      <span>Learn More</span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl group sm:flex space-x-6 bg-w bg-opacity-50 shadow-xl hover:rounded-2xl justify-between">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDohzQdXqjSNAPx4OaXBarIuIoB_-JSyH4y3w8HxPGq75jnBdkLMHEr1dzKJ4upxk0X5g&usqp=CAU"
                alt="art cover"
                loading="lazy"
                height="100"
                width="200"
                className=" object-cover h-56 mt-6 rounded-lg transition duration-500 group-hover:rounded-xl"
              />
              <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-semibold cliqin-blue-text">
                      For Interviewer
                    </h4>
                    <p className="">
                      Hello interviewers! Are you wanna be interviewers expert
                      ?Yes ,This is the right place to land. Earn a knowledge
                      and money. Come join us, build a identity for yourself.
                      Earn a knowledge and money. Come join us, build a identity
                      for yourself
                    </p>
                  </div>
                  <NavLink to="/Interview">
                    <button class=" btn-6">
                      <span>Learn More</span>
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
