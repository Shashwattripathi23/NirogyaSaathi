import { useState } from "react";
import Butt1 from "../images/Butt1.png";
import NewLogo from "../images/logoW.png";
import log from "../images/log.png";
import docIm from "../images/DocImage.png";
import db from "../images/home.png";
import MAC from "../images/MAC.png";
import PatS from "../images/search.png";
import Pat from "../images/edit.png";
import AU from "../images/AU.png";
import Supp from "../images/Supp.png";
import db2 from "../images/db2.png";
import Create from "../images/addP.png";
import bg2 from "../images/bg2.png";
import Faltu from "../images/Faltu.png";
import Chat from "../images/chat.png";
import im1 from "../images/im1.png";
import im2 from "../images/im2.png";
import Settings from "../images/Settings.png";
import searchF from "../images/searchF.png";
import male from "../images/male.png";
import female from "../images/female.png";
import Vr from "../images/Vr.png";
import { ChatbotContext } from "./Chatprovider";
import { useContext } from "react";
import Prescription from "./prescription";

function Newadd() {
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
            className="relative flex items-center py-4 border-b  bg-blue-100 border-gray-300"
          >
            <span className="bg-blue-600 w-2 h-full absolute"></span>
            <img
              src={PatS}
              className="xl:h-8 md:h-6 md:ml-5  p-1 rounded-md xl:ml-8  bg-custom-im-dark"
              alt="call"
            />

            {!isNavCollapsed && (
              <h1
                className="text-custom-font xl:ml-3 md:ml-5 md:text-xs xl:text-lg "
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
          style={{ zIndex: "900", opacity: "0.2", height: "100%" }}
          className={`fixed bg-black  top-20 ${
            isNavCollapsed
              ? "left-12 right-0"
              : "left-[calc(16.67%+0rem)] w-full"
          } transition-all duration-300`}
        ></div>
      )}
      <div
        // style={{ height: "auto" }}
        className={`absolute bg-custom-bg-dark pb-24 top-20 h-auto ${
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
            src={Pat}
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
            Patient history
          </h2>
        </div>
        <div
          style={{ zIndex: "1000", height: "auto" }}
          className={`box   bg-white flex flex-col shadow-lg items-start w-auto md:mx-5 md:mb-56 lg:mb-0  mt-32 ${
            isNavCollapsed ? "xl:ml-48 , xl:w-4/5" : "xl:ml-24 , xl:w-3/4"
          }  transition-all duration-300`}
        >
          <div className="flex flex-row items-center justify-between w-full p-8 border-b-4 ">
            <h1
              style={{
                fontWeight: "500",
                fontFamily: "Inter",
              }}
              className="text-custom-im-dark ml-6 md:text-xs xl:text-lg opacity-0"
            >
              NSID: 4568786dF
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className="text-black md:text-xs xl:text-lg"
            >
              Date:24/4/23
            </h1>
          </div>
          <div className="mt-10">
            <h1
              style={{
                fontWeight: "600",
                fontFamily: "Inter",
              }}
              className="text-custom-black ml-14 md:text-xs xl:text-lg"
            >
              Patient's details
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between w-full xl:p-8 md:px-8 md:py-4">
            <div className="flex flex-col justify-start ml-6">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                First Name
              </h1>
              <div>
                <input
                  id="fname"
                  type="text"
                  placeholder="Enter first name"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 xl:w-96 md:h-8 md:w-32 lg:w-56 md:text-xs xl:text-lg md:pl-1 lg:pl-6"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-6 md:text-xs xl:text-lg">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                Last Name
              </h1>
              <div>
                <input
                  id="lname"
                  type="text"
                  placeholder="Enter last name"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 xl:w-96 md:pl-1 lg:pl-6 md:h-8 lg:w-56 md:w-32 md:text-xs xl:text-lg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end md:mt-10 xl:mt-0">
              <div
                style={{ marginLeft: "0rem" }}
                className="flex flex-row justify-centre items-center mx-5 xl:mt-16"
              >
                <label
                  style={{
                    fontWeight: "450",
                    fontFamily: "Inter",
                  }}
                  className="xl:pt-2 md:mx-2 md:text-xs xl:text-lg"
                >
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  className="border-2 border-custom-border-dark xl:mx-4 rounded-md xl:h-10 xl:w-10 md:h-5 md:w-5 "
                />
              </div>
              <div
                style={{ marginLeft: "0rem" }}
                className="flex flex-row justify-centre mx-5 xl:mt-16"
              >
                <label
                  style={{
                    fontWeight: "450",
                    fontFamily: "Inter",
                  }}
                  className="xl:pt-2 md:mx-2 md:text-xs xl:text-lg"
                >
                  Female
                </label>
                <input
                  type="radio"
                  name="gender"
                  className="border-2 border-custom-border-dark xl:mx-4 rounded-md xl:h-10 xl:w-10 md:h-5 md:w-5"
                />
              </div>
              <div
                style={{ marginLeft: "0rem" }}
                className="flex flex-row justify-start xl:mx-5 xl:mt-16"
              >
                <label
                  style={{
                    fontWeight: "450",
                    fontFamily: "Inter",
                  }}
                  className="xl:pt-2 md:mx-2 md:text-xs xl:text-lg"
                >
                  Transformer
                </label>
                <input
                  type="radio"
                  name="gender"
                  className="border-2 border-custom-border-dark xl:mx-4 rounded-md xl:h-10 xl:w-10 md:h-5 md:w-5"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full xl:p-8 md:px-8 md:py-5">
            <div className="flex flex-col justify-start ml-6">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                Age
              </h1>
              <div>
                <input
                  id="age"
                  type="text"
                  placeholder="Enter age"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 lg:w-56 xl:w-96 md:h-8 md:w-32 md:text-xs xl:text-lg  md:pl-1 lg:pl-6"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-6">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                Weight
              </h1>
              <div>
                <input
                  id="weight"
                  type="text"
                  placeholder="Enter weight"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 lg:w-56 xl:w-96 md:h-8 md:w-32 md:text-xs xl:text-lg  md:pl-1 lg:pl-6"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-6">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                Phone Number
              </h1>
              <div className="flex flex-row justify-start">
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter phone number"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 lg:w-56 xl:w-96 md:h-8 md:w-32 md:text-xs xl:text-lg md:pl-1 lg:pl-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full p-1">
            <div
              style={{ width: isNavCollapsed ? "45%" : "40%" }}
              className={`flex flex-col justify-start ml-14 ${
                isNavCollapsed ? "md:pr-5 lg:px-0" : "md:pr-5 lg:pr-0 "
              }`}
            >
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                Aadhar Number
              </h1>
              <div>
                <input
                  id="aadhar"
                  type="text"
                  placeholder="Enter Aadhar number"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 w-full md:text-xs xl:text-lg md:h-8 md:pl-1 lg:pl-6 "
                />
              </div>
            </div>
            <div
              style={{ width: isNavCollapsed ? "45%" : "40%" }}
              className="flex flex-col justify-start mr-5"
            >
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                Email
              </h1>
              <div>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter Email ID"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 w-full md:h-8 md:text-xs xl:text-lg md:pl-1 lg:pl-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full p-1 mt-8">
            <div
              style={{ width: isNavCollapsed ? "100%" : "100%" }}
              className="flex flex-col justify-start ml-14 pr-5"
            >
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="md:text-xs xl:text-lg"
              >
                Address
              </h1>
              <div>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter Address"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 md:h-8 md:text-xs xl:text-lg w-full md:pl-1 lg:pl-6"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              fontWeight: "500",
              fontFamily: "Inter",
              marginLeft: "75%",
            }}
            onClick={() => {
              const patient = {
                name:
                  document.getElementById("fname").value +
                  " " +
                  document.getElementById("lname").value,
                age: document.getElementById("age").value,
                gender: "M",
                weight: document.getElementById("weight").value,
                phone: document.getElementById("phone").value,
                adhar: document.getElementById("aadhar").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                NSID: "4568786dF",
                Prescription: [],
              };

              localStorage.setItem("pdf", JSON.stringify(patient));

              window.location.href = "/newpres";
            }}
            className="bg-custom-butt md:text-xs xl:text-lg text-white md:mb-10   xl:mt-20 xl:mb-20 md:mt-10  lg:mb-4 p-4  rounded-lg shadow-xl cursor-pointer"
          >
            Register & Continue
          </div>
        </div>
      </div>
    </>
  );
}

export default Newadd;
