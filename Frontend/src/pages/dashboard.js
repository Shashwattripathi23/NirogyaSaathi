import { useState } from "react";
import Butt1 from "../images/Butt1.png";
import NewLogo from "../images/logoW.png";
import log from "../images/log.png";
import docIm from "../images/DocImage.png";
import db from "../images/db.png";
import MAC from "../images/MAC.png";
import PatS from "../images/PatS.png";
import AU from "../images/AU.png";
import Supp from "../images/Supp.png";
import db2 from "../images/db2.png";
import Create from "../images/Create.png";
import bg2 from "../images/bg2.png";
import Faltu from "../images/Faltu.png";
import Chat from "../images/chat.png";

import im1 from "../images/im1.png";
import im2 from "../images/im2.png";
import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { ChatbotContext } from "./Chatprovider";
import { useContext } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

function Dashboard() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const { isChatCollapsed, setIsChatCollapsed } = useContext(ChatbotContext);

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
  };

  const BarChartData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Emergency Patients",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // red
          "rgba(54, 162, 235, 0.5)", // blue
          "rgba(255, 206, 86, 0.5)", // yellow
          "rgba(75, 192, 192, 0.5)", // green
          "rgba(153, 102, 255, 0.5)", // purple
          "rgba(255, 159, 64, 0.5)", // orange
          "rgba(140, 147, 215, 0.5)", // semi-transparent blue
        ],
        borderColor: [
          "#FF6384", // red
          "#36A2EB", // blue
          "#FFCE56", // yellow
          "#4BC0C0", // green
          "#9966FF", // purple
          "#FF9F40", // orange
          "#8C93D7", // blue
        ],
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  };

  const PieChartDate = {
    labels: ["Males ", "Females", "Kids"],
    datasets: [
      {
        label: "Patients",
        data: [50, 10, 40],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)", // teal
          "rgba(255, 159, 64, 0.6)", // orange
          "rgba(153, 102, 255, 0.6)", // yellow
        ],
        borderColor: [
          "rgba(75, 192, 192, 0.6)", // teal
          "rgba(255, 159, 64, 0.6)", // orange
          "rgba(153, 102, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const LineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "New Patients",
        data: [45, 89, 120, 81, 86, 65, 60, 50, 50, 58, 80, 110],
        fill: "false",
        backgroundColor: "rgba(14, 187, 19, 0.2)", // semi-transparent green
        borderColor: "#0EBB13",
        tension: 0.4,
      },
      {
        label: "OPD Patients",
        data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 80, 90, 100],
        fill: true,
        backgroundColor: "rgba(140, 147, 215, 0.5)", // semi-transparent blue
        borderColor: "#8C93D7",
        tension: 0.4,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <div
        style={{ zIndex: "1000" }}
        className="bg-gradient-to-r from-custom-blue-dark to-custom-blue-light h-20 w-full fixed top-0 left-0 z-10 flex items-center justify-between px-4"
      >
        <img
          src={Butt1}
          className="h-12 w-auto cursor-pointer"
          alt="call"
          onClick={toggleNav}
        />
        <img
          src={NewLogo}
          className="h-14 w-auto absolute left-24"
          alt="logo"
        />

        <img
          onClick={() => {
            window.location.href = "/home";
          }}
          style={{
            cursor: "pointer",
          }}
          src={log}
          className="h-12 w-auto"
          alt="log"
        />
      </div>

      {/* Side Navigation Bar */}
      <div
        style={{ zIndex: "1000" }}
        className={`fixed top-20 left-0 bg-white h-full ${
          isNavCollapsed ? "xl:w-24 md:w-16  " : "w-1/6"
        } flex flex-col shadow-lg z-10 transition-all duration-300`}
      >
        <div className="relative flex items-center py-4">
          <img
            src={docIm}
            className="xl:h-16 md:h-10 mr-0 ml-4 rounded-md"
            alt="profile"
          />
          {!isNavCollapsed && (
            <div className="flex flex-col justify-center">
              <h1
                className="text-black md:text-xs xl:text-lg xl:ml-5 md:ml-2"
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Dr. John Doe
              </h1>
              <h4
                className="text-black md:text-xs xl:text-sm xl:ml-5 md:ml-2"
                style={{ fontFamily: "Inter" }}
              >
                Admin
              </h4>
            </div>
          )}
        </div>

        <>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/dashboard";
            }}
            className="relative flex items-center py-4 bg-blue-100 border-b border-gray-300"
          >
            <span className="bg-blue-600 w-2 h-full absolute"></span>
            <img
              src={db}
              className="xl:h-8 md:h-6 md:ml-5  p-1 rounded-md xl:ml-8 bg-custom-im-dark"
              alt="call"
            />
            {!isNavCollapsed && (
              <>
                <h1
                  className="text-custom-font xl:ml-3 md:ml-4 md:text-xs xl:text-lg "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = "/dashboard";
                  }}
                >
                  Dashboard
                </h1>
              </>
            )}
          </div>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/myacc";
            }}
            className="relative flex items-center py-4 border-b border-gray-300"
          >
            <span className="w-2 h-full"></span>
            <img
              src={MAC}
              className="xl:h-8 md:h-8 md:ml-2  p-1 rounded-md xl:ml-6"
              alt="call"
            />
            {!isNavCollapsed && (
              <>
                <h1
                  className="xl:ml-3 md:ml-4 md:text-xs xl:text-lg "
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  My Account
                </h1>
              </>
            )}
          </div>
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/patient";
            }}
            className="relative flex items-center py-4 border-b border-gray-300"
          >
            <img
              src={PatS}
              className="xl:h-8 md:h-6 md:ml-5  p-1 rounded-md xl:ml-8"
              alt="call"
            />

            {!isNavCollapsed && (
              <h1
                className="text-black xl:ml-3 md:ml-5 md:text-xs xl:text-lg "
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                Patient
              </h1>
            )}
          </div>
          <div
            className="relative flex items-center py-4 border-b border-gray-300"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/support";
            }}
          >
            <img
              src={AU}
              className="xl:h-8 md:h-6 md:ml-5  p-1 rounded-md xl:ml-8"
              alt="call"
            />
            {!isNavCollapsed && (
              <h1
                className="text-black xl:ml-3 md:ml-5 md:text-xs xl:text-lg "
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                About Us
              </h1>
            )}
          </div>
          <div
            className="relative flex items-center py-4 border-b border-gray-300"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/support";
            }}
          >
            <img
              src={Supp}
              className="xl:h-8 md:h-6 md:ml-5  p-1 rounded-md xl:ml-8"
              alt="call"
            />
            {!isNavCollapsed && (
              <h1
                className="text-black xl:ml-3 md:ml-5 md:text-xs xl:text-lg "
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                Support
              </h1>
            )}
          </div>
        </>
      </div>

      {/* Main Content */}
      {isChatCollapsed && (
        <div
          style={{ zIndex: "900", opacity: "0.2", height: "100%" }}
          className={`fixed bg-black  top-20 ${
            isNavCollapsed
              ? "left-12 right-0"
              : "left-[calc(16.67%+0rem)] w-full"
          } transition-all duration-300`}
        ></div>
      )}
      <div
        style={{ height: "auto" }}
        className={`absolute bg-custom-bg-dark pb-4 top-20 ${
          isNavCollapsed
            ? "md:left-16 xl:left-24 right-0"
            : "md:left-[calc(16.67%+1.7rem)] lg:left-[calc(16.67%+2.2rem)] xl:left-[calc(16.67%+0rem)] w-full"
        } transition-all duration-300`}
      >
        <div
          style={{ zIndex: "1000" }}
          className="box h-20  bg-custom-bg-dark flex shadow-md items-center  w-full fixed"
        >
          <img
            src={db2}
            className="h-12 ml-10 border-r pr-6 py-2 border-custom-border-dark"
            alt="db"
          />
          <h2
            style={{
              fontWeight: "600",
              fontFamily: "Inter",
            }}
            className="text-custom-im-dark ml-10 md:text-lg xl:text-2xl"
          >
            Dashboard
          </h2>
          <div
            className={`bg-custom-butt box h-16 flex shadow-md items-center w-80 absolute ${
              isNavCollapsed ? "right-24" : "right-[calc(16.67%+1rem)]"
            } rounded-full transition-all duration-300`}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/patient";
            }}
          >
            <div className="bg-white w-auto rounded-full ml-5">
              <img src={Create} className="h-6 m-2" alt="create" />
            </div>
            <h2
              style={{
                fontWeight: "500",
                fontFamily: "Inter",
              }}
              className="text-white ml-6 md:text-lg xl:text-2xl"
            >
              Create new report
            </h2>
          </div>
        </div>
        <div
          style={{
            zIndex: "1200",
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className={`mt-32 h-64 mx-4 rounded-xl w-auto flex flex-row md:justify-between ${
            isNavCollapsed ? "" : "xl:mr-80"
          } `}
        >
          <div className={`flex flex-col  `}>
            <h2
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
                color: "white",
              }}
              className=" text-white xl:ml-10 xl:mt-6 md:ml-5 md:mt-4 md:text-lg xl:text-xl"
            >
              Good Morning,
            </h2>
            {isNavCollapsed && (
              <>
                <h1
                  style={{
                    fontWeight: "700",
                    fontFamily: "Inter",
                    color: "white",
                  }}
                  className=" text-white xl:ml-10 xl:mt-1 md:ml-5 md:mt-4 md:text-lg xl:text-xl"
                >
                  Dr. John Doe
                </h1>
              </>
            )}
            <h2
              style={{
                fontWeight: "500",
                fontFamily: "Inter",
                color: "white",
                //   borderBottom: "2px solid white",
              }}
              className=" text-white xl:ml-10 xl:mt-6 md:ml-5 md:mt-4 md:text-lg xl:text-xl"
            >
              Elevating care with your expertise!
            </h2>
            <h3
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
                color: "white",
              }}
              className=" text-white  xl:ml-10 xl:mt-4 xl:w-45vw md:ml-5 md:mt-4 md:text-lg xl:text-xl md:w-40vw"
            >
              We look forward to your contributions and to achieving great
              milestones together
            </h3>
          </div>
          <img
            src={Faltu}
            className={`h-56 w-72 mt-5  ${
              isNavCollapsed ? "xl:mr-12" : "xl:mr-6"
            } transition-all duration-300`}
            alt="logo"
          />
        </div>
        <div
          className={`flex flex-row justify-between border-0 items-center mt-10 w-auto mx-5 ${
            isNavCollapsed ? "" : "xl:mr-10"
          }  `}
        >
          <div
            style={{ width: isNavCollapsed ? "45%" : "41%" }}
            className=" bg-white flex  flex-row items-center md:space-x-14 xl:space-x-8   justify-between py-5 w-5/12  rounded-xl shadow-md"
          >
            <img src={im1} className="xl:h-24 md:h-8 ml-8" alt="logo" />
            <div className="flex flex-col   ">
              <h1
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-black md:text-lg xl:text-2xl xl:-ml-48 md:-ml-16   "
              >
                150
              </h1>
              <h3
                style={{
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
                className="text-black md:text-xs xl:text-2xl xl:-ml-48 md:-ml-16 "
              >
                New patients
              </h3>
            </div>
            <h3 className="text-green-600  md:text-lg xl:text-xl  pr-5 right-0 bottom-0 ">
              +40%
            </h3>
          </div>
          <div
            style={{ width: isNavCollapsed ? "45%" : "41%" }}
            className={` bg-white flex  flex-row items-center space-x-14 ${
              isNavCollapsed ? "xl:mr-0" : "xl:mr-72"
            }  justify-between py-5 w-5/12  rounded-xl shadow-md `}
          >
            <img src={im2} className="xl:h-24 md:h-8 ml-8" alt="logo" />
            <div className="flex flex-col   ">
              <h1
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-black md:text-lg xl:text-2xl xl:-ml-48 md:-ml-16   "
              >
                80
              </h1>
              <h3
                style={{
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
                className="text-black md:text-xs xl:text-2xl xl:-ml-48 md:-ml-16 "
              >
                OPD patients
              </h3>
            </div>
            <h3 className="text-green-600  md:text-lg xl:text-xl  pr-5 right-0 bottom-0 ">
              +20%
            </h3>
          </div>
        </div>
        <div
          style={{
            position: "relative",

            height: "540px",
          }}
          className={`rounded-xl bg-white mb-10 md:mx-5 pb-10 mt-10 shadow-md w-auto flex justify-center flex-col items-center ${
            isNavCollapsed ? "" : "xl:mr-80"
          } `}
        >
          <h1
            style={{
              fontWeight: "600",
              fontFamily: "Inter",
            }}
            className="text-black absolute top-8  left-24 md:text-sm xl:text-2xl"
          >
            Patients
          </h1>
          <Line options={options} className="mt-10" data={LineChartData} />
        </div>
        <div
          className={`flex flex-row bg-transparent ${
            isNavCollapsed ? "" : "xl:mr-80"
          }  h-auto justify-between w-auto md:mx-5 rounded-lg`}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              position: "relative",
              width: isNavCollapsed ? "46%" : "48%",
              height: "auto",
            }}
            className={`rounded-xl shadow-md flex items-center ${
              isNavCollapsed ? "" : "xl:w-1/3"
            } justify-centre w-1/4`}
          >
            <h1
              style={{
                // fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Inter",
              }}
              className="text-black absolute left-8 top-0 mt-1 md:text-sm xl:text-xl"
            >
              Emergency Patients
            </h1>
            <Bar className="px-10 py-10" data={BarChartData} />
          </div>
          <div
            style={{
              backgroundColor: "#ffffff",
              position: "relative",
              width: isNavCollapsed ? "46%" : "48%",
              height: "auto",
            }}
            className={`rounded-xl shadow-md  flex justify-center items-center w-1/4 ${
              isNavCollapsed ? "xl:mr-0" : "xl:w-1/3"
            }  `}
          >
            <h1
              style={{
                fontWeight: "600",
                fontFamily: "Inter",
              }}
              className="text-black absolute top-0  left-8 mt-1 md:text-sm xl:text-xl"
            >
              Gender statistics
            </h1>
            <Doughnut className="px-20 py-20 " data={PieChartDate} />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            position: "relative",

            height: "auto",
          }}
          className={`rounded-xl mt-10 shadow-md flex flex-col w-auto mx-5 ${
            isNavCollapsed ? "" : "xl:mr-80"
          } `}
        >
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "Inter",
              height: "100px",
              width: "100%",
            }}
            className="text-white pl-8 py-6 left-0 rounded-t-xl bg-custom-finder"
          >
            Patient history
          </h1>

          <div
            style={{ fontWeight: "500" }}
            className="flex flex-row justify-between p-8 w-auto md:text-sm xl:text-2xl "
          >
            <h2 style={{ fontFamily: "Inter" }}>Name</h2>
            <h2 style={{ fontFamily: "Inter" }}>Patient's ID</h2>
            <h2 style={{ fontFamily: "Inter" }}>Gender</h2>
            <h2 style={{ fontFamily: "Inter" }}>Prescription ID</h2>
            <h2 style={{ fontFamily: "Inter" }}>Last visit date</h2>
            <h2 style={{ fontFamily: "Inter" }}>Medical report</h2>
          </div>

          {/* Entries */}
          {data.map((entry, index) => (
            <div
              style={{ overflow: "hidden" }}
              key={index}
              className={`flex  flex-row py-6 justify-between px-8   ${
                index % 2 === 0 ? "bg-custom-finder-light" : "bg-white"
              }`}
            >
              <div className=" w-48 ">
                <h2
                  style={{
                    fontFamily: "Inter",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.5em",
                  }}
                  className="mx-1 py-0 md:text-sm xl:text-xl"
                >
                  {entry.name}
                </h2>
              </div>
              <div className=" w-48">
                <h2
                  style={{
                    fontFamily: "Inter",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.5em",
                  }}
                  className="-mx-1 py-0 md:text-sm xl:text-xl"
                >
                  {entry.NSID}
                </h2>
              </div>
              <div className=" w-48">
                <h2
                  style={{
                    fontFamily: "Inter",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.5em",
                  }}
                  className="mx-4 py-0 md:text-sm xl:text-xl"
                >
                  {entry.gender}
                </h2>
              </div>
              <div className=" w-48">
                <h2
                  style={{
                    fontFamily: "Inter",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.5em",
                  }}
                  className="mx-2 py-0 md:text-sm xl:text-xl"
                >
                  {entry.prescriptions[0]?.id}
                </h2>
              </div>
              <div className=" w-48">
                <h2
                  style={{
                    fontFamily: "Inter",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.5em",
                  }}
                  className="ml-10 py-0 md:text-sm xl:text-xl"
                >
                  {entry.prescriptions[0]?.visit}
                </h2>
              </div>
              <div className="">
                <h2
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "600",
                    lineHeight: "1.5em",
                    cursor: "pointer",
                  }}
                  className="text-white bg-custom-finder-dark ml-20 rounded-full shadow-xl xl:px-14 md:px-4 py-2"
                  onClick={() => {
                    localStorage.setItem("pdf", JSON.stringify(entry));
                    window.location.href = "viewpres";
                  }}
                >
                  View
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
