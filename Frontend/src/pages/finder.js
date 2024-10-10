import React from "react";
import Logoimage from "../images/logoIm.png";
import Logotext from "../images/logoText.png";
import styled from "styled-components";
import Sample from "../images/demo.png";
import AddIcon from "../images/AddIcon.png";
import AcMale from "../images/accountMale.jpg";
import AcFemale from "../images/account.jpg";
import { useEffect } from "react";
import { useState } from "react";

function Finder(props) {
  const NavBar = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    z-index: 2;
    height: 87px;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(3, 3, 3, 0.1);
    overflow: hidden;
  `;

  const HomeButt = styled.button`
    position: absolute;
    width: 100px;
    height: 40px;
    right: 220px;
    top: 20px;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #000000;
  `;

  const SupportButt = styled.button`
    position: absolute;
    width: 100px;
    height: 40px;
    right: 140px;
    top: 20px;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;

    font-size: 16px;
    color: #000000;
  `;

  const ScheduleButt = styled.button`
    position: absolute;
    width: 116px;
    height: 39px;
    right: 20px;
    top: 20px;
    background-color: #e1e1e1;
    border: none;
    border-radius: 24px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);

    color: #000000;
  `;

  const Card = styled.div`
    position: absolute;
    top: 85px;
    left: 0px;
    width: 100vw;
    height: 300px;
    background-color: #d2234e;

    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      height: 550px;
    }
  `;

  const FYP = styled.text`
    position: absolute;
    width: 400px;
    height: 100px;
    left: 40vw;
    top: 0px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 768px) {
        left: 20vw;
  `;

  const EPD = styled.text`
    position: absolute;
    top: 20px;
    left: 30px;
    width: 85vw;
    color: #030303;
    font-size: 24px;

    font-weight: 500;

    height: 15vh;
  `;

  const NSID = styled.input`
    position: absolute;
    top: 70px;
    left: 2.0416666666666667vh;
    width: 22vw;
    height: 43px;
    padding: 0px 8px;
    border: 0;
    box-sizing: border-box;
    border-radius: 24px;
    box-shadow: 0px 2px 8px rgba(64, 60, 67, 0.24);
    background-color: #ffffff;
    color: #909090;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 300;
    line-height: 20px;
    outline: none;
    @media (max-width: 786px) {
      width: 65vw;
      position: relative;
      left: 7vw;
      margin-top: 30px;
    }
  `;

  const SearchButton = styled.button`
    position: absolute;
    cursor: pointer;
    top: 70px;
    left: 48vw;
    width: 108px;
    height: 43px;
    padding: 0px 8px;
    border: 0;
    box-sizing: border-box;
    border-radius: 24px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    background-color: #747483;
    color: #ffffff;
    font-size: 16px;
    font-family: Roboto;
    line-height: 19px;
    outline: none;
    @media (max-width: 786px) {
      width: 25vw;
      position: absolute;
      left: 47vw;
      top: -10px;
      margin-top: 30px;
    }
  `;

  const Number = styled.input`
    position: absolute;
    top: 70px;
    left: 23.4375vw;
    width: 22vw;
    height: 43px;
    padding: 0px 8px;
    border: 0;
    box-sizing: border-box;
    border-radius: 24px;
    box-shadow: 0px 2px 8px rgba(64, 60, 67, 0.24);
    background-color: #ffffff;
    color: #909090;
    font-size: 16px;
    font-family: Roboto;
    font-weight: 300;
    line-height: 20px;
    @media (max-width: 786px) {
      width: 65vw;
      position: relative;
      left: 7vw;
      margin-top: 30px;
    }
  `;

  const CardContainer = styled.div`
    position: absolute;
    top: 466px;
    left: 20vw;
    width: 65vw;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #ffffff;
    overflow: hidden;
    @media (max-width: 786px) {
      top: 700px;
      left: 8vw;
      width: 80vw;
    }
  `;

  const FYPCard = styled.div`
    position: absolute;
    top: 105px;
    left: 25vw;
    width: 55vw;

    height: 15vh;
    background-color: #ffffff;
    border-radius: 24px;
    box-shadow: 0px 2px 10px rgba(3, 3, 3, 0.1);

    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
      height: 35vh;
      width: 80vw;
      left: 10vw;
    }
  `;

  const PatientCard = styled.div`
    position: relative;

    width: 27vw;
    height: 409px;
    background-color: #eeeeee;
    border-radius: 24px;
    box-shadow: 6px 6px 8px rgba(3, 3, 3, 0.22);
    margin: 20px;
    display: flex;
    transition: transform 0.2s;
    @media (max-width: 786px) {
      width: 100%;
      margin: 0;
      margin-top: 20px;
      justify-content: center;
      display: flex;
    }
    &:hover {
      transform: scale(1.05);
    }
  `;

  const PatientImage = styled.img`
    position: absolute;
    top: 6vh;
    left: 9vw;
    width: 15vh;
    height: 15vh;
    border-radius: 100000px;
    mix-blend-mode: multiply;

    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 786px) {
      width: 20vh;
      height: 20vh;
      left: 25vw;
    }
  `;

  const LogoImage = styled.img`
    position: absolute;
    width: 70 px;
    height: 80px;
    left: 20px;
    top: -5px;
    @media (max-width: 786px) {
      width: 40px;
      left: 30px;
      height: 60px;
    }
  `;

  const LogoText = styled.img`
    position: absolute;
    width: 70 px;
    height: 80px;
    left: 90px;
    top: 10px;
    @media (max-width: 786px) {
      width: 180px;
      height: 60px;
      left: 75px;
    }
  `;

  const CheckButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 32vh;
    left: 10vw;
    width: 120px;
    height: 36px;
    padding: 0px 8px;
    border: 0;

    box-sizing: border-box;
    border-radius: 24px;
    background-color: #d2234e;
    color: #ffffff;

    font-size: 14px;
    font-family: Roboto;
    line-height: 16px;
    outline: none;
    @media (max-width: 768px) {
      top: 35vh;
      left: 30vw;
    }
  `;
  const [patients, setPatients] = useState([]);

  const SearchAPI = async () => {
    const NSID = document.getElementById("Nsid").value;
    const Number = document.getElementById("Num").value;
    const combpar = NSID + Number;

    try {
      const response = await fetch(
        `http://localhost:5100/api/patientSearch?param=${combpar}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      setPatients(data);
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  console.log(localStorage.getItem("token"));
  console.log("email:", localStorage.getItem("email"));
  console.log("token:", localStorage.getItem("token"));

  console.log("data", localStorage.getItem("response"));

  const handleDiagnose = (patientInfo) => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    localStorage.setItem("prescriptiondata", JSON.stringify({}));
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("patient", JSON.stringify(patientInfo));
    window.location.href = "/prescription";
  };

  return (
    <div>
      <h1>Finder</h1>
      <NavBar>
        <LogoImage src={Logoimage} alt="website logo" />
        <LogoText src={Logotext} alt="website logo" />
        <HomeButt>Home</HomeButt>
        <SupportButt>Support</SupportButt>
        <ScheduleButt>Schedule</ScheduleButt>
      </NavBar>
      <Card>
        <FYP>Find Your patient </FYP>
        <FYPCard>
          <EPD>Enter patient's details</EPD>
          <NSID id="Nsid" placeholder="NSID"></NSID>

          <Number id="Num" placeholder="Number"></Number>

          <SearchButton
            onClick={() => {
              SearchAPI();
            }}
          >
            Search
          </SearchButton>
        </FYPCard>
      </Card>
      <CardContainer>
        {patients.map((patient) => (
          <PatientCard key={patient.id}>
            <PatientImage
              src={patient.gender === "M" ? AcMale : AcFemale}
              alt="patient image"
            />
            <h3
              style={{
                display: "none",
              }}
              data-patient={JSON.stringify(patient)}
            ></h3>
            <h3
              style={{
                position: "absolute",
                top: "25vh",
                left: "8vw",
                color: "#000000",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              {`${patient.firstName} ${patient.lastName}`}
              {" ,"}
              {(() => {
                const dob = new Date(patient.dob);
                const ageDifMs = Date.now() - dob.getTime();
                return Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);
              })()}
            </h3>

            {/* <h3
              style={{
                position: "absolute",
                top: "25vh",
                left: "22vw",
                fontSize: "24px",
                fontWeight: "400",
              }}
            >
              {(() => {
                const dob = new Date(patient.dob);
                const ageDifMs = Date.now() - dob.getTime();
                return Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);
              })()} */}
            {/* </h3> */}

            <CheckButton onClick={() => handleDiagnose(patient)}>
              Diagnose
            </CheckButton>
          </PatientCard>
        ))}
        <PatientCard
          onClick={() => {
            window.location.href = "/add";
          }}
          style={{
            cursor: "pointer",
            ...(window.innerWidth <= 768 && {
              marginTop: "60px",
            }),
          }}
        >
          <PatientImage
            src={AddIcon}
            style={{
              mixBlendMode: "multiply",
              height: "12vh",
              top: "10vh",
              left: "10vw",
              ...(window.innerWidth <= 768 && {
                // Toggle styles for screens smaller than or equal to 768px width
                top: "10vh",
                left: "25vw",
              }),
            }}
            alt="patient image"
          />
          <h3
            style={{
              position: "absolute",
              top: "23vh",
              left: "10vw",
              color: "#000000",
              fontSize: "24px",
              fontWeight: "500",
              ...(window.innerWidth <= 768 && {
                // Toggle styles for screens smaller than or equal to 768px width
                top: "25vh",
                left: "28vw",
              }),
            }}
          >
            Add Patient
          </h3>
          {/* <CheckButton>Diagnose</CheckButton> */}
        </PatientCard>
      </CardContainer>
    </div>
  );
}

export default Finder;
