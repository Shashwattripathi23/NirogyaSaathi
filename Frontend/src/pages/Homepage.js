import NewLogo from "../images/NewLogo.png";
import Call from "../images/call.png";
import Mail from "../images/Mail.png";
import Map from "../images/Map.png";
import FB from "../images/FB.png";
import IG from "../images/IG.png";
import Twt from "../images/Twt.png";
import Lnk from "../images/Lnk.png";
import bg1 from "../images/bg1.png";
import img2 from "../images/img2.png";
import Line from "../images/Line.png";
import img3 from "../images/img3.png";
import end1 from "../images/enda.png";
import lineW from "../images/LineW.png";

import Chatbot from "./Chatbot";
function Homepage() {
  return (
    <>
      {/* <Chatbot /> */}

      <div className="bg-gradient-to-r flex items-center justify-between absolute px-5 top-0 from-custom-blue-dark to-custom-blue-light h-24 w-100vw mt-0 ml-0 ">
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
      <div className="mt-24  h-auto pb-7  w-100vw flex flex-row items-centre justify-between ">
        <img
          src={NewLogo}
          className="sm:w-40 sm:h-10 ml-9 flex mt-5 md:w-56 md:h-12 items-center"
          alt="logo"
        ></img>
        <div className=" flex flex-row md:space-x-4 items-center md:ml-32  lg:ml-64 xl:ml-96 lg:space-x-8 xl:space-x-20 xl:-mr-80 mt-5">
          <a
            href="home"
            style={{
              fontWeight: "600",
              fontFamily: "inter",
              whiteSpace: "nowrap", // Prevent text from wrapping to a new line
              lineHeight: "1.2", // Adjust line height if needed
            }}
            className="xl:text-xl  "
          >
            Home
          </a>
          <a
            href="home"
            style={{
              fontWeight: "600",
              fontFamily: "inter",
              whiteSpace: "nowrap", // Prevent text from wrapping to a new line
              lineHeight: "1.2", // Adjust line height if needed
            }}
            className="xl:text-xl  top-6.5vw"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 1000);
            }}
          >
            About Us
          </a>

          <a
            href="home"
            style={{
              left: "73vw",
              top: "13vh",
              fontWeight: "600",
              fontFamily: "inter",
              whiteSpace: "nowrap", // Prevent text from wrapping to a new line
              lineHeight: "1.2", // Adjust line height if needed
            }}
            className="xl:text-xl  top-6.5vw"
          >
            Contact Us
          </a>
        </div>
        <div
          onClick={() => {
            window.location.href = "newlogin";
          }}
          style={{
            fontFamily: "inter",
          }}
          className=" w-13vw h-12 bg-custom-blue-dark cursor-pointer font-semibold items-center flex flex-row justify-center mt-5  mr-5 rounded-md text-white md:text-xs xl:text-xl"
        >
          Partner LogIn
        </div>
      </div>
      <div
        className=" bg-cover bg-no-repeat flex flex-col items-start justify-center px-10 mx-5 "
        style={{
          backgroundImage: `url(${bg1})`,
          height: "auto",
        }}
      >
        <h1
          style={{
            left: "6vw",
            top: "30vh",
            fontFamily: "Roboto",
            color: "white",
            fontWeight: "700",
          }}
          className=" sm:text-7xl   ml-10 xl:mt-48 lg:mt-28 md:mt-24"
        >
          Healthcare
        </h1>
        <h1
          style={{
            left: "6vw",
            top: "40vh",
            fontFamily: "Roboto",
            color: "white",
            fontWeight: "700",
          }}
          className=" md:text-7xl ml-10 md:mt-5"
        >
          Digitization Hub!
        </h1>
        <h3
          style={{
            left: "6vw",
            top: "55vh",
            fontFamily: "Inter",
            color: "white",
            fontWeight: "300",
          }}
          className=" xl:text-xl xl:w-50vw lg:w-60vw md:mt-10 md:w-55vw lg:mt-10 ml-10"
        >
          A user-friendly portal for doctors to manage patient visit history,
          facilitating efficient record-keeping and easy access to medical
          information for comprehensive healthcare management.
        </h3>
        <div
          style={{
            fontSize: "1.5vw",

            fontFamily: "inter",
            whiteSpace: "nowrap", // Prevent text from wrapping to a new line
            lineHeight: "1.2", // Adjust line height if needed
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "support";
          }}
          className=" w-15vw  md:h-14 md:mt-20 lg:h-16 lg:mt-5  xl:mt-20 xl:h-20 bg-custom-blue-dark font-semibold flex flex-col justify-center items-center rounded-md text-white ml-20 xl:mb-40 lg:mb-40 md:mb-10 "
        >
          Explore More
        </div>
      </div>
      <div className="flex flex-row md:items-center xl:items-start justify-between w-100vw  border-cyan-500 px-5">
        <img
          style={{}}
          src={img2}
          className="md:w-2/4 lg:h-96 lg:py-5  px-3 mt-5 xl:h-2/3"
          alt="img2"
        ></img>
        <div className="flex flex-col items-start  justify-start xl:mt-10 xl:px-24">
          <div className="flex flex-row items-center justify-start">
            <h3
              style={{
                left: "50vw",
                top: "115vh",
                fontFamily: "Poppins",

                fontWeight: "500",
              }}
              className=" text-custom-font md:text-xl xl:text-3xl pb-5"
            >
              WHO WE ARE
            </h3>
            <img
              style={{}}
              src={Line}
              className="  w-5vw ml-5"
              alt="line"
            ></img>
          </div>
          <h1
            style={{
              left: "50vw",
              top: "120vh",
              fontFamily: "Poppins",
              fontWeight: "500",
            }}
            className=" text-custom-font md:text-4xl xl:text-5xl"
          >
            Nirogya Saathi
          </h1>
          <h3
            style={{
              left: "50vw",
              top: "137vh",
              fontFamily: "inter",
              fontWeight: "400",
            }}
            className=" text-black md:text-sm md:mt-5 lg:text-lg xl:text-xl xl:mt-20"
          >
            We are pioneers in revolutionizing the healthcare landscape through
            digital innovation. Founded with a vision to transform the way
            healthcare is accessed and experienced in India, we are dedicated to
            bridging the gap between technology and healthcare delivery.
          </h3>
          <h3
            style={{
              left: "50vw",
              top: "163vh",
              fontFamily: "inter",
              fontWeight: "400",
            }}
            className=" text-black md:text-sm md:mt-5 lg:text-lg xl:text-xl "
          >
            Our team of innovators and healthcare experts is dedicated to
            transforming traditional care into a digital, data-driven, and
            patient-eccentric experience.
          </h3>
        </div>
      </div>

      <div className="flex flex-row md:items-center pb-5 pt-5 xl:items-start justify-between w-100vw  border-cyan-500 px-5">
        <div className="flex flex-col items-start justify-start xl:mt-10 xl:px-4">
          <div className="flex flex-row items-center justify-start md:pl-2 ">
            <h3
              style={{
                top: "205vh",
                fontFamily: "Poppins",

                fontWeight: "500",
              }}
              className=" text-custom-font md:text-xl xl:text-5xl "
            >
              About us
            </h3>
            <img
              style={{
                top: "207.5vh",
                left: "15vw",
              }}
              src={Line}
              className="  w-5vw ml-5"
              alt="line"
            ></img>
          </div>
          <h2
            style={{
              fontFamily: "Poppins",
              fontWeight: "600",
              whiteSpace: "nowrap", // Prevent text wrapping
            }}
            className=" text-black md:text-2xl xl:text-5xl md:pl-2 mt-10"
          >
            Innovating Healthcare:
            <span
              className=" text-custom-font md:text-2xl xl:text-5xl"
              style={{
                display: "inline-block",
                fontWeight: "inherit",
                fontFamily: "inherit",
              }}
            >
              Digital
            </span>
          </h2>
          <h2
            style={{
              left: "5vw",
              top: "217vh",
              fontFamily: "Poppins",
              fontWeight: "600",
              whiteSpace: "nowrap", // Prevent text wrapping
            }}
            className=" text-custom-font md:text-2xl xl:text-5xl md:pl-2"
          >
            Records and Enhanced Care
          </h2>
          <h3
            style={{
              left: "5vw",
              top: "227vh",
              fontFamily: "inter",
              fontWeight: "400",
            }}
            className=" text-black md:text-sm md:mt-5 lg:text-lg xl:text-xl xl:mt-20 md:pl-2"
          >
            Our India-registered company stands at the forefront of
            revolutionizing healthcare solutions by leveraging cutting-edge
            technology to transform the landscape of medical records management,
            patient care, and healthcare administration. Our primary focus is on
            digitalizing medical records, thereby enabling seamless and secure
            access to patient information, improving the efficiency of
            healthcare delivery, and ensuring better patient outcomes.
          </h3>
        </div>
        <img
          style={{}}
          src={img3}
          className="md:w-2/4 lg:h-96 lg:py-5  px-3 mt-5 xl:h-2/3"
          alt="img2"
        ></img>
      </div>
      <div className="">
        <div
          style={{
            backgroundImage: `url(${end1})`,
            height: "auto",

            width: "100vw",
          }}
          className="  bg-cover bg-no-repeat flex flex-row items-center justify-between pt-5 pb-10 px-5 "
        >
          <div>
            <div className="flex flex-row items-center space-x-3 justify-start ">
              <h3
                style={{
                  left: "5vw",
                  top: "4vh",
                  fontFamily: "Poppins",

                  fontWeight: "400",
                  cursor: "pointer",
                }}
                className=" text-white md:text-xl mt-5 ml-5 xl:text-3xl"
              >
                Get in touch
              </h3>
              <img
                style={{
                  top: "6.5vh",
                  left: "18vw",
                }}
                src={lineW}
                className="  w-24 mt-5 "
                alt="line"
              ></img>
            </div>
            <h2
              style={{
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
              className=" text-white ml-5 md:text-base xl:text-xl mt-5"
            >
              Get Your Right Solution, Contact Now With Us.
            </h2>
          </div>
          <div
            style={{
              fontFamily: "inter",
              whiteSpace: "nowrap",
              height: "auto",
            }}
            onClick={() => {
              window.location.href = "support";
            }}
            className="px-5 py-5 mr-10 xl:text-xl cursor-pointer  bg-white font-semibold flex flex-row justify-center items-center rounded-md text-custom-blue-dark "
          >
            Get in touch
          </div>
        </div>
        <div
          style={{
            height: "auto",

            width: "100vw",
          }}
          className="bg-custom-bg flex flex-row justify-between h-20 w-100vw px-5"
        >
          <div className="flex flex-col items-start justify-start">
            <h2
              style={{
                left: "8vw",
                top: "8vh",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
              className=" text-white md:text-2xl ml-5 mt-5 xl:text-xl xl:mt-10"
            >
              About company
            </h2>
            <h3
              style={{
                fontFamily: "inter",
                fontWeight: "400",
              }}
              className=" text-white ml-5 md:w-35vw mt-5 md:text-xs lg:text-sm xl:text-base"
            >
              Our India-registered company stands at the forefront of
              revolutionizing healthcare solutions by leveraging cutting-edge
              technology to transform the landscape of medical records
              management, patient care, and healthcare administration
            </h3>
            <div className="flex flex-row items-center pb-10 space-x-2 mt-10 ml-5 justify-start">
              <img
                style={{
                  top: "46vh",
                  left: "8vw",
                }}
                src={FB}
                className=" md:w-8 xl:w-12  "
                alt="line"
              ></img>
              <img
                style={{
                  top: "46vh",
                  left: "12vw",
                }}
                src={IG}
                className=" md:w-8 xl:w-12  "
                alt="line"
              ></img>
              <img
                style={{
                  top: "46vh",
                  left: "16vw",
                }}
                src={Twt}
                className=" md:w-8 xl:w-12  "
                alt="line"
              ></img>
              <img
                style={{
                  top: "46vh",
                  left: "20vw",
                }}
                src={Lnk}
                className=" md:w-8 xl:w-12  "
                alt="line"
              ></img>
            </div>
          </div>
          <div>
            <h2
              style={{
                left: "54vw",
                top: "8vh",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
              className=" text-white md:text-2xl mt-5 ml-5 xl:text-xl xl:-ml-10 xl:mt-10"
            >
              Support
            </h2>
            <div className="flex flex-col cursor-pointer items-start lg:text-base xl:text-base xl:-ml-10  justify-start md:text-xs mt-5 space-y-2 ml-5 border-white border-0">
              <h3
                style={{
                  left: "54vw",
                  top: "16vh",
                  fontFamily: "inter",
                  fontWeight: "200",
                }}
                className=" text-white"
              >
                {">"}
                <span
                  style={{
                    color: "white",

                    paddingLeft: "1vw",
                    fontWeight: "400",
                  }}
                  onClick={() => {
                    window.location.href = "home";
                  }}
                >
                  {"     "}
                  Home{" "}
                </span>
              </h3>
              <h3
                style={{
                  left: "54vw",
                  top: "21vh",
                  fontFamily: "inter",
                  fontWeight: "200",
                }}
                className=" text-white"
              >
                {">"}
                <span
                  style={{
                    color: "white",

                    paddingLeft: "1vw",
                    fontWeight: "400",
                  }}
                  onClick={() => {
                    window.location.href = "contact";
                  }}
                >
                  {"     "}
                  Contact Us{" "}
                </span>
              </h3>
              <h3
                style={{
                  left: "54vw",
                  top: "26vh",
                  fontFamily: "inter",
                  fontWeight: "200",
                }}
                className=" text-white"
              >
                {">"}
                <span
                  style={{
                    color: "white",

                    paddingLeft: "1vw",
                    fontWeight: "400",
                  }}
                  onClick={() => {
                    window.scrollTo(0, 1000);
                  }}
                >
                  {"     "}
                  About Us{" "}
                </span>
              </h3>
              <h3
                style={{
                  left: "54vw",
                  top: "31vh",
                  fontFamily: "inter",
                  fontWeight: "200",
                }}
                className=" text-white"
              >
                {">"}
                <span
                  style={{
                    color: "white",

                    paddingLeft: "1vw",
                    fontWeight: "400",
                  }}
                  onClick={() => {
                    window.location.href = "contact";
                  }}
                >
                  {"     "}
                  Join Us{" "}
                </span>
              </h3>
            </div>
          </div>
          <div>
            <h2
              style={{
                left: "76vw",
                top: "8vh",
                fontFamily: "Poppins",
                fontWeight: "500",
              }}
              className=" text-white md:text-2xl mt-5 ml-5 xl:text-xl xl:-ml-10 xl:mt-10"
            >
              Contact Us
            </h2>
            <div className="flex flex-col items-start lg:text-base xl:text-base xl:-ml-10  justify-start md:text-xs mt-5 space-y-6 ml-0 border-white border-0">
              <div className="flex flex-row space-x-1 ">
                <img
                  style={{
                    top: "17vh",
                    left: "76vw",
                  }}
                  src={Call}
                  className="  w-1vw"
                  alt="line"
                ></img>
                <h3
                  style={{
                    left: "78vw",
                    top: "16.5vh",
                    fontFamily: "inter",
                    fontWeight: "400",
                  }}
                  className=" text-white"
                >
                  1800-123-4567
                </h3>
              </div>
              <div className="flex flex-row space-x-1 items-center">
                <img
                  style={{
                    top: "23.3vh",
                    left: "76vw",
                  }}
                  src={Mail}
                  className="  xl:w-6 xl:h-4"
                  alt="line"
                ></img>
                <h3
                  style={{
                    left: "78vw",
                    top: "22.3vh",
                    fontFamily: "inter",
                    fontWeight: "400",
                  }}
                  className=" text-white"
                >
                  abc@gmail.com
                </h3>
              </div>
              <div className="flex flex-row space-x-1">
                <img
                  style={{
                    top: "29.3vh",
                    left: "76vw",
                  }}
                  src={Map}
                  className="  w-1vw"
                  alt="line"
                ></img>
                <h3
                  style={{
                    left: "78vw",
                    top: "28.8vh",
                    fontFamily: "inter",
                    fontWeight: "400",
                  }}
                  className=" text-white"
                >
                  123, XYZ Street, ABC City
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "5vh",
          top: "378vh",
          width: "100vw",
          fontFamily: "Poppins",
          display: "flex",
          fontSize: "1.8vh",
          fontWeight: "700",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="bg-white "
      >
        Copyright © Nirogyasaathi 2024 All Rights Reserved
      </div>
    </>
  );
}

export default Homepage;
