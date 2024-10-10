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
import Mail from "../images/Mail.png";
import Map from "../images/Map.png";
import FB from "../images/FB.png";
import IG from "../images/IG.png";
import Twt from "../images/Twt.png";
import Lnk from "../images/Lnk.png";
import BackButt from "../images/backButt.png";
import MailB from "../images/MailB.png";
import Password from "../images/Password.png";
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

import { ChatbotContext } from "./Chatprovider";
import { useContext } from "react";

function CP() {
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
          isNavCollapsed ? "w-24" : "w-1/6"
        } flex flex-col shadow-lg z-10 transition-all duration-300`}
      >
        <div className="relative flex items-center py-4 border-b-2">
          <img
            src={docIm}
            className="h-16 mr-4 ml-4 rounded-md"
            alt="profile"
          />
          {!isNavCollapsed && (
            <div className="flex flex-col justify-center ">
              <h1
                className="text-black"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Dr. John Doe
              </h1>
              <h4
                className="text-black"
                style={{ fontSize: "12px", fontFamily: "Inter" }}
              >
                Admin
              </h4>
            </div>
          )}
        </div>

        <>
          <div className="relative flex items-center py-4  border-b border-gray-300">
            <span className=" w-2 h-full absolute"></span>
            <img src={db} className="h-8 p-1 rounded-md ml-9 " alt="call" />
            {!isNavCollapsed && (
              <>
                <h1
                  className="text-black ml-3"
                  style={{
                    fontSize: "16px",
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
          <div className="relative flex items-center py-4 border-b bg-blue-100 border-gray-300">
            <img
              src={MAC}
              className="bg-custom-blue-dark h-9 p-1 rounded-md ml-8"
              alt="call"
            />
            <span className="bg-blue-600 w-2 h-full absolute"></span>
            {!isNavCollapsed && (
              <>
                <h1
                  className="text-custom-font ml-4"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  // style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = "/myacc";
                  }}
                >
                  My Account
                </h1>
              </>
            )}
          </div>
          <div className="relative flex items-center py-4 border-b bg-blue-0 border-gray-300">
            <img
              src={PatS}
              className=" h-9 px-2 py-2 rounded-md ml-8"
              alt="call"
            />

            <span className="w-2 h-full"></span>

            {!isNavCollapsed && (
              <h1
                className="text-black ml-1"
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = "/patient  ";
                }}
              >
                Patient
              </h1>
            )}
          </div>
          <div className="relative flex items-center py-4 border-b border-gray-300">
            <img src={AU} className="h-9 p-1 rounded-md ml-8" alt="call" />
            {!isNavCollapsed && (
              <h1
                className="text-black ml-3"
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                About Us
              </h1>
            )}
          </div>
          <div className="relative flex items-center py-4 border-b border-gray-300">
            <img src={Supp} className="h-9 p-1 rounded-md ml-8" alt="call" />
            {!isNavCollapsed && (
              <h1
                className="text-black ml-3"
                style={{
                  fontSize: "16px",
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
              color: "#454547",
            }}
            className=" ml-10 border-r pr-6 py-2 border-custom-border-dark"
          >
            My Account
          </h2>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
            className="text-custom-im-dark ml-10 border-r-0 pr-6 py-2 border-custom-border-dark"
          >
            Edit Profile
          </h2>
        </div>
        <div
          style={{
            width: isNavCollapsed ? "95%" : "79%",
          }}
          className="h-auto bg-transparent ml-11  pb-14 flex flex-col   "
        >
          <div
            style={{
              width: "100%",
            }}
            className="h-auto bg-white mx-auto mt-40 shadow-lg  rounded-md flex flex-row border-b-2  pt-5    "
          >
            <h1
              style={{
                fontSize: "22px",
                paddingBottom: "10px",
                fontFamily: "Inter",
                color: "#979797",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/edit   ";
              }}
              className="text-black flex items-end px-10 justify-end pt-10  mx-5 border-b-4"
            >
              Personal details
            </h1>
            <h1
              style={{
                fontSize: "22px",
                paddingBottom: "10px",
                fontFamily: "Inter",
                color: "#979797",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/bio";
              }}
              className="text-black flex items-end px-10 justify-end pt-10   border-b-4      mx-5"
            >
              Profile and Bio
            </h1>
            <h1
              style={{
                fontSize: "22px",
                paddingBottom: "10px",
                fontFamily: "Inter",

                color: "#007BA4",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/cp";
              }}
              className="text-black flex items-end px-10 justify-end pt-10 border-b-4  border-custom-blue-dark  mx-5"
            >
              Change password
            </h1>
          </div>
          <div
            style={{
              width: "100%",
            }}
            className="h-auto bg-white mx-auto mt-0  shadow-lg  rounded-md flex flex-col   pb-14"
          >
            <div
              style={{
                width: "100%",
              }}
              className="h-auto bg-white mx-auto mt-20 rounded-md flex flex-row  pr-10 pb-14 border-0  "
            >
              <div
                style={{
                  width: "38%",
                }}
                className="flex flex-col  justify-center  border-0 px-auto"
              >
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="text-black flex  pt-2 ml-10 pb-4 "
                >
                  Email ID
                </h1>

                <div className="flex flex-row items-center shadow-lg h-14 ml-10">
                  <img src={MailB} className="h-5 w-8 mx-5" alt="mail"></img>
                  <input
                    type="email"
                    placeholder="Enter your email ID"
                    style={{
                      fontSize: "20px",

                      borderRadius: "16px",
                      outline: "none",
                    }}
                    className="ml-1 h-10 w-full"
                  />
                </div>
              </div>
              <div
                style={{
                  width: "38%",
                }}
                className="flex flex-col  justify-center  border-0 px-auto"
              >
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="text-black flex  pt-2 ml-5 pb-4 "
                >
                  Password
                </h1>

                <div className="flex flex-row items-center shadow-lg h-14 ml-5">
                  <img src={Password} className="h-5 w-5 mx-5" alt="mail"></img>
                  <input
                    type="email"
                    placeholder="Enter your email ID"
                    style={{
                      fontSize: "20px",

                      borderRadius: "16px",
                      outline: "none",
                    }}
                    className="ml-1 h-10 w-full"
                  />
                </div>
              </div>
              <div
                style={{
                  width: "38%",
                }}
                className="flex flex-col justify-center  border-0 px-auto"
              >
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    fontFamily: "Inter",

                    // color: "#979797",
                  }}
                  className="text-black flex  pt-2 ml-5 pb-4 "
                >
                  Confirm Password
                </h1>

                <div className="flex flex-row items-center shadow-lg h-14 ml-5">
                  <img src={Password} className="h-5 w-5 mx-5" alt="mail"></img>
                  <input
                    type="email"
                    placeholder="Enter your email ID"
                    style={{
                      fontSize: "20px",

                      borderRadius: "16px",
                      outline: "none",
                    }}
                    className="ml-1 h-10 w-full"
                  />
                </div>
              </div>
            </div>
            <div
              style={{ width: "100%" }}
              className="flex flex-row justify-end mr-5 mt-40"
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                  border: "2px solid #979797",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = "/myacc";
                }}
                className="h-14 w-auto px-6 rounded-md flex items-center justify-center shadow-lg"
              >
                Cancel
              </h1>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.location.href = "/myacc";
                }}
                className="text-white bg-custom-blue-dark h-14 w-auto px-6 shadow-lg mr-24 rounded-md ml-5 flex items-center justify-center"
              >
                Update Profile
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CP;
