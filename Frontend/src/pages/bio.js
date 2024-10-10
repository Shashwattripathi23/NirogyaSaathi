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

function Bio() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const { isChatCollapsed, setIsChatCollapsed } = useContext(ChatbotContext);

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
  };

  const [profilePic, setProfilePic] = useState(docIm); // Replace with your default profile pic URL

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-input").click();
  };

  const [bio, setBio] = useState(
    "Dr. Jessika Linda is an eminent Endocrinologist associated with med hospitals who is specially trained to diagnose diseases related to glands. She specialises in treating people who suffer from hormonal imbalances, typically from glands in the endocrine system. The most common conditions treated by Dr. Linda are Diabetes, Metabolic disorders, Lack of growth, Osteoporosis, Thyroid diseases, Cancers of the endocrine glands, Over- or under-production of hormones, Cholesterol disorders, Hypertension and Infertility. Also available for consultation at Med hospital. Dr. Linda's approach lies in understanding patients diseases and the procedure recommended along with care."
  );

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const [specialties, setSpecialties] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddSpecialty = () => {
    if (inputValue.trim() !== "") {
      setSpecialties([...specialties, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
          <div
            style={{ cursor: "pointer" }}
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
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/myacc";
            }}
            className="relative flex items-center py-4 border-b bg-blue-100 border-gray-300"
          >
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
                  }}
                >
                  My Account
                </h1>
              </>
            )}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/patient";
            }}
            className="relative flex items-center py-4 border-b bg-blue-0 border-gray-300"
          >
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
                window.location.href = "/edit";
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

                color: "#007BA4",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/bio";
              }}
              className="text-black flex items-end px-10 justify-end pt-10   border-b-4 border-custom-blue-dark mx-5"
            >
              Profile and Bio
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
                window.location.href = "/cp";
              }}
              className="text-black flex items-end px-10 justify-end pt-10 border-b-4  mx-5"
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
                width: "95%",
              }}
              className="flex flex-row justify-start items-start ml-10 mt-10 h-auto"
            >
              <img
                src={profilePic}
                className="h-56 w-56 rounded-lg ml-1 bg-fit"
                alt="Profile"
              />
              <div
                style={{
                  backgroundColor: "#F2F3FE",
                }}
                className="flex flex-col justify-center h-full items-center ml-20 mt-20"
              >
                <input
                  type="file"
                  accept="image/*"
                  id="file-input"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <div
                  onClick={triggerFileInput}
                  style={{
                    border: "2px dashed #979797",
                  }}
                  className="h-10 text-custom-blue-dark w-full bg-transparent  rounded-md px-6 py-8 flex justify-center items-center cursor-pointer"
                >
                  Upload Image
                </div>
              </div>
            </div>
            <div
              style={{
                width: "95%",
              }}
              className="h-auto mx-auto flex flex-col justify-center items-center mt-10 pb-0 border-2  border-gray-300 rounded-lg"
            >
              <div
                style={{
                  width: "100%",
                  fontSize: "25px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="h-auto bg-white mx-auto mt-0  border-b-2 border-gray-300 pl-5  rounded-md flex flex-col py-5 "
              >
                Bio
              </div>
              <div className="w-full">
                <textarea
                  style={{ outline: "none" }}
                  className="w-full pl-5 h-40 py-5"
                  value={bio}
                  onChange={handleBioChange}
                ></textarea>
              </div>
            </div>
            <div
              style={{
                width: "95%",
              }}
              className="flex flex-col ml-11 mt-10"
            >
              <label
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="font-bold mb-2 pb-5"
              >
                Add Specialties
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-2/5"
                  placeholder="Specialties"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Inter",
                  }}
                  className="ml-2 px-4 py-2 bg-custom-blue-dark text-white rounded"
                  onClick={handleAddSpecialty}
                >
                  + Add
                </button>
              </div>
              <div className="flex flex-wrap mt-4">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      fontFamily: "Inter",
                    }}
                    className="bg-custom-blue-dark text-white px-4 py-2 rounded-lg mr-2 mt-2"
                  >
                    {specialty}
                  </span>
                ))}
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

export default Bio;
