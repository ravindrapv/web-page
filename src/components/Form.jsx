import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ForBusines from "./ForBusines";
import Forinterviwer from "./ForInterviwer";

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

export default function Form() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <section className="text-gray-700" id="ContactUs">
        <div className="container px-5 py-4 mx-auto">
          <div className=" text-center my-8">
            <h1 className="text-3xl font-semibold text-blue-900 capitalize lg:text-4xl dark:text-white">
              Contact us
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
                    label="For Busines"
                    {...a11yProps(0)}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      color: "#211572",
                    }}
                  />
                  <Tab
                    label="For Interviwer"
                    {...a11yProps(1)}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      color: "#211572",
                    }}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <ForBusines />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Forinterviwer />
              </TabPanel>
            </Box>
          </div>
        </div>
      </section>
    </div>
  );
}
