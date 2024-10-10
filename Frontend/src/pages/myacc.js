import { useState } from "react";
import Butt1 from "../images/Butt1.png";
import NewLogo from "../images/logoW.png";
import log from "../images/log.png";
import docIm from "../images/DocImage.png";
import db from "../images/db2.png";
import MAC from "../images/macN.png";
import Mac2 from "../images/MAC.png";
import PatS from "../images/PatS.png";
import Pat from "../images/edit.png";
import QRCode from "qrcode.react";
import AU from "../images/AU.png";
import Supp from "../images/Supp.png";
import ReactDOM from "react-dom";
import db2 from "../images/db2.png";
import Create from "../images/edit.png";
import bg2 from "../images/bg2.png";
import Faltu from "../images/Faltu.png";
import Chat from "../images/chat.png";
import im1 from "../images/im1.png";
import im2 from "../images/im2.png";
import Settings from "../images/Settings.png";
import searchF from "../images/searchF.png";
import male from "../images/male.png";
import female from "../images/female.png";
import Go from "../images/Go.png";
import Vr from "../images/del.png";
import React, { useEffect } from "react";
import pdf from "../images/pdf.png";
import lineW from "../images/LineW.png";
import { ChatbotContext } from "./Chatprovider";
import { useContext } from "react";

function Myacc() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const { isChatCollapsed, setIsChatCollapsed } = useContext(ChatbotContext);

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
  };
  return (
    <>
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
            className="relative flex items-center py-4 border-t border-b border-gray-300"
          >
            <img
              src={db}
              className="xl:h-8 md:h-6 md:ml-5  p-1 rounded-md xl:ml-8"
              alt="call"
            />
            {!isNavCollapsed && (
              <>
                <h1
                  className=" xl:ml-3 md:ml-4 md:text-xs xl:text-lg "
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
            className="relative flex items-center py-4  bg-blue-100 border-b border-gray-300"
          >
            <span className="bg-blue-600 w-2 h-full absolute"></span>
            <img
              src={MAC}
              className="xl:h-8 md:h-8 md:ml-4  p-1 rounded-md xl:ml-8  bg-custom-im-dark"
              alt="call"
            />
            {!isNavCollapsed && (
              <>
                <h1
                  className="xl:ml-3 md:ml-4 md:text-xs xl:text-lg text-custom-font "
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
            className="relative flex items-center py-4 border-b  border-gray-300"
          >
            <img
              src={PatS}
              className="xl:h-8 md:h-6 md:ml-5  p-1 rounded-md xl:ml-8 "
              alt="call"
            />

            {!isNavCollapsed && (
              <h1
                className=" xl:ml-3 md:ml-5 md:text-xs xl:text-lg "
                style={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                Patient
              </h1>
            )}
          </div>
          <div className="relative flex items-center py-4 border-b border-gray-300">
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
          <div className="relative flex items-center py-4 border-b border-gray-300">
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
      {isChatCollapsed && (
        <div
          id="chatFilter"
          style={{ zIndex: "900", opacity: "0.2", height: "100%" }}
          className={`fixed bg-black pb-96 top-20 ${
            isNavCollapsed
              ? "left-24 right-0"
              : "left-[calc(16.67%+0rem)] w-full"
          } transition-all duration-300`}
        ></div>
      )}
      <div
        style={{ height: "auto", minHeight: "100vh" }}
        id="main-content"
        className={`absolute bg-custom-bg-dark h-full top-20 pb-80 ${
          isNavCollapsed ? "left-24 right-0" : "left-[calc(16.67%+0rem)] w-full"
        } transition-all duration-300 flex flex-col `}
      >
        <div
          style={{ zIndex: "1000" }}
          className={`box h-20  bg-custom-bg-dark flex shadow-md items-center w-full fixed top-20 ${
            isNavCollapsed ? "left-24" : "left-[calc(16.67%+0rem)]"
          }  transition-all duration-300`}
        >
          <img
            src={Mac2}
            className="h-14 ml-10 border-r pr-6 py-2 border-custom-border-dark"
            alt="db"
          />
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
            className="text-custom-im-dark ml-10"
          >
            My Account
          </h2>
          <div
            className={`bg-custom-butt box h-16 flex shadow-md items-center w-auto pr-10 absolute ${
              isNavCollapsed
                ? "right-24"
                : "right-[calc(16.67%+1rem)] cursor-pointer"
            } rounded-full transition-all duration-300`}
            onClick={() => {
              window.location.href = "/edit";
            }}
          >
            <div className="bg-white w-auto rounded-full ml-5">
              <img src={Create} className="h-8 m-2" alt="create" />
            </div>
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "500",
                fontFamily: "Inter",
                cursor: "pointer",
              }}
              className="text-white ml-6"
            >
              Edit Profile
            </h2>
          </div>
        </div>
        <div
          className={`h-auto bg-transparent   pb-14 flex flex-col mx-10  w-full  ${
            isNavCollapsed ? "" : "xl:mr-96"
          } `}
        >
          <div
            style={{
              zIndex: "900",
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: isNavCollapsed ? "100%" : "100%", // Adjust this line
            }}
            className="mt-32 h-64 ml-0 mr-5 rounded-xl shadow-md flex flex-row items-center"
          >
            <img
              src={docIm}
              className="h-52 w-52 rounded-full ml-10"
              alt="faltu"
            />
            <div className="flex flex-col items-start ">
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="text-white ml-10 pb-2"
              >
                Hello, I am
              </h1>
              <h2
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "Inter",
                }}
                className="text-white ml-10"
              >
                Dr. John Doe
              </h2>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
                className="text-white ml-10 pt-4 "
              >
                MBBS , MS - General Surgery , Physician
              </h1>
              <img src={lineW} className="h-1 w-96 ml-10 mt-2" alt="line" />
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
                className="text-white ml-10 pt-4 "
              >
                16 years of experience
              </h1>
            </div>
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
                  className="text-black md:text-lg xl:text-4xl xl:-ml-48 md:-ml-16   "
                >
                  150
                </h1>
                <h3
                  style={{
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                  className="text-black md:text-xs xl:text-3xl xl:-ml-48 md:-ml-16 "
                >
                  New patients
                </h3>
              </div>
              <h3 className="text-green-600  md:text-lg xl:text-2xl  pr-5 right-0 bottom-0 ">
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
                  className="text-black md:text-lg xl:text-4xl xl:-ml-48 md:-ml-16   "
                >
                  80
                </h1>
                <h3
                  style={{
                    fontWeight: "400",
                    fontFamily: "Inter",
                  }}
                  className="text-black md:text-xs xl:text-3xl xl:-ml-48 md:-ml-16 "
                >
                  OPD patients
                </h3>
              </div>
              <h3 className="text-green-600  md:text-lg xl:text-2xl  pr-5 right-0 bottom-0 ">
                +20%
              </h3>
            </div>
          </div>

          <div
            style={{
              width: "100%",
            }}
            className="h-auto bg-white ml-0 mt-10 shadow-lg rounded-md flex flex-col   pb-14    "
          >
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                fontFamily: "Inter",
              }}
              className="text-black ml-10 mt-10"
            >
              About
            </h1>
            <div
              style={{
                width: isNavCollapsed ? "95%" : "95%",
                color: "#454547",
                fontSize: "24px",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" border-0 pb-4 mx-auto mt-10 "
            >
              Dr. John Doe is an eminent Endocrinologist associated with med
              hospitals who is specially trained to diagnose diseases related to
              glands. She specialises in treating people who suffer from
              hormonal imbalances, typically from glands in the endocrine
              system. The most common conditions treated by Dr. Linda are
              Diabetes, Metabolic disorders, Lack of growth, Osteoporosis,
              Thyroid diseases, Cancers of the endocrine glands, Over- or
              under-production of hormones, Cholesterol disorders, Hypertension
              and Infertility. Also available for consultation at Med hospital.
              Dr. Linda's approach lies in understanding patients diseases and
              the procedure recommended along with care.
            </div>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                fontFamily: "Inter",
              }}
              className="text-black ml-10 mt-10"
            >
              Specialized in
            </h1>
            <div
              style={{
                width: isNavCollapsed ? "95%" : "95%",
                color: "#454547",
                fontSize: "24px",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" border-0 pb-4 h-auto mx-auto mt-10 flex flex-row items-center flex-wrap"
            >
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-white bg-custom-butt py-3 rounded-lg  px-10 mr-3 my-4"
              >
                Diabetes
              </span>
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-white bg-custom-butt py-3 rounded-lg  px-10 mr-3 my-4"
              >
                Thyroid
              </span>
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-white bg-custom-butt py-3 rounded-lg  px-10 mr-3 my-4"
              >
                ENT
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "transparent",
            }}
            className="h-auto ml-0 mt-10  rounded-md flex flex-row  pb-10 border-0    "
          >
            <div
              style={{
                width: "50%",
              }}
              className="h-auto border-0 bg-transparent ml-0 mt-10  flex flex-col justify-start items-start  "
            >
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#454547",
                }}
                className=" mt-0"
              >
                Mobile Number
              </h1>
              <div
                style={{
                  width: isNavCollapsed ? "95%" : "95%",
                  color: "#454547",
                  fontSize: "24px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="  py-4 pl-4 mt-5 bg-white border-2 rounded-lg shadow-md "
              >
                +91 9876543210
              </div>
            </div>
            <div
              style={{
                width: "50%",
              }}
              className="h-auto border-0 bg-transparent ml-0 mt-10  flex flex-col justify-start items-start  "
            >
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#454547",
                }}
                className=" mt-0"
              >
                Email Address
              </h1>
              <div
                style={{
                  width: isNavCollapsed ? "100%" : "100%",
                  color: "#454547",
                  fontSize: "24px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="  py-4 pl-4 mt-5 bg-white border-2 rounded-lg shadow-md "
              >
                johndoe@outlook.com
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "transparent",
            }}
            className="h-auto ml-0 mt-0  rounded-md flex flex-row  pb-14 border-0    "
          >
            <div
              style={{
                width: "100%",
              }}
              className="h-auto border-0 bg-transparent ml-0 mt-10  flex flex-col justify-start items-start  "
            >
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#454547",
                }}
                className=" mt-0"
              >
                Clinic Address
              </h1>
              <div
                style={{
                  width: "100%",
                  color: "#454547",
                  fontSize: "24px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="  py-4 pl-4 min-h-36 mt-5 bg-white border-2 rounded-lg shadow-md "
              >
                123, ABC Street, XYZ City, State, Country, Pincode
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Myacc;
