import React from "react";

export default function PanelStrenth() {
  return (
    <div>
      <div className=" my-8">
        <h3 className="text-4xl tracking-widest cliqin-blue-text text-center font-bold ">
          Our Panel Strength
        </h3>
        <div className="mt-2 text-center">
          <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
          <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 dark:bg-gray-800 cliqin-blue-text"
              >
                Technology
              </th>
              <th scope="col" className="px-6 py-3">
                Panels
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 dark:bg-gray-800 cliqin-blue-text"
              >
                Technology
              </th>
              <th scope="col" className="px-6 py-3">
                Panels
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-b-2 border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium cliqin-blue-text whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 cliqin-blue-text"
              >
                Backend - Java
              </th>
              <td className="px-6 py-4">100</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cliqin-blue-text">
                C++
              </td>
              <td className="px-6 py-4">2999</td>
            </tr>
            <tr className=" border-b-2 border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium cliqin-blue-text whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 cliqin-blue-text"
              >
                Backend - .NET
              </th>
              <td className="px-6 py-4">250</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cliqin-blue-text">
                Backend - Python
              </td>
              <td className="px-6 py-4">199</td>
            </tr>
            <tr className=" border-b-2 border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium cliqin-blue-text whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 cliqin-blue-text"
              >
                JavaScript
              </th>
              <td className="px-6 py-4">230</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cliqin-blue-text">
                kotlin
              </td>
              <td className="px-6 py-4">99</td>
            </tr>
            <tr className=" border-b-2 border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium cliqin-blue-text whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 cliqin-blue-text"
              >
                React
              </th>
              <td className="px-6 py-4">420</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cliqin-blue-text">
                typescript
              </td>
              <td className="px-6 py-4">799</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium cliqin-blue-text whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 cliqin-blue-text"
              >
                Angular
              </th>
              <td className="px-6 py-4">127</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 cliqin-blue-text">
                MongoDB
              </td>
              <td className="px-6 py-4">999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
