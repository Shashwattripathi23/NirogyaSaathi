import { useState } from "react";
import Butt1 from "../images/Butt1.png";
import NewLogo from "../images/logoW.png";
import log from "../images/log.png";
import docIm from "../images/DocImage.png";
import db from "../images/home.png";
import MAC from "../images/MAC.png";
import PatS from "../images/search.png";
import Pat from "../images/PatS.png";
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
import { useContext, useEffect } from "react";

function Res() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const { isChatCollapsed, setIsChatCollapsed } = useContext(ChatbotContext);

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
    // if (isChatCollapsed) {
    //   document.getElementById("chatFilter").style.height =
    //     document.getElementById("main-content").clientHeight;

    //   console.log(document.getElementById("main-content").clientHeight);
    // }
  };
  const search = localStorage.getItem("searchParam")
    ? localStorage.getItem("searchParam")
    : "";

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

  const handleSearch = (e) => {
    setSearchParam(e.target.value);
  };

  const [searchParam, setSearchParam] = useState(search || "");

  console.log(search);

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
          <div
            className="relative flex items-center py-4 border-b cur border-gray-300"
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
        className={`absolute bg-custom-bg-dark pb-24 top-20 ${
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
          <div
            className={`bg-custom-butt box h-16 flex shadow-md items-center xl:w-80 md:w-64 absolute ${
              isNavCollapsed ? "right-24" : "right-[calc(16.67%+1rem)]"
            } rounded-full transition-all duration-300`}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/newadd";
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
              Add new patient
            </h2>
          </div>
        </div>
        <div
          className={`flex flex-row justify-between  h-auto w-auto pb-1 mt-32 mx-5 ${
            isNavCollapsed ? "" : "xl:mr-80"
          } `}
        >
          <div
            className={`bg-white  ${
              isNavCollapsed ? "xl:w-1/4 md:w-1/4 " : "xl:w-1/4 md:w-1/5  "
            } xl:h-16 md:h-10  top-28  rounded-lg shadow-md flex justify-start flex-row`}
          >
            <img
              src={searchF}
              className="xl:h-8 xl:w-8 md:h-4 md:w-4  md:ml-2 md:mt-3    "
              alt="bg2"
            />
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search by name"
              style={{
                width: "70%",

                outline: "none",
                border: "none",
              }}
              className="  py-2 md:text-xs xl:text-base md:ml-4"
            />
          </div>
          <div
            className={`bg-white  ${
              isNavCollapsed ? "xl:w-1/4 md:w-1/4 " : "xl:w-1/4 md:w-1/5  "
            } xl:h-16 md:h-10  top-28  rounded-lg shadow-md flex justify-start flex-row`}
          >
            <img
              src={searchF}
              className="xl:h-8 xl:w-8 md:h-4 md:w-4  md:ml-2 md:mt-3    "
              alt="bg2"
            />
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search by phone"
              style={{
                width: "70%",

                outline: "none",
                border: "none",
              }}
              className="  py-2 md:text-xs xl:text-base md:ml-4"
            />
          </div>
          <div
            className={`bg-white  ${
              isNavCollapsed ? "xl:w-1/4 md:w-1/4 " : "xl:w-1/4 md:w-1/5  "
            } xl:h-16 md:h-10  top-28  rounded-lg shadow-md flex justify-start flex-row`}
          >
            <img
              src={searchF}
              className="xl:h-8 xl:w-8 md:h-4 md:w-4  md:ml-2 md:mt-3    "
              alt="bg2"
            />
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search by NSID"
              style={{
                width: "70%",

                outline: "none",
                border: "none",
              }}
              className="  py-2 md:text-xs xl:text-base md:ml-4"
            />
          </div>

          <div
            onClick={() => {
              const searchPram = searchParam;
              localStorage.setItem("searchParam", searchPram);

              window.location.href = "/res";
            }}
            style={{
              fontFamily: "Inter",
              cursor: "pointer",
            }}
            className={`bg-custom-butt flex justify-center items-center  shadow-xl  text-white md:text-lg xl:text-xl  ${
              isNavCollapsed ? "xl:w-72 md:w-36" : "xl:w-64 md:w-48 "
            } h-auto py-2  top-28  rounded-lg `}
          >
            Search
          </div>
        </div>

        <div
          className={`flex flex-col w-auto mx-5 mt-10   ${
            isNavCollapsed ? "" : "xl:mr-80"
          } `}
        >
          <h1
            style={{
              fontWeight: "500",
              fontFamily: "Inter",
              height: "100px",

              //   boxShadow: "0px 4px 10px 0px  rgba(0, 0, 0, 0.25)",
            }}
            className={`pl-8 pt-6 left-0 top-48  rounded-t-xl w-full border-b-4  md:text-3xl xl:text-2xl`}
          >
            Results
          </h1>
          <div
            style={{
              // backgroundColor: "#ffffff",
              position: "relative",

              height: "auto",

              //   overflowY: "scroll",
            }}
            className={`rounded-xl  mt-2 flex flex-wrap border-0 justify-between xl:px-24 ${
              isNavCollapsed ? "" : ""
            } `}
          >
            {data
              .filter((entry) => {
                const nameIncludes = entry.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
                const phoneIncludes = entry.phone
                  .toLowerCase()
                  .includes(search.toLowerCase());
                const nsidIncludes = entry.NSID.toLowerCase().includes(
                  search.toLowerCase()
                );

                return (
                  searchParam === "" ||
                  nameIncludes ||
                  phoneIncludes ||
                  nsidIncludes
                );
              })
              .map((entry, index) => (
                <div
                  key={index}
                  style={{
                    height: "auto",
                    margin: "20px",
                    backgroundColor: "#ffffff",
                    // padding: "10px",
                    borderRadius: "10px",
                  }}
                  className={`flex flex-row md:py-5 md:px-4    rounded-lg ml-10 shadow-md ${
                    isNavCollapsed
                      ? "xl:w-auto lg:w-auto md:w-full"
                      : "xl:w-auto lg:w-auto md:w-full"
                  }  `}
                >
                  <div className="border-2 px-4 rounded-lg flex justify-center items-center">
                    <img
                      src={entry.gender === "M" ? male : female}
                      className=" xl:h-36 md:h-12 rounded-full "
                      alt="profile"
                    />
                  </div>
                  <div className=" ml-10">
                    <h2
                      className="md:text-xs xl:text-base"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        paddingTop: "10px",
                      }}
                    >
                      Name:{" "}
                      <span
                        className="md:text-xs xl:text-base"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "600",
                          paddingLeft: "10px",
                        }}
                      >
                        {entry.name}
                      </span>
                    </h2>
                    <p
                      className="md:text-xs xl:text-base"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        paddingTop: "5px",
                      }}
                    >
                      NSID:{" "}
                      <span
                        className="md:text-xs xl:text-base"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          paddingLeft: "10px",
                        }}
                      >
                        {entry.NSID}
                      </span>
                    </p>
                    <p
                      className="md:text-xs xl:text-base"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        paddingTop: "5px",
                      }}
                    >
                      Prescription:
                      <span
                        className="md:text-xs xl:text-base"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          paddingLeft: "10px",
                        }}
                      >
                        {entry.prescriptions[0].id}
                      </span>
                    </p>
                    <p
                      className="md:text-xs xl:text-base"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        paddingTop: "5px",
                      }}
                    >
                      Gender:
                      <span
                        className="md:text-xs xl:text-base"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          paddingLeft: "10px",
                        }}
                      >
                        {entry.gender}
                      </span>
                    </p>
                    <p
                      className="md:text-xs xl:text-base"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        paddingTop: "5px",
                      }}
                    >
                      Contact Number:
                      <span
                        className="md:text-xs xl:text-base"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          paddingLeft: "10px",
                        }}
                      >
                        {entry.phone}
                      </span>
                    </p>
                    <p
                      className="md:text-xs xl:text-base"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        paddingTop: "5px",
                      }}
                    >
                      Last Visit Date:
                      <span
                        className="md:text-xs xl:text-base"
                        style={{
                          fontFamily: "Inter",
                          fontWeight: "400",
                          paddingLeft: "10px",
                        }}
                      >
                        {entry.prescriptions[0].visit}
                      </span>
                    </p>
                  </div>
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      localStorage.setItem("pdf", JSON.stringify(entry));
                      window.location.href = "/newpres";
                    }}
                  >
                    <img
                      src={Vr}
                      className={`xl:h-28 md:h-16 ${
                        isNavCollapsed
                          ? "lg:ml-10 md:ml-48 "
                          : "lg:ml-10  md:ml-48"
                      }  mt-10`}
                      alt="bg2"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            position: "relative",

            height: "auto",
          }}
          className={`rounded-xl shadow-md mx-5 flex mt-10 flex-col w-auto ${
            isNavCollapsed ? "" : "xl:mr-80"
          } `}
        >
          <div>
            <h1
              style={{
                fontWeight: "800",
                fontFamily: "Inter",
              }}
              className="text-custom-finder-fn pl-8 py-6 left-0 rounded-t-xl  shadow-md md:text-xl xl:text-2xl"
            >
              Patient History
              <img
                src={Settings}
                className="xl:h-10 xl:w-10 md:h-6 md:w-6 absolute right-8 top-6"
                alt="bg2"
              />
            </h1>
          </div>

          <div
            style={{
              fontWeight: "600",
            }}
            className="flex  flex-row py-6 justify-between  overflow-x-hidden px-5"
          >
            <h2
              className={`md:text-xs xl:text-xl  flex justify-center
                
         `}
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              Name
            </h2>
            <h2
              className="md:text-xs xl:text-lg flex justify-center"
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              NSID
            </h2>
            <h2
              className="md:text-xs xl:text-lg  flex justify-center"
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              Gender
            </h2>
            <h2
              className="md:text-xs xl:text-lg  flex justify-center"
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              Prescription ID
            </h2>
            <h2
              className="md:text-xs xl:text-lg flex justify-center "
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              Treatment type
            </h2>
            <h2
              className="md:text-xs xl:text-lg  flex justify-center"
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              Phone
            </h2>
            <h2
              className="md:text-xs xl:text-lg flex justify-center"
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              Last visit
            </h2>
            <h2
              className="md:text-xs xl:text-lg flex justify-center"
              style={{ fontFamily: "Inter", width: "12.5%" }}
            >
              Medical report
            </h2>
          </div>

          {/* Entries */}
          {data
            .filter((entry) => {
              const nameIncludes = entry.name

                .toLowerCase()
                .includes(search.toLowerCase());
              const phoneIncludes = entry.phone
                .toLowerCase()
                .includes(search.toLowerCase());
              const nsidIncludes = entry.NSID.toLowerCase().includes(
                search.toLowerCase()
              );

              return (
                searchParam === "" ||
                nameIncludes ||
                phoneIncludes ||
                nsidIncludes
              );
            })
            .map((entry, index) => (
              <div
                style={{ overflow: "hidden" }}
                key={index}
                className={`flex  flex-row py-6 justify-between  overflow-x-hidden px-5 ${
                  index % 2 === 0 ? "bg-custom-finder-light" : "bg-white"
                }`}
              >
                <h2
                  style={{
                    width: "12.5%",
                    fontFamily: "Inter",
                  }}
                  className=" md:text-xs xl:text-lg flex justify-center"
                >
                  {entry.name}
                </h2>
                <h2
                  className="md:text-xs xl:text-lg flex justify-center"
                  style={{
                    width: "12.5%",
                    fontFamily: "Inter",
                  }}
                >
                  {entry.NSID}
                </h2>
                <h2
                  className="md:text-xs xl:text-lg flex justify-center"
                  style={{
                    width: "12.5%",
                    fontFamily: "Inter",
                  }}
                >
                  {entry.gender}
                </h2>
                <h2
                  className="md:text-xs xl:text-lg  flex justify-center"
                  style={{
                    width: "12.5%",
                    fontFamily: "Inter",
                  }}
                >
                  {entry.prescriptions[0].id}
                </h2>
                <h2
                  className="md:text-xs xl:text-lg flex justify-center"
                  style={{
                    width: "12.5%",
                    fontFamily: "Inter",
                  }}
                >
                  {entry.prescriptions[0].type}
                </h2>
                <h2
                  className="md:text-xs xl:text-lg flex justify-center"
                  style={{
                    width: "12.5%",
                    fontFamily: "Inter",
                  }}
                >
                  {entry.phone}
                </h2>
                <h2
                  className="md:text-xs xl:text-lg flex justify-center"
                  style={{
                    width: "12.5%",
                    fontFamily: "Inter",
                  }}
                >
                  {entry.prescriptions[0].visit}
                </h2>

                <div
                  style={{ cursor: "pointer", width: "12.5%" }}
                  onClick={() => {
                    localStorage.setItem("pdf", JSON.stringify(entry));
                    window.location.href = "/viewpres";
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "600",
                      lineHeight: "1.5em",
                    }}
                    className="text-white bg-custom-finder-dark rounded-full shadow-xl flex justify-center py-2 md:text-xs xl:text-lg"
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

export default Res;
