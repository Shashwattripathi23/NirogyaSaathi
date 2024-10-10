import React from "react";
import { useEffect } from "react";
import logoText from "../images/logoText.png";
import styled from "styled-components";
import logoIm from "../images/logoIm.png";

const Login = (props) => {
  useEffect(() => {
    const header = document.querySelector("#header");
    const card = document.querySelector("#card");
    const quote = document.querySelector("#quote");
    const footer = document.querySelector("#footer");

    const handleLoadMetadata = () => {
      console.log("loadmetadata event fired");
      header.style.transform = "translateY(0)";
      footer.style.transform = "translateY(0)";
      footer.style.opacity = 1;
      card.style.transform = "translateX(0)";
      card.style.opacity = 1;
      quote.style.transform = "translateY(0)";
      quote.style.opacity = 1;
    };

    window.addEventListener("load", handleLoadMetadata);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("loadmetadata", handleLoadMetadata);
    };
  }, []);

  const SupText = styled.div`
    color: #222222;
    font-size: 22px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 26px;
    text-align: right;
    position: absolute;
    top: 2vh;
    right: 1.5vw;
  `;

  const BC1 = styled.div`
    position: absolute;
    top: 89vh;
    left: 4vw;
    color: #030303;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 600;
    line-height: 26px;
    @media (max-width: 768px) {
      left: 2vw;
      top: 95vh;
    }
  `;

  const LogoText = styled.img`
    position: absolute;

    top: 2vh;
    left: 39vw;
  `;

  const LogoImage = styled.img`
    position: absolute;
    top: 0vh;
    left: 35vw;
    }
  `;

  const BC1defaultProps = {
    text: "NirogyaSaathi",
  };

  const RC1styles = {
    Text: {
      position: "absolute",
      top: "89vh",
      right: "6vw",
      color: "#262626",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 600,
      lineHeight: "18px",
    },
  };
  const RC2styles = {
    Text: {
      position: "absolute",
      top: "91vh",
      right: "6vw",
      color: "#262626",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: 600,
      lineHeight: "18px",
    },
  };
  const EIstyles = {
    Input: {
      position: "absolute",
      top: "15vh",
      left: "1.3vw",

      width: "85%",
      height: "60px",
      padding: "0px 8px",
      border: "0",
      borderBottom: "1px solid #d2234e",
      boxSizing: "border-box",
      borderRadius: "12px",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: "14px",
      fontFamily: "DM Sans",
      lineHeight: "18px",
      outline: "none",
    },
  };

  const PIdefaultProps = {
    text: "Enter your password",
  };
  const PIstyles = {
    Input: {
      position: "absolute",
      top: "28vh",
      left: "1.3vw",

      width: "85%",
      height: "60px",
      padding: "0px 8px",
      border: "0",
      borderBottom: "1px solid #d2234e",
      boxSizing: "border-box",
      borderRadius: "12px",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: "14px",
      fontFamily: "DM Sans",
      lineHeight: "18px",
      outline: "none",
    },
  };

  const EIdefaultProps = {
    text: "Enter your email address",
  };

  const FPstyles = {
    Text: {
      position: "absolute",
      top: "48vh",
      right: "1.3vw",
      textDecoration: "none",

      color: "#858585",
      fontSize: "12px",
      fontFamily: "Poppins",
      lineHeight: "16px",
      textAlign: "right",
    },
  };

  const FPdefaultProps = {
    text: "Forgot your password?",
  };
  const LIstyles = {
    Button: {
      cursor: "pointer",
      position: "absolute",
      top: "39vh",
      left: "1.3vw",

      width: "85%",
      height: "60px",
      padding: "0px 8px",
      border: "0",
      boxSizing: "border-box",
      borderRadius: "12px",
      boxShadow: "8px 8px 8px rgba(0,0,0,0.25)",
      backgroundColor: "#d2234e",
      color: "#ffffff",
      fontSize: "14px",
      fontFamily: "Poppins",
      fontWeight: 500,
      lineHeight: "18px",
      outline: "none",
    },
  };

  const LIdefaultProps = {
    label: "Log in",
  };
  const WBstyles = {
    Text: {
      position: "absolute",
      top: "3vh",
      left: "1vw",
      color: "#030303",
      fontSize: "24px",
      //   fontFamily: "DM Sans",
      fontWeight: 600,
      lineHeight: "32px",
    },
  };

  const WBdefaultProps = {
    text: "Welcome Back!",
  };

  const FBicon = styled.svg`
    position: absolute;
    top: 93.4vh;
    right: 7vw;
    color: #262626;
    fill: #262626;
    font-size: 24px;
    width: 24px;
    height: 20px;
  `;

  const IGIcon = styled.svg`
    position: absolute;
    top: 93.4vh;
    right: 9vw;
    color: #262626;
    fill: #262626;
    font-size: 24px;
    width: 24px;
    height: 20px;
  `;

  const Footer = styled.div`
    position: absolute;
    top: 0vw;
    right: -2vw;
    height: 7vh;
    width: 20vw;
    color: #262626;
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
    @media (max-width: 768px) {
      top: 9vw;
      right: -3vw;
    }
  `;

  const RC1defaultProps = {
    text: "Privacy Policy",
  };
  const RC2defaultProps = {
    text: "Terms of Service",
  };

  const BC2defaultProps = {
    text: "2024 ©NirogySaathi  \u00A0 \u00A0 All rights reserved.",
  };

  const BC2 = styled.div`
    position: absolute;
    top: 92vh;
    left: 4vw;
    color: #030303;
    width: 7vw;
    font-size: 14px;
    font-family: Inter;
    letter-spacing: -0.1px;
    line-height: 18px;
    @media (max-width: 768px) {
      left: 2vw;
      width: 15vw;
      top: 98vh;
    }
  `;

  const Card = styled.div`
    position: absolute;
    transform: translateX(650px);
    opacity: 0;
    transition: transform 1s, opacity 1s;
    top: 22vh;
    left: 65vw;
    width: 500px;
    height: 55vh;
    background-color: #eeeeee;

    border-radius: 16px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
      top: 30vh;
      left: 15vw;
      width: 70vw;
      height: 60vh;
    }
  `;

  const Quote = styled.div`
    position: absolute;
    transform: translateY(50px);
    opacity: 0;
    transition: transform 1s, opacity 1s;
    top: 24vh;
    left: 18vw;
    color: #030303;
    width: 25vw;
    font-size: 60px;
    font-weight: 200;
    line-height: 52px;
    padding: 50px;
    height: auto; /* Set height to auto for mobile devices */
    @media (max-width: 768px) {
      top: 10vh;
      left: 5vw;
      width: 85vw;
      font-size: 50px;
      height: auto; /* Adjust height for mobile devices */
    }
  `;
  const InvalidUserName = styled.h1`
    color: red;
    font-size: 17px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 26px;

    position: absolute;
    top: 7vh;
    left: 8vw;
    display: none;
  `;

  const SendLoginData = () => {
    const email = document.querySelector("#EmailLogin").value;
    const password = document.querySelector("#PasswordLogin").value;

    // Create an object with the login data
    let token = null;
    const loginData = {
      UserName: email,
      Password: password,
    };

    fetch("http://localhost:5100/api/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          document.querySelector("#InvalidUserName").style.display = "block";
          document.querySelector("#EmailLogin").value = "";
          document.querySelector("#PasswordLogin").value = "";
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Full response data:", data); // Log the full response

        const token = data.token; // Note the change to match the case
        const email = data.email;

        console.log("Token: ", token);
        console.log("Email: ", email);

        localStorage.setItem("response", JSON.stringify(data)); // Fix storage of response
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);

        console.log("Stored token: ", localStorage.getItem("token"));
        console.log("Stored email: ", localStorage.getItem("email"));

        window.location.href = "/finder";
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div>
      <div
        id="header"
        className="flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center p-4"
      >
        <SupText className="mb-2 sm:righ-0">Support</SupText>
        <div className="flex items-center">
          <LogoText src={logoText} alt="logo" />
          <LogoImage src={logoIm} alt="logo" />
        </div>
      </div>
      <Quote id="quote" className="sm:w-full sm:bg-green">
        {" "}
        An apple a day, keeps doctor away
      </Quote>
      <Card id="card">
        <InvalidUserName id="InvalidUserName">
          Invalid username or password
        </InvalidUserName>
        {props.children}
        <h3
          style={{
            position: "absolute",
            top: "9vh",
            left: "1.5vw",
            color: "#030303",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
          }}
        >
          Email
        </h3>
        <div style={WBstyles.Text}>{props.text ?? WBdefaultProps.text}</div>
        <h3
          style={{
            position: "absolute",
            top: "22vh",
            left: "1.5vw",
            color: "#030303",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "32px",
          }}
        >
          Password
        </h3>
        <input
          id="PasswordLogin"
          style={PIstyles.Input}
          type="password"
          placeholder={props.text ?? PIdefaultProps.text}
        />
        <input
          id="EmailLogin"
          style={EIstyles.Input}
          type="text"
          placeholder={props.text ?? EIdefaultProps.text}
        />
        <button
          id="lbutt"
          style={LIstyles.Button}
          onClick={() => {
            document.querySelector("#lbutt").style.transform =
              "translateY(2px)";
            document.querySelector("#lbutt").style.boxShadow = "none";

            SendLoginData();
          }}
        >
          {props.text ?? LIdefaultProps.label}
        </button>
        <a href="#" style={FPstyles.Text}>
          {props.text ?? FPdefaultProps.text}
        </a>
      </Card>
      <div
        id="footer"
        style={{
          transform: "translateY(100px)",
          opacity: 0,
          transition: "transform 1s, opacity 1s",
        }}
      >
        <BC1>{props.text ?? BC1defaultProps.text}</BC1>
        <BC2>{props.text ?? BC2defaultProps.text}</BC2>
        <Footer>
          <div style={RC1styles.Text}>{props.text ?? RC1defaultProps.text}</div>
          <div style={RC2styles.Text}>{props.text ?? RC2defaultProps.text}</div>
          <IGIcon viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </IGIcon>

          <FBicon viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </FBicon>
        </Footer>
      </div>
    </div>
  );
};

export default Login;
