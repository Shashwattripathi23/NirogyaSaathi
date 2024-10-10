import React, { useState, useEffect } from "react";
import "./css/sent.css";
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

function Confirm() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecked(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
        <div className="flex flex-row items-center cursor-pointer space-x-5 ">
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
              window.location.href = "/newlogin";
            }}
            className="text-black md:text-base xl:text-xl "
          >
            Log in
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

      <div className=" md:mt-36   lg:mt-20 xl:mt-10 h-auto w-3/4 xl:w-auto mx-auto flex flex-col justify-center items-center  py-20">
        <img src={NewLogo} className=" pb-20  " alt="logo"></img>

        <div className="container pb-10">
          <input
            style={{
              display: "none",
            }}
            type="checkbox"
            id="check"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label id="sentlabel" htmlFor="check">
            <div className="check-icon"></div>
          </label>
        </div>
        <h3
          style={{
            //   textAlign: "center",
            fontFamily: "Inter",

            fontWeight: "400",
          }}
          className="text-black md:text-lg xl:text-xl xl:w-30vw md:mt-5 xl:mt-16 pb-10 "
        >
          We have received your query and our team will get back to you within
          next 48 hours.
        </h3>

        <h2
          style={{
            left: "43vw",
            top: "78.5vh",
            fontFamily: "Inter",
            fontWeight: "500",
          }}
          onClick={() => {
            window.location.href = "/newlogin";
          }}
          className="text-custom-bg-light  underline md:text-lg cursor-pointer  xl:text-xl"
        >
          Get back to login
        </h2>
      </div>
    </>
  );
}

export default Confirm;
