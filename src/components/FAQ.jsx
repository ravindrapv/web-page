import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FAQ() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <section className="text-gray-700" id="FAQ">
        <div className="container px-5 py-4 mx-auto">
          <div className=" text-center my-8">
            <h1 className="text-3xl font-semibold text-blue-900 capitalize lg:text-4xl dark:text-white">
              {" "}
              Frequently Asked Question
            </h1>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 bg-blue-900 rounded-full" />
              <span className="inline-block w-3 h-1 ml-1 bg-blue-900 rounded-full" />
              <span className="inline-block w-1 h-1 ml-1 bg-blue-900 rounded-full" />
            </div>
          </div>
          <div>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#FF771B",
                    },
                  }}
                  textColor="#FF771B"
                >
                  <Tab
                    label="Client FAQs"
                    {...a11yProps(0)}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 22,
                      textTransform: "capitalize",
                      color: "#211572",
                    }}
                  />
                  <Tab
                    label="candidate FAQs"
                    {...a11yProps(1)}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 22,
                      textTransform: "capitalize",
                      color: "#211572",
                    }}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div className="space-y-4">
                  <details
                    class="group border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    close
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                  <details
                    class="group border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    close
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                  <details
                    class="group border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    close
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                  <details
                    class="group border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    closes
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="space-y-4">
                  <details
                    class="group border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    close
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                  <details
                    class="group border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    close
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                  <details
                    class="group border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    close
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                  <details
                    class="group border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                    close
                  >
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-xl font-semibold  text-blue-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing?
                      </h2>

                      <span class="relative ml-1.5 h-10 w-10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p class="mt-4 leading-relaxed text-gray-700">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ab hic veritatis molestias culpa in, recusandae laboriosam
                      neque aliquid libero nesciunt voluptate dicta quo officiis
                      explicabo consequuntur distinctio corporis earum
                      similique!
                    </p>
                  </details>
                </div>
              </TabPanel>
            </Box>
          </div>
        </div>
      </section>
    </div>
  );
}
