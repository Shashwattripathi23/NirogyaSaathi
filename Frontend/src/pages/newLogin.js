import React from "react";
import NewLogo from "../images/NewLogo.png";
import Call from "../images/call.png";
import Mail from "../images/Mail.png";
import Map from "../images/Map.png";
import FB from "../images/FB.png";
import IG from "../images/IG.png";
import Twt from "../images/Twt.png";
import Lnk from "../images/Lnk.png";
import BackButt from "../images/backButt.png";
import MailB from "../images/MailB.png";
import Password from "../images/Password.png";
import { useState } from "react";

function NewLogin() {
  const [isWrong, setIsWrong] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-r flex items-center justify-between absolute px-5 top-0 left-0 from-custom-blue-dark to-custom-blue-light h-24 w-100vw mt-0 ml-0 ">
        <div className="flex items-center xl:space-x-4 md:space-x-1 lg:space-x-3 ml-4">
          <img src={Call} className="h-6 w-6" alt="call" />
          <h3
            style={{
              fontFamily: "inter",
            }}
            className="text-custom-navFont md:text-xs xl:text-base  "
          >
            1800-123-4567
          </h3>
          <img src={Mail} className="h-6 w-6" alt="mail" />
          <h3
            style={{
              fontFamily: "inter",
            }}
            className="text-custom-navFont md:text-xs xl:text-base  "
          >
            abs@gmail.com
          </h3>
          <img src={Map} className="h-6 w-5" alt="map" />
          <h3
            style={{
              fontFamily: "inter",
            }}
            className="text-custom-navFont xl:text-base md:text-xs "
          >
            123, XYZ Street, ABC City
          </h3>
        </div>
        <div className="flex items-center space-x-4">
          <img src={FB} className="h-12 w-12" alt="fb" />
          <img src={IG} className="h-12 w-12" alt="ig" />
          <img src={Twt} className="h-12 w-12" alt="twt" />
          <img src={Lnk} className="h-12 w-12" alt="lnk" />
        </div>
      </div>
      <div className="border-0 border-custom-bg-light pt-10 px-5 h-auto absolute top-24 left-0 w-100vw flex flex-row justify-between">
        <div className="flex cursor-pointer flex-row items-center space-x-5 ">
          <img
            src={BackButt}
            style={{}}
            className="h-5 w-3  "
            alt="logo"
            onClick={() => {
              window.location.href = "/home";
            }}
          ></img>
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: "600",
            }}
            onClick={() => {
              window.location.href = "/home";
            }}
            className="text-black md:text-base xl:text-xl "
          >
            Home
          </h2>
        </div>
        <h2
          style={{
            fontFamily: "Inter",
            fontWeight: "500",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "/support";
          }}
          className="text-custom-bg-light md:text-base underline xl:text-xl"
        >
          Get Help
        </h2>
      </div>
      <div className=" md:mt-36 h-auto w-3/4 xl:w-auto mx-auto flex flex-col justify-center items-center 0 py-20">
        <img src={NewLogo} className="  " alt="logo"></img>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "Inter",

            fontWeight: "500",
          }}
          className="text-custom-blue-dark md:text-xl xl:text-xl xl:w-30vw md:mt-5 xl:mt-16 "
        >
          Please log in to access your personalized dashboard and view your
          patient visit history.
        </h3>
        {isWrong && (
          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: "500",
              textAlign: "center",
            }}
            className="text-red-600 md:text-2xl xl:text-xl mt-10"
          >
            Invalid Email/Password
          </h1>
        )}
        <div className="flex flex-col justify-start items-start w-full px-10 xl:px-0 border-">
          <h3
            style={{
              fontSize: "20px",

              fontFamily: "Inter",

              fontWeight: "500",
            }}
            className="text-black mt-5 "
          >
            Email ID
          </h3>

          <div
            style={{
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
              borderRadius: "16px",
            }}
            className="flex items-center flex-row w-full mt-5"
          >
            <img src={MailB} className="h-6 w-8 ml-5" alt="mail" />
            <input
              id="email"
              type="email"
              placeholder="Enter your email ID"
              style={{
                fontSize: "16px",

                borderRadius: "16px",
                // backgroundColor: "blue",
                outline: "none",
                // zIndex: "1",
              }}
              className=" ml-5 h-auto py-5 w-96 "
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full px-10 xl:px-0 border-">
          <h3
            style={{
              fontSize: "20px",

              fontFamily: "Inter",

              fontWeight: "500",
            }}
            className="text-black mt-5 "
          >
            Password
          </h3>

          <div
            style={{
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
              borderRadius: "16px",
            }}
            className="flex items-center flex-row w-full mt-5"
          >
            <img src={Password} className="h-6 w-5 ml-7" alt="mail" />
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              style={{
                fontSize: "16px",

                borderRadius: "16px",
                // backgroundColor: "blue",
                outline: "none",
                // zIndex: "1",
              }}
              className=" ml-6 h-auto py-5 w-96 "
            />
          </div>
        </div>

        <h3
          style={{
            fontFamily: "Inter",
            fontWeight: "500",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "/forgotPassword";
          }}
          className="text-custom-bg-light   underline md:text-base xl:text-lg mt-5"
        >
          Forgot Password
        </h3>
        <div
          onClick={() => {
            let em = document.getElementById("email").value;
            let pass = document.getElementById("password").value;

            if (em == "doc123@gmail.com" && pass == "doc123") {
              window.location.href = "/change ";
            } else {
              setIsWrong(true);
            }
          }}
          style={{
            position: "",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",

            fontFamily: "Inter",
            fontWeight: "800",

            borderRadius: "16px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
          }}
          className="bg-custom-bg-light h-16 w-full mt-10 md:text-lg text-white"
        >
          Log In
        </div>
      </div>
    </>
  );
}

export default NewLogin;
