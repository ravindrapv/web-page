/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
export default function About() {
  return (
    <section>
      <header id="about">
        <div className=" bg-about py-4  justify-center items-center h-full small-screen">
          <div className=" my-8">
            <h3 className="text-4xl tracking-widest cliqin-blue-text text-center font-bold ">
              About us
            </h3>
            <div className="mt-2 text-center">
              <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
              <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
              <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
            </div>
          </div>
          <h1 className="mt-2 text-center text-3xl cliqin-blue-text font-semibold mb-5">
            Our Goal is to reach world's largest interviewer product
          </h1>
          <h4 className="text-center font-thin text-xl mt-2 cliqin-blue-text">
            CLIQHR is world’s leading on demand Interview platform built to
            disrupt traditional <br /> hiring methods and works on a unique
            concept of outsourced interviewing.
          </h4>

          <div className="md:flex md:justify-center md:space-x-8 md:px-14">
            <div className="mt-16 py-4 px-4  w-72  hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img
                  className="w-48 h-36 ml-10 rounded-3xl "
                  src="https://media.istockphoto.com/id/1182304971/vector/planner-schedule-calendar-time-timetable-concept-vector-flat-graphic-design-illustration.jpg?s=612x612&w=0&k=20&c=EGykM8sGj_QRCELjZILmrh5kPVQVO_QCQzivVJYxXVM="
                  alt="img"
                />
                <div className="mt-4 text-center">
                  <h1 className=" text-3xl font-bold cliqin-text-orange">
                    10,000+ Hrs
                  </h1>
                  <p className="mt-4 cliqin-blue-text text-xl">
                    Has been we served Has been we served
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 py-4 px-4 w-72  hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img
                  className="w-48 h-36  ml-10 rounded-3xl"
                  src="https://www.b2c-solutions.com/uploads/posts/large/1617621926392.png"
                  alt=""
                />
                <div className="mt-4 text-center">
                  <h1 className=" text-3xl  font-bold cliqin-text-orange">
                    2000+
                  </h1>
                  <p className="mt-4 cliqin-blue-text text-xl">
                    Interviews completed successfully
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 py-4 px-4 w-72  hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img
                  className="w-48 h-36  ml-10 rounded-3xl"
                  src="https://www.commbox.io/wp-content/uploads/2019/10/32-1-1024x597.jpg"
                  alt=""
                />
                <div className="mt-4 text-center">
                  <h1 className=" text-3xl  font-bold cliqin-text-orange">
                    200k+
                  </h1>
                  <p className="mt-4 cliqin-blue-text text-xl">
                    have been deployed at the right roles
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 py-4 px-4 w-72  hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
              <div className="w-sm">
                <img
                  className="w-48 h-36  ml-10 rounded-3xl"
                  src="https://www.skoolbeep.com/blog/wp-content/uploads/2021/06/Advantages-of-using-online-assessment-tools-to-evaluate-students.png"
                  alt=""
                />
                <div className="mt-4 text-center">
                  <h1 className=" text-3xl  font-bold cliqin-text-orange">
                    1 million +
                  </h1>
                  <p className="mt-4 cliqin-blue-text text-xl">
                    assessments conducted so far
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
