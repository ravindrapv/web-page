import React from "react";
import { Link } from "react-router-dom";
export default function Business() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <nav className=" py-4 shadow-xl pf">
          <div className="container-1 flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src="/images/Logo-5@2x.png"
                className="h-10 mr-3 sm:h-10"
                alt="cliqhr Logo"
              />
            </Link>
            <div>
              <button
                type="button"
                class="text-orange-500 border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:focus:ring-orange-500"
              >
                Login
              </button>
              <button className="btn-6 ml-4" type="button">
                Sign up
              </button>
            </div>
          </div>
        </nav>
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl small-src"
                src="/images/Group 8844.png"
                alt="Catalogue-pana.svg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-4xl font-bold text-color dark:text-white lg:text-5xl">
                  <span className=" flex gap-4">
                    <img
                      src="/images/Group 6212.png"
                      alt=""
                      className=" w-24 small-src"
                    />{" "}
                    get the idea
                  </span>
                  <span className=" text-3xl text-color font-extralight ">
                    About our business Interview
                  </span>
                </h1>
                <span className="center mt-8">
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-3" className="btn-33">
                    <img src="/images/play-button.svg" width={30} alt="" />
                    Watch video
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold">
                        Congratulations random Internet user!
                      </h3>
                      <p className="py-4">
                        <iframe
                          width="450"
                          height="390"
                          src="https://www.youtube.com/embed/lnG5UTWU-KQ"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </p>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="hero-WH"
                src="/images/Group 8845.png"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
