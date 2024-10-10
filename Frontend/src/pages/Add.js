import React from "react";
import styled from "styled-components";
import Logoimage from "../images/logoIm.png";
import Logotext from "../images/logoText.png";
import Person from "../images/person.png";
import { useState } from "react";

function Add() {
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
    width: auto;
    height: 40px;
    right: 220px;
    top: 20px;
    background-color: #ffffff;
    border: none;
    padding: 10px;
    padding-top: 7px;

    border-radius: 25px;
    font-size: 16px;
    color: #000000;
    transition: 0.2s;
    &:hover {
      background-color: #d2234e;
      color: #ffffff;
    }
  `;

  const SupportButt = styled.button`
    position: absolute;
    width: auto;
    height: 40px;
    right: 140px;
    padding: 10px;
    padding-top: 7px;
    top: 20px;
    background-color: #ffffff;
    border: none;
    border-radius: 25px;
    transition: 0.2s;

    font-size: 16px;
    color: #000000;
    &:hover {
      background-color: #d2234e;
      color: #ffffff;
    }
  `;

  const LogoImage = styled.img`
    position: absolute;
    width: 70 px;
    height: 80px;
    left: 20px;
    top: -5px;
    @media (max-width: 768px) {
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
    @media (max-width: 768px) {
      width: 180px;
      height: 60px;
      left: 75px;
    }
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
    transition: 0.2s;
  `;

  const FormCard = styled.div`
    position: absolute;
    top: 156px;
    left: 20vw;
    width: 60vw;
    height: 55vh;
    background-color: #eeeeee;
    border-radius: 26px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
  `;

  const Save = styled.button`
    position: absolute;
    width: 130px;
    height: 40px;
    right: 49%;
    top: 80vh;

    background-color: #d2234e; /* Corrected */
    border: none;
    border-radius: 255px;
    font-size: 22px;
    color: #ffffff;
    cursor: pointer;
    padding-top: 1px;
    margin-bottom: 100px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
  `;

  const EnterPd = styled.h1`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: 520;
  `;

  const PersonImg = styled.img`
    mix-blend-mode: multiply;
    position: absolute;
    width: 40px;
    height: 40px;
    left: 250px;
    top: 17px;
  `;

  const NameHeading = styled.h2`
    position: absolute;
    top: 100px;
    left: 30px;
    font-size: 20px;
    font-weight: 500;
  `;
  const NameInput = styled.input`
    position: absolute;
    top: 95px;
    left: 150px;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    }
  `;
  const LastNameHeading = styled.h2`
    position: absolute;
    top: 100px;
    left: 25vw;
    font-size: 20px;
    font-weight: 500;
  `;
  const LastNameInput = styled.input`
    position: absolute;

    top: 95px;
    left: 31vw;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    }
  `;
  const GenderHeading = styled.h2`
    position: absolute;
    top: 100px;
    left: 46vw;
    font-size: 20px;
    font-weight: 500;
  `;

  const GenderContainer = styled.div`
    position: absolute;
    top: 95px;
    left: 50vw;
  `;

  const GenderLabel = styled.label`
    margin-right: 10px;
  `;

  const RadioButton = styled.input`
    display: none;

    + ${GenderLabel} {
      display: inline-block;

      border: 2px solid #d2234e;
      border-radius: 45px;
      cursor: pointer;
      padding: 5px 10px;
      height: 40px;
      width: 40px;
      transition: background-color 0.3s, color 0.3s;

      background-color: ${(props) => (props.checked ? "#d2234e" : "#fff")};
      color: ${(props) => (props.checked ? "#fff" : "#000")};
    }
  `;

  const Numberheading = styled.h1`
    position: absolute;
    top: 160px;
    left: 30px;
    font-size: 20px;
    font-weight: 500;
  `;

  const NumberInput = styled.input`
    position: absolute;
    top: 155px;
    left: 150px;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    }
  `;

  const Emailheading = styled.h1`
    position: absolute;
    top: 160px;
    left: 25vw;
    font-size: 20px;
    font-weight: 500;
  `;
  const EmailInput = styled.input`
    position: absolute;
    top: 155px;
    left: 31vw;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    }
  `;

  const BirthDateHeading = styled.h1`
    position: absolute;
    top: 220px;
    left: 30px;
    font-size: 20px;
    font-weight: 500;
  `;
  const BirthDateInput = styled.input`
    position: absolute;
    top: 215px;
    left: 150px;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    }
  `;

  const AadharnoHeading = styled.h1`
    position: absolute;
    top: 220px;
    left: 25vw;
    font-size: 20px;
    font-weight: 500;
  `;
  const AadharnoInput = styled.input`
    position: absolute;
    top: 215px;
    left: 31vw;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    }
  `;

  const AddressHeading = styled.h1`
    position: absolute;
    top: 280px;
    left: 30px;
    font-size: 20px;
    font-weight: 500;
  `;
  const AddressInput = styled.input`
    position: absolute;
    top: 275px;
    left: 150px;
    width: 50%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.15);
    }
  `;

  const registerPatient = async () => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("token");

    // Retrieve form input values
    const name = document.querySelector(
      "input[placeholder='Enter First Name']"
    ).value;
    const lastName = document.querySelector(
      "input[placeholder='Enter Last Name']"
    ).value;
    const gender = document.querySelector("input[type='radio']:checked").value;
    const phone = document.querySelector(
      "input[placeholder='Enter Phone Number']"
    ).value;
    const email = document.querySelector(
      "input[placeholder='Enter Email']"
    ).value;
    const birthDate = document.querySelector("input[type='date']").value;
    const aadhar = document.querySelector(
      "input[placeholder='Enter Aadhar Number']"
    ).value;
    const address = document.querySelector(
      "input[placeholder='Enter Address']"
    ).value;

    console.log(
      name,
      lastName,
      gender,
      phone,
      email,
      birthDate,
      aadhar,
      address
    );

    const patient = {
      id: 0,
      firstName: name,
      lastName: lastName,
      dob: birthDate,
      gender: gender,
      contactNo: phone,
      email: email,
      address: address,
      adharNumber: aadhar,
    };

    try {
      // Send POST request to server
      fetch("http://localhost:5100/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: 0,
          firstName: name,
          lastName: lastName,
          dob: birthDate,
          gender: gender,
          contactNo: phone,
          email: email,
          address: address,
          adharNumber: aadhar,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("An error occurred while registering the patient");
          }
          return response.text(); // Return the promise to get the response text
        })
        .then((NSID) => {
          alert("Patient registered successfully with NSID " + NSID);
          patient.nsid = NSID;
          localStorage.setItem("patient", JSON.stringify(patient));
          window.location.href = "/prescription";
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while registering the patient");
        });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering the patient");
    }
  };

  const [gender, setGender] = useState("M");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  console.log(localStorage.getItem("token"));

  return (
    <div style={{ fontFamily: "zohopuvi-medium" }}>
      <NavBar>
        <LogoImage src={Logoimage} alt="website logo" />
        <LogoText src={Logotext} alt="website logo" />
        <HomeButt>Home</HomeButt>
        <SupportButt>Support</SupportButt>
        <ScheduleButt>Schedule</ScheduleButt>
      </NavBar>
      <FormCard>
        <EnterPd>Enter Patient's details</EnterPd>
        <PersonImg src={Person} alt="person" />

        <NameHeading>First name</NameHeading>
        <NameInput type="text" placeholder="Enter First Name" />
        <LastNameHeading>Last name</LastNameHeading>
        <LastNameInput type="text" placeholder="Enter Last Name" />
        <GenderHeading>Gender</GenderHeading>
        <GenderContainer>
          <RadioButton
            type="radio"
            id="male"
            value="M"
            checked={gender === "M"}
            onChange={handleGenderChange}
          />
          <GenderLabel htmlFor="male">M</GenderLabel>
          <RadioButton
            type="radio"
            id="female"
            value="F"
            checked={gender === "F"}
            onChange={handleGenderChange}
          />
          <GenderLabel htmlFor="female">F</GenderLabel>
        </GenderContainer>
        <Numberheading>Phone no.</Numberheading>
        <NumberInput type="text" placeholder="Enter Phone Number" />
        <Emailheading>Email</Emailheading>
        <EmailInput type="email" placeholder="Enter Email" />
        <BirthDateHeading>Birth Date</BirthDateHeading>
        <BirthDateInput type="date" />
        <AadharnoHeading>Aadhar no.</AadharnoHeading>
        <AadharnoInput type="text" placeholder="Enter Aadhar Number" />
        <AddressHeading>Address</AddressHeading>
        <AddressInput type="text" placeholder="Enter Address" />
      </FormCard>
      <Save
        onClick={() => {
          registerPatient();
        }}
      >
        Save
      </Save>
    </div>
  );
}

export default Add;
