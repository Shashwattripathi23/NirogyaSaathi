import { useState } from "react";
import Butt1 from "../images/Butt1.png";
import NewLogo from "../images/logoW.png";
import log from "../images/log.png";
import docIm from "../images/DocImage.png";
import db from "../images/home.png";
import MAC from "../images/MAC.png";
import PatS from "../images/search.png";
import Pat from "../images/edit.png";
import QRCode from "qrcode.react";
import AU from "../images/AU.png";
import back from "../images/backButt.png";
import Supp from "../images/Supp.png";
import ReactDOM from "react-dom";
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
import Go from "../images/Go.png";
import Vr from "../images/del.png";
import React, { useEffect } from "react";
import Cross from "../images/Docsign.png";
import "./css/print.css";
import pdf from "../images/pdf.png";
import { useRef } from "react";
import { ReactToPrint } from "react-to-print";

import Chatbot from "./Chatbot";

import { useContext } from "react";
import { ChatbotContext } from "./Chatprovider";

function Newpdf() {
  console.log(localStorage.getItem("finalPrescription"));

  const handleBeforePrint = () => {
    // Change the style before printing
    const content = componentRef.current;
    content.style.width = "132%";
    content.style.height = "95%";
    content.style.marginLeft = "0px";
    content.style.marginTop = "-20px";

    // content.style.paddingRight = "20px";
  };

  const handleAfterPrint = () => {
    // Revert the style back after printing
    const content = componentRef.current;
    content.style.width = isNavCollapsed ? "95%" : "78%";
    content.style.height = "auto";
    content.style.marginLeft = "3rem";
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const { isChatCollapsed, setIsChatCollapsed } = useContext(ChatbotContext);

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
  };
  const componentRef = useRef();

  const data = JSON.parse(localStorage.getItem("finalPrescription"));

  return (
    <>
      <Chatbot />
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

        <img src={log} className="h-12 w-auto" alt="log" />
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
          <div
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/dashboard";
            }}
            className="relative flex items-center py-4  border-b border-gray-300"
          >
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
            <img src={MAC} className="h-9 p-1 rounded-md ml-6" alt="call" />
            {!isNavCollapsed && (
              <>
                <h1
                  className="ml-3"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: "500",
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
            className="relative flex items-center py-4 border-b bg-blue-100 border-gray-300"
          >
            <img
              src={PatS}
              className="bg-custom-im-dark h-9  px-2 py-2 rounded-md ml-8"
              alt="call"
            />
            <span className="bg-blue-600 w-2 h-full absolute"></span>

            {!isNavCollapsed && (
              <h1
                className="text-custom-font ml-3"
                style={{
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "500",
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
        } transition-all duration-300`}
      >
        <div
          style={{ zIndex: "1000" }}
          className={`box h-20  bg-custom-bg-dark flex shadow-md items-center w-full fixed top-20 ${
            isNavCollapsed ? "left-24" : "left-[calc(16.67%+0rem)]"
          }  transition-all duration-300`}
        >
          <img
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/newpres";
            }}
            src={back}
            className="h-9 ml-10 border-r pr-6 py-2 border-custom-border-dark"
            alt="db"
          />
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "500",
              fontFamily: "Inter",
            }}
            className="text-black ml-10"
          >
            Back
          </h2>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "400",
              fontFamily: "Inter",
              marginLeft: isNavCollapsed ? "70%" : "60%",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/res";
            }}
            className=" right-0 flex items-center text-custom-butt  px-6 py-2 rounded-full"
          >
            <h2>Go to patient history</h2>
          </div>
        </div>
        <div
          style={{ zIndex: "1000", height: "auto" }}
          className={`box   bg-white flex flex-col shadow-lg items-start  mt-32 ${
            isNavCollapsed ? "ml-54 , w-4/5" : "ml-28 , w-3/4"
          }  transition-all duration-300`}
        ></div>
        <div
          id="printpage"
          style={{
            width: isNavCollapsed ? "95%" : "78%",
          }}
          className="h-auto bg-white ml-12 shadow-xl pb-14 border-b-2   "
          ref={componentRef}
        >
          <div
            style={{
              backgroundColor: "#FBFBFF",
            }}
            className="h-auto w-full flex items-center py-6 justify-between"
          >
            <div className="flex items-start flex-col ml-10 ">
              <h1
                style={{
                  color: "#01628D",
                  fontSize: "36px",
                  fontWeight: "1000",
                  fontFamily: "Inter",
                }}
                className="pb-1"
              >
                Doe's Clinic
              </h1>
              <h2
                style={{
                  color: "#01628D",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="pb-5"
              >
                94 , 24 street , Noida 63
              </h2>
              <h2
                style={{
                  color: "#01628D",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Prescription ID: 123456
              </h2>

              <h2
                style={{
                  color: "#01628D",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                NSID: 123456
              </h2>
            </div>
            <div>
              <img
                src={Cross}
                className="h-36 w-auto mr-0"
                alt="pdf"
                style={{ cursor: "pointer", mixBlendMode: "multiply" }}
              />
            </div>
            <div className="flex items-start flex-col h-auto mr-10">
              <h2
                style={{
                  //   color: "#01628D",
                  fontSize: "26px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pb-2"
              >
                Dr. John Doe
              </h2>
              <h2
                style={{
                  fontSize: "19px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                MBBS, MD
              </h2>
              <h2
                style={{
                  fontSize: "19px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
              >
                Specializes in: General Physician
              </h2>
              <h2
                style={{
                  fontSize: "19px",
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              >
                Sunday: 10:00 AM - 2:00 PM
              </h2>
              <h2
                style={{
                  fontSize: "19px",
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              >
                Other days: 9:00 AM - 5:00 PM
              </h2>
            </div>
          </div>

          <div
            className="
          w-full
            h-auto
            flex
            items-center 
            justify-between         
            p-5
            flex-row
            pt-14
        
          "
          >
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className="ml-10"
            >
              Name:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data.name}
              </span>
            </h1>
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className=""
            >
              Gender:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data.gender}
              </span>
            </h1>
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className=""
            >
              Age:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data.age}
              </span>
            </h1>
          </div>
          <div
            className="
          w-full
            h-auto
            flex
            items-center         
            p-5
            flex-row
            pt-5
          "
          >
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className="ml-10"
            >
              Phone number:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data.phone}
              </span>
            </h1>
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className=""
            >
              Email:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data.email}
              </span>
            </h1>
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className=""
            >
              Date:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data["prescriptions"]["visit"]}
              </span>
            </h1>
          </div>
          <div
            className="
          w-full
            h-auto
            flex
            items-center         
            p-5
            flex-row
            pt-5
            pb-10
            border-b-2
          "
          >
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className="ml-10 border-0"
            >
              Address:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data.address}
              </span>
            </h1>
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className=""
            >
              Weight:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data.weight}
              </span>
            </h1>
            <h1
              style={{
                color: "#454547",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Inter",
                width: "33.33%",
              }}
              className=""
            >
              Temperature:
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="pl-5"
              >
                {data["prescriptions"]["temperature"]}
              </span>
            </h1>
          </div>
          <div
            className="
            w-full
                
                h-auto
                flex
                items-center         
                py-5
                flex-row
                pt-5
                bg-white

                "
          >
            <div
              style={{
                width: isNavCollapsed ? "55%" : "60%",
                marginLeft: "2%",
              }}
              className="border-0 h-24 mt-10 flex "
            >
              <h1
                style={{
                  color: "#454547",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                  display: "flex",
                }}
                className="flex"
              >
                Complaint:
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                    whiteSpace: "normal",
                    marginLeft: "5px",
                    overflowWrap: "break-word",
                    marginLeft: "15px",
                  }}
                >
                  {data["prescriptions"]["complaint"]}
                </span>
              </h1>
            </div>
            <div
              style={{
                width: isNavCollapsed ? "39%" : "34%",
                marginLeft: "2%",
              }}
              className="border-0 h-24 mt-10 flex "
            >
              <h1
                style={{
                  color: "#454547",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                  display: "flex",
                }}
                className="flex"
              >
                Tests:
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                    whiteSpace: "normal",
                    marginLeft: "5px",
                    overflowWrap: "break-word",
                    marginLeft: "15px",
                  }}
                >
                  {data["prescriptions"]["tests"]}
                </span>
              </h1>
            </div>
          </div>
          <div
            className="
            w-full             
                h-auto
                flex
                items-center         
                py-5
                flex-row
                pt-0
                bg-white
                -mt-5
                "
          >
            <div
              style={{
                width: isNavCollapsed ? "55%" : "60%",
                marginLeft: "2%",
              }}
              className="border-0 h-12  flex "
            >
              <h1
                style={{
                  color: "#454547",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className=" "
              >
                Diagnosis:
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                    whiteSpace: "normal",
                    marginLeft: "5px",
                    overflowWrap: "break-word",
                    marginLeft: "15px",
                  }}
                >
                  {data["prescriptions"]["diagnosis"]}
                </span>
              </h1>
            </div>
            <div
              style={{
                width: isNavCollapsed ? "39%" : "34%",
                marginLeft: "2%",
              }}
              className="border-0 h-12  flex "
            >
              <h1
                style={{
                  color: "#454547",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className=" "
              >
                Follow-up:
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                    whiteSpace: "normal",
                    marginLeft: "5px",
                    overflowWrap: "break-word",
                    marginLeft: "15px",
                  }}
                >
                  {data["prescriptions"]["nextdate"]}
                </span>
              </h1>
            </div>
          </div>
          <div
            className="
            w-full             
                h-auto
                flex
                items-center         
                py-5
                flex-row
                pt-0
                bg-white
                "
          >
            <div
              style={{
                width: isNavCollapsed ? "55%" : "60%",
                marginLeft: "2%",
              }}
              className="border-0 h-12  flex "
            >
              <h1
                style={{
                  color: "#454547",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className=" "
              >
                Additional notes:
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                    whiteSpace: "normal",
                    marginLeft: "5px",
                    overflowWrap: "break-word",
                    marginLeft: "15px",
                  }}
                >
                  {data["prescriptions"]["notes"]}
                </span>
              </h1>
            </div>
            <div
              style={{
                width: isNavCollapsed ? "39%" : "34%",
                marginLeft: "2%",
              }}
              className="border-0 h-12  flex "
            >
              <h1
                style={{
                  color: "#454547",
                  fontSize: "20px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className=" "
              >
                Allergies:
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                    whiteSpace: "normal",
                    marginLeft: "5px",
                    overflowWrap: "break-word",
                    marginLeft: "15px",
                  }}
                >
                  {data["prescriptions"]["allergies"]}
                </span>
              </h1>
            </div>
          </div>
          <div>
            <h1
              style={{
                color: "#007BA4",
                fontSize: "33px",
                fontWeight: "600",
                fontFamily: "Inter",
                marginLeft: "2%",
              }}
              className="ml-12 mt-10"
            >
              HPI details
            </h1>
          </div>
          <div className="w-full h-auto flex  py-5 flex-row pt-5 pb-0 border-">
            <div
              style={{
                width: isNavCollapsed ? "25%" : "25%",
                marginLeft: "2%",
                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Inter",
              }}
              className=" flex justify-center border-"
            >
              Title
            </div>
            <div
              style={{
                width: isNavCollapsed ? "71%" : "71%",

                fontSize: "22px",
                fontWeight: "700",
                fontFamily: "Inter",
              }}
              className=" border- flex justify-center"
            >
              Description
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#F9FAFE",
              width: "96%",
            }}
            className={`h-auto pb-10 ${
              isNavCollapsed ? "ml-8" : "ml-7"
            }  flex mt-2 flex-col items-center py-5 justify-between border-t-2 `}
          >
            {data["prescriptions"]["HPI"].map((item, index) => (
              <div
                key={index}
                className="w-full h-auto flex py-5 flex-row pt-0 pb-2 border-b-0"
              >
                <div
                  style={{
                    width: isNavCollapsed ? "26%" : "26%",
                    fontSize: "19px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="flex justify-center border-r-2"
                >
                  {item.title}
                </div>
                <div
                  style={{
                    width: isNavCollapsed ? "74%" : "74%",
                    fontSize: "19px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="flex justify-center"
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1
              style={{
                color: "#007BA4",
                fontSize: "33px",
                fontWeight: "600",
                fontFamily: "Inter",
                marginLeft: "2%",
              }}
              className="ml-12 mt-10"
            >
              Recommended medicines
            </h1>
          </div>

          <div
            style={{
              width: "96%",
              height: "auto",
            }}
            className="pb-4 ml-8 border-b-2 mt-4 flex justify-between"
          >
            <div
              style={{
                width: "100%",
                height: "auto",
              }}
              className="  pb- ml- border-b-0 mt-0 flex justify-between"
            >
              <div
                style={{
                  width: "21%",
                  height: "auto",
                }}
                className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  Medicine
                </span>
              </div>
              <div
                style={{
                  width: "18%",
                  height: "auto",
                }}
                className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden "
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  Quantity
                </span>
              </div>
              <div
                style={{
                  width: "16%",
                  height: "auto",
                }}
                className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  Frequency
                </span>
              </div>
              <div
                style={{
                  width: "14%",
                  height: "auto",
                }}
                className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  Route
                </span>
              </div>
              <div
                style={{
                  width: "16%",
                  height: "auto",
                }}
                className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  Duration
                </span>
              </div>
              <div
                style={{
                  width: "24%",
                  height: "auto",
                }}
                className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Inter",
                  }}
                >
                  Notes
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#F9FAFE",
              width: "96%",
            }}
            className={`h-auto pb-10 ${
              isNavCollapsed ? "ml-8" : "ml-7"
            }  flex  flex-col items-center py-5 justify-between`}
          >
            {data["prescriptions"]["medicines"].map((item, index) => (
              <div
                style={{
                  width: "100%",
                  height: "auto",
                }}
                className="  pb- ml- border-b-0 mt-0 flex justify-between"
              >
                <div
                  style={{
                    width: "21%",
                    height: "auto",
                  }}
                  className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
                >
                  <span
                    style={{
                      color: "#454547",
                      fontSize: "20px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
                <div
                  style={{
                    width: "18%",
                    height: "auto",
                  }}
                  className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden "
                >
                  <span
                    style={{
                      color: "#454547",
                      fontSize: "20px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.quantity}
                  </span>
                </div>
                <div
                  style={{
                    width: "16%",
                    height: "auto",
                  }}
                  className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
                >
                  <span
                    style={{
                      color: "#454547",
                      fontSize: "20px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.frequency}
                  </span>
                </div>
                <div
                  style={{
                    width: "14%",
                    height: "auto",
                  }}
                  className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
                >
                  <span
                    style={{
                      color: "#454547",
                      fontSize: "20px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.route}
                  </span>
                </div>
                <div
                  style={{
                    width: "16%",
                    height: "auto",
                  }}
                  className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
                >
                  <span
                    style={{
                      color: "#454547",
                      fontSize: "20px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.duration}
                  </span>
                </div>
                <div
                  style={{
                    width: "24%",
                    height: "auto",
                  }}
                  className="pb-4 ml-0 border-b-0 mt-4 flex justify-center overflow-x-hidden"
                >
                  <span
                    style={{
                      color: "#454547",
                      fontSize: "20px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    {item.notes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ReactToPrint
          trigger={() => (
            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                fontFamily: "Inter",
                marginLeft: isNavCollapsed ? "40%" : "32%",
              }}
              className="h-20 bg-custom-butt flex text-white rounded-full cursor-pointer shadow-lg justify-center mt-24 items-center w-1/6"
            >
              Print
            </div>
          )}
          content={() => componentRef.current}
          onBeforeGetContent={handleBeforePrint}
          onAfterPrint={handleAfterPrint}
        />
      </div>
    </>
  );
}

export default Newpdf;
