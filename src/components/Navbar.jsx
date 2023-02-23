import React from "react";
import { Link } from "react-scroll";
export default function NavBar() {
  return (
    <nav className="p-3 pt-8 hero-bg">
      <div className="container-1 flex flex-wrap items-center justify-between mx-auto">
        <Link className="flex items-center">
          <img
            src="/images/Logo-5@2x.png"
            className="h-10 mr-3 sm:h-10"
            alt="cliqhr Logo"
          />
        </Link>
        <div>
          <button
            className="text-orange-500 border border-orange-500 hover:bg-blue-900 hover:text-white active:bg-rose-600 font-bold capitalize text-sm px-6 py-3 rounded-full outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 mr-8"
            type="button"
          >
            Login
          </button>
          <div className="dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn bg-blue-900  rounded-full">
              <img className=" w-4 h-4" src="/images/Group 171.png" alt="" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/"
                  activeClass=" bg-blue-900 rounded dark:bg-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-0}
                  duration={500}
                  className="block py-2 font-medium pl-3 pr-4 text-white bg-blue-900 rounded dark:bg-blue-600"
                  aria-current="page"
                >
                  SignUp
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  activeClass=" bg-blue-900 rounded dark:bg-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-0}
                  duration={500}
                  className="block py-2 font-medium pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="Services"
                  activeClass=" bg-blue-900 rounded dark:bg-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-0}
                  duration={500}
                  className="block py-2 font-medium pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="Steps"
                  activeClass=" bg-blue-900 rounded dark:bg-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-0}
                  duration={500}
                  className="block py-2 font-medium pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  process flow
                </Link>
              </li>
              <li>
                <Link
                  to="FAQ"
                  activeClass=" bg-blue-900 rounded dark:bg-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 font-medium pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="ContactUs"
                  activeClass=" bg-blue-900 rounded dark:bg-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 font-medium pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="footer"
                  activeClass=" bg-blue-900 rounded dark:bg-blue-600"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 font-medium pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
