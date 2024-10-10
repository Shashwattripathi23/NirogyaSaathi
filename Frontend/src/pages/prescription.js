import React from "react";

import styled from "styled-components";
import Logoimage from "../images/logoIm.png";
import Logotext from "../images/logoText.png";
import Docsign from "../images/Docsign.png";
import Docimage from "../images/DocImage.png";
import Rxicon from "../images/RXicon.png";
import { useState } from "react";
import QRCode from "qrcode.react";
import "./css/prescription.css";
import { useEffect } from "react";

import ReactDOM from "react-dom";

function Prescription() {
  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const ModalContent = styled.div`
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 90%;
    max-height: 90%;
  `;

  const CloseButton = styled.button`
    position: absolute;
    top: -11px;
    right: 4px;
    background: transparent;
    border: none;
    font-size: 2.5rem;

    cursor: pointer;
  `;

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
    overflow-x: hidden;
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
  `;

  const Headerdoc = styled.div`
    position: absolute;
    width: 100%;
    height: 150px;
    top: 110px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const DocImage = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0px;
    right: 20vw;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
  `;

  const ClinincName = styled.h1`
    position: absolute;
    top: 0px;
    left: 13vw;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `;

  const ClinicAddress = styled.h1`
    position: absolute;
    top: 40px;
    left: 13vw;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const ClinicContact = styled.h1`
    position: absolute;
    top: 70px;
    left: 13vw;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const DocSign = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0px;
    left: 4vw;
    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
  `;

  const DocName = styled.h1`
    position: absolute;
    top: 0px;
    right: 9vw;
    font-size: 24px;
    font-weight: 500;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `;

  const DocQual = styled.h1`
    position: absolute;
    top: 40px;
    right: 12vw;
    font-size: 16px;
    font-weight: 400;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const DocSpecial = styled.h1`
    position: absolute;
    top: 65px;
    right: 10vw;
    font-size: 16px;
    font-weight: 400;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const DocId = styled.h1`
    position: absolute;
    top: 90px;
    right: 10vw;
    font-size: 16px;
    font-weight: 400;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  `;

  const PresCard = styled.div`
    position: absolute;
    top: 356px;
    left: 5vw;
    width: 90vw;
    height: 1250px;
    background-color: rgba(238, 238, 238, 0.33);
    min-height: 1250px;

    border-radius: 26px;
    box-shadow: 0px 1px 12px rgba(3, 3, 3, 0.18);
  `;

  const HistoryIcon = styled.svg`
    font-size: 50px;
    position: absolute;
    width: 30px;
    height: 50px;
    right: 50px;
    top: 30px;

    @media (max-width: 768px) {
      /* Adjust styles for smaller screens */
      width: 20px;
      height: 20px;
      left: 5px;
      top: 5px;
    }
  `;
  const RXIcon = styled.img`
    font-size: 50px;
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50px;
    top: 30px;

    @media (max-width: 768px) {
      /* Adjust styles for smaller screens */
      width: 20px;
      height: 20px;
      left: 5px;
      top: 5px;
    }
  `;

  const Pgender = styled.h1`
    position: absolute;
    top: 380px;
    left: 4.5vw;
    font-size: 26px;

    font-weight: 600;
    color: #000000;
    cursor: no-drop;
  `;

  const Presdate = styled.h1`
    position: absolute;
    top: 112px;
    left: 5vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;
  `;

  const NSID = styled.h1`
    position: absolute;
    top: 250px;
    left: 9vh;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;
  `;

  const NSIDBox = styled.div`
    position: absolute;
    top: 248px;
    left: 9vw;
    width: 15vw;
    height: 53px;

    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;

    border-radius: 6px;
    background-color: #ede8e8;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    cursor: no-drop;
    outline: none;
  `;

  const Pnumber = styled.h1`
    position: absolute;
    top: 250px;
    left: 25vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;
  `;

  const PnumberBox = styled.div`
    position: absolute;
    top: 248px;
    left: 35vw;
    width: 15vw;
    height: 53px;

    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;

    border-radius: 6px;
    background-color: #ede8e8;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    cursor: no-drop;
    outline: none;
  `;

  const Pname = styled.h1`
    position: absolute;
    top: 250px;
    left: 51vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;

    @media (max-width: 768px) {
      /* Adjust styles for smaller screens */
      font-size: 16px;
    }
  `;
  const PnameBox = styled.div`
    position: absolute;
    top: 248px;
    left: 60vw;
    width: 15vw;
    height: 53px;

    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;

    border-radius: 6px;
    background-color: #ede8e8;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    cursor: no-drop;
    outline: none;
  `;

  const Datebox = styled.div`
    position: absolute;
    top: 122px;
    left: 9vw;
    width: 148px;
    height: 53px;

    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;

    border-radius: 6px;
    background-color: #ede8e8;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    cursor: no-drop;
    outline: none;
  `;

  const PAge = styled.h1`
    position: absolute;
    top: 250px;
    left: 77vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;

    @media (max-width: 768px) {
      /* Adjust styles for smaller screens */
      font-size: 16px;
    }
  `;

  const AgeBox = styled.div`
    position: absolute;
    top: 248px;
    left: 81vw;
    width: 148px;
    height: 53px;
    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;

    border-radius: 6px;
    background-color: #ede8e8;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    cursor: no-drop;
    outline: none;
  `;

  const PgenderBox = styled.div`
    position: absolute;
    top: 392px;
    left: 10.5vw;
    width: 58px;
    height: 53px;

    border: 0;
    box-sizing: border-box;

    padding: 15px 8px;
    border-radius: 6px;
    background-color: #ede8e8;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    cursor: no-drop;
    outline: none;
  `;
  const Paddress = styled.h1`
    position: absolute;
    top: 382px;
    left: 18vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;

    @media (max-width: 768px) {
      /* Adjust styles for smaller screens */
      font-size: 16px;
    }
  `;
  const PaddressBox = styled.div`
    position: absolute;
    top: 378px;
    left: 25vw;
    width: 50vw;
    height: 53px;

    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;

    border-radius: 6px;
    background-color: #ede8e8;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    cursor: no-drop;
    outline: none;
  `;

  const Complaints = styled.h1`
    position: absolute;

    top: 500px;
    left: 4.5vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;
  `;

  const ComplaintBox = styled.textarea`
    position: absolute;
    top: 491px;
    left: 16.5vw;
    width: 60vw;
    height: 60px;
    padding: 8px;
    border: 0;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: rgba(233, 230, 230, 0.28);
    color: #000000;
    font-size: 26px;
    font-family: Roboto;
    line-height: 26px;
    outline: none;
  `;

  const HPITable = styled.div`
    position: absolute;
    top: 630px;
    left: 5vw;
    width: 30vw;
    height: 80px;

    background-color: #b2b2b2;
    box-shadow: 0px 1px 12px rgba(3, 3, 3, 0.08);
    border-radius: 0px;

    @media (max-width: 768px) {
      /* Adjust styles for smaller screens */
      width: 90vw;
      height: 500px;
    }
  `;
  const HPIdiv = styled.div`
    position: relative;
    height: auto;
    background-color: transparent;
    width: 30vw;
    top: 720px;
    left: 5vw;
    box-shadow: 0px 1px 12px rgba(3, 3, 3, 0.08);
    border-radius: 0px;
    display: flex;
    flex-direction: column;
  `;

  const HPITitle = styled.h1`
    position: absolute;
    top: 0px;
    left: 30px;
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
  `;

  const HPIdesc = styled.h1`
    position: absolute;
    top: 0px;
    left: 16vw;
    font-size: 26px;

    font-weight: 600;
    color: #ffffff;
  `;

  const Tabledevider = styled.div`
    position: absolute;
    top: 10px;
    left: 11vw;
    width: 3px;
    height: 61px;
    background-color: #e1e1e1;
    border-radius: 2px;
  `;

  const AddHPI = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    right: 20px;
    top: 640px;
    left: 36vw;
    background-color: #b2b2b2;
    border: none;
    border-radius: 255px;
    font-size: 26px;
    color: #000000;
  `;

  const Note = styled.h1`
    position: absolute;
    top: 625px;
    left: 42vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
    cursor: no-drop;
  `;
  const NoteBox = styled.input`
    position: absolute;
    top: 615px;
    left: 53vw;
    width: 30vw;
    height: 53px;
    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;
    border-radius: 6px;
    font-size: 25px;
    background-color: rgba(233, 230, 230, 0.28);
  `;

  const Diagnosis = styled.h1`
    position: absolute;
    top: 725px;
    left: 42vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;

    @media (max-width: 768px) {
      /* Adjust styles for smaller screens */
      font-size: 16px;
    }
  `;

  const DiagnosisBox = styled.input`
    position: absolute;
    top: 735px;
    left: 53vw;
    width: 30vw;
    height: 53px;

    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;
    border-radius: 6px;
    font-size: 25px;
    background-color: rgba(233, 230, 230, 0.28);
  `;

  const Tests = styled.h1`
    position: absolute;
    top: 825px;
    left: 42vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
  `;

  const TestsBox = styled.input`
    position: absolute;
    top: 835px;
    left: 53vw;
    width: 30vw;
    height: 53px;
    font-size: 25px;
    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;
    border-radius: 6px;
    background-color: rgba(233, 230, 230, 0.28);
  `;

  const Medicinetable = styled.div`
    position: relative;
    top: 825px;
    left: 5vw;
    width: 80vw;
    height: 90px;
    background-color: #b2b2b2;
    box-shadow: 0px 1px 12px rgba(3, 3, 3, 0.08);
    border-radius: 0px;
  `;

  const Medicinediv = styled.div`
    position: relative;
    top: 845px;
    left: 5vw;
    width: 80vw;
    height: auto;
    background-color: transparent;
    box-shadow: 0px 1px 12px rgba(3, 3, 3, 0.08);
    border-radius: 0px;
  `;

  const MedicineTabledivider = styled.div`
    position: absolute;
    top: 10px;
    left: 10vw;
    width: 3px;
    height: 70px;
    background-color: #e1e1e1;
    border-radius: 2px;
  `;

  const MedicineName = styled.h1`
    position: absolute;
    top: 10px;
    left: 2vw;
    font-size: 26px;
    font-weight: 600;

    color: #ffffff;
  `;
  const MedicineQuantity = styled.h1`
    position: absolute;
    top: 10px;
    left: 13vw;
    font-size: 26px;
    font-weight: 600;

    color: #ffffff;
  `;

  const MedicineFrequency = styled.h1`
    position: absolute;
    top: 10px;
    left: 25vw;
    font-size: 26px;
    font-weight: 600;

    color: #ffffff;
  `;

  const MedicineRoute = styled.h1`
    position: absolute;
    top: 10px;
    left: 37.5vw;
    font-size: 26px;
    font-weight: 600;

    color: #ffffff;
  `;

  const Medicineduration = styled.h1`
    position: absolute;
    top: 10px;
    left: 47.5vw;
    font-size: 26px;
    font-weight: 600;

    color: #ffffff;
  `;

  const Medicinecomment = styled.h1`
    position: absolute;
    top: 10px;
    left: 64.5vw;
    font-size: 26px;
    font-weight: 600;

    color: #ffffff;
  `;

  const AddMedicine = styled.button`
    position: relative;
    width: 50px;
    height: 50px;

    top: 20px;
    left: 82vw;
    background-color: #b2b2b2;
    border: none;
    border-radius: 255px;
    font-size: 26px;
    color: #000000;
  `;

  const Tags = styled.h1`
    position: relative;
    top: 870px;
    left: 5vw;
    font-size: 26px;
    font-weight: 600;
    color: #000000;
  `;

  const Tagsinput = styled.input`
    position: relative;
    top: 830px; /* Same top as Tags */
    left: 12vw; /* Adjusted to align horizontally next to Tags */
    width: 8vw;
    height: 53px;
    border: 0;
    box-sizing: border-box;

    padding: 15px 8px;
    border-radius: 6px;
    background-color: rgba(233, 230, 230, 0.28);
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    outline: none;
  `;

  const Tagdiv = styled.div`
    position: relative;
    top: 870px; /* Same top as Tags */
    left: 5vw;
    width: 26vw;
    height: auto; /* Change height to auto to allow multiple rows */
    border: 0;
    box-sizing: border-box;
    padding: 15px 8px;
    border-radius: 6px;
    background-color: transparent;
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    outline: none;
    display: flex;
    flex-wrap: wrap; /* Allow flex items to wrap to the next line */
    gap: 10px; /* Add gap between tags */
  `;

  const AddTag = styled.button`
    position: relative;
    top: 840px; /* Same top as Tags */
    left: 16vw; /* Adjusted to align horizontally next to Tagsinput */
    width: 50px;
    height: 50px;
    background-color: #b2b2b2;
    border: none;
    border-radius: 255px;
    font-size: 26px;
    color: #000000;
    cursor: pointer;
  `;

  const Allergy = styled.h1`
    position: relative;
    top: 750px; /* Same top as Tags */
    left: 30vw; /* Adjusted to align horizontally next to AddTag */
    font-size: 26px;
    font-weight: 600;
    color: #000000;
  `;

  const AllergyBox = styled.input`
    position: relative;
    top: 700px; /* Same top as Tags */
    left: 37vw; /* Adjusted to align horizontally next to Allergy */
    width: 8vw;
    height: 53px;
    border: 0;
    box-sizing: border-box;

    padding: 15px 8px;
    border-radius: 6px;
    background-color: rgba(233, 230, 230, 0.28);
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    outline: none;
  `;

  const NextFollowup = styled.h1`
    position: relative;
    top: 650px; /* Same top as Tags */
    left: 48vw; /* Adjusted to align horizontally next to AllergyBox */
    font-size: 26px;
    font-weight: 600;
    color: #000000;
  `;

  const NextFollowupBox = styled.input`
    position: relative;
    top: 610px; /* Same top as Tags */
    left: 59vw; /* Adjusted to align horizontally next to NextFollowup */
    width: 8vw;
    height: 53px;
    border: 0;
    box-sizing: border-box;

    padding: 15px 8px;
    border-radius: 6px;
    background-color: rgba(233, 230, 230, 0.28);
    color: #000000;
    font-size: 25px;
    font-family: Roboto;
    line-height: 26px;
    outline: none;
  `;

  const Attachments = styled.h1`
    position: relative;
    top: 560px;
    left: 69vw; /* Adjusted to align horizontally next to NextFollowupBox */
    font-size: 26px;
    font-weight: 600;
    color: #000000;
  `;

  const Save = styled.button`
    position: relative;
    width: 130px;
    height: 40px;
    left: 40vw; /* Adjusted to center the button */
    top: 650px;

    background-color: #d2234e; /* Corrected */
    border: none;
    border-radius: 255px;
    font-size: 22px;
    color: #ffffff;
    cursor: pointer;
    padding-top: 1px;
    margin-bottom: 100px;
  `;

  console.log(localStorage.getItem("patient"));

  const email = localStorage.getItem("email");

  const fetchDoctor = async () => {
    try {
      const response = await fetch(
        `http://localhost:5100/api/doctor/getDoctor?doctorEmail=${email}`,
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
        alert(`HTTP Error: ${response.status} - ${errorMessage}`); // e.g. 404: Not Found
        throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      localStorage.setItem("Doctor", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  fetchDoctor();

  const prescriptionPortalLink =
    "https://e04a-2401-4900-8820-966f-3108-e3de-ca0f-9b0e.ngrok-free.app/cam";

  const toggleQRCode = () => {
    const existingQrDiv = document.getElementById("qrdiv");
    if (existingQrDiv) {
      existingQrDiv.remove();
      return;
    }

    const qrdiv = document.createElement("div");
    qrdiv.id = "qrdiv";
    qrdiv.style.position = "fixed";
    qrdiv.style.top = "0";
    qrdiv.style.left = "0";
    qrdiv.style.width = "100vw";
    qrdiv.style.height = "100vh";
    qrdiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    qrdiv.style.display = "flex";
    qrdiv.style.justifyContent = "center";
    qrdiv.style.alignItems = "center";
    qrdiv.style.zIndex = "1000";

    const qrcontent = document.createElement("div");
    qrcontent.id = "qrcontent";
    qrcontent.style.position = "relative";
    qrcontent.style.backgroundColor = "white";
    qrcontent.style.padding = "20px";
    qrcontent.style.borderRadius = "8px";
    qrcontent.style.maxWidth = "90%";
    qrcontent.style.maxHeight = "90%";
    qrcontent.style.overflow = "auto";

    const qrCloseButton = document.createElement("button");
    qrCloseButton.style.position = "absolute";
    qrCloseButton.style.top = "-11px";
    qrCloseButton.style.right = "4px";
    qrCloseButton.style.backgroundColor = "transparent";
    qrCloseButton.style.border = "none";
    qrCloseButton.style.fontSize = "2.5rem";
    qrCloseButton.style.cursor = "pointer";
    qrCloseButton.innerHTML = "&times;";
    qrCloseButton.onclick = () => {
      qrdiv.remove();
    };

    // Create a container for the QR code
    const qrCodeContainer = document.createElement("div");
    ReactDOM.render(
      <QRCode value={`${prescriptionPortalLink}/qr`} size={256} />,
      qrCodeContainer
    );

    qrcontent.appendChild(qrCloseButton);
    qrcontent.appendChild(qrCodeContainer);
    qrdiv.appendChild(qrcontent);
    document.body.appendChild(qrdiv);
  };

  const Pdetails = localStorage.getItem("patient");
  console.log(Pdetails);
  console.log(localStorage.getItem("NSID"));

  function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  console.log(localStorage.getItem("token"));

  const prescriptionData = {
    nsid: "",
    contactNo: "",
    firstName: "",
    lastName: "",
    dob: "",
    Age: "",
    address: "",
    chiefComplaint: "",
    hpiEntries: [],
    additionalNotes: "",
    diagnosis: "",
    medicalTests: "",
    medicinedata: [],
    tags: [],
    allergy: "",
    nextFollowup: "",
  };

  const savePrescriptionToLocal = () => {
    getHPIData();
    getMedicineData();

    prescriptionData.nsid = JSON.parse(localStorage.getItem("patient")).nsid;
    prescriptionData.contactNo = JSON.parse(
      localStorage.getItem("patient")
    ).contactNo;
    prescriptionData.firstName = JSON.parse(
      localStorage.getItem("patient")
    ).firstName;

    prescriptionData.lastName = JSON.parse(
      localStorage.getItem("patient")
    ).lastName;
    prescriptionData.Age = calculateAge(
      JSON.parse(localStorage.getItem("patient")).dob
    );
    prescriptionData.gender = JSON.parse(
      localStorage.getItem("patient")
    ).gender;
    prescriptionData.address = JSON.parse(
      localStorage.getItem("patient")
    ).address;
    prescriptionData.chiefComplaint =
      document.querySelector("#Complaints").value;
    prescriptionData.hpiEntries = HPIs;
    prescriptionData.additionalNotes = document.querySelector("#notebox").value;
    prescriptionData.diagnosis = document.querySelector("#diagnosisbox").value;
    prescriptionData.medicalTests = document.querySelector("#testbox").value;
    prescriptionData.medicinedata = Medicinedata;
    prescriptionData.tags = Tagsdata;
    prescriptionData.allergy = document.querySelector("#allergybox").value;
    prescriptionData.nextFollowup =
      document.querySelector("#followupbox").value;

    console.log(prescriptionData);

    localStorage.setItem("prescriptiondata", JSON.stringify(prescriptionData));

    localStorage.setItem("tags", JSON.stringify(Tagsdata));

    localStorage.setItem("HPIs", JSON.stringify(HPIs));

    localStorage.setItem("Medicinedata", JSON.stringify(Medicinedata));

    // create json for Api

    const prescriptionDataApi = {
      demail: JSON.parse(localStorage.getItem("Doctor")).email,
      nsid: JSON.parse(localStorage.getItem("patient")).nsid,
      date: new Date().toISOString(),
      complaint: document.querySelector("#Complaints").value.trim(),
      diagnosis: document.querySelector("#diagnosisbox").value.trim(),
      notes: document.querySelector("#notebox").value,
      tests: document.querySelector("#testbox").value,
      tags: Tagsdata.join(","),
      allergy: document.querySelector("#allergybox").value.trim(),
      followup: document.querySelector("#followupbox").value.trim(),
      hpi: HPIs.join(","),
      medications: Medicinedata.join(","),
    };

    console.log("data bro", prescriptionDataApi);
    localStorage.setItem(
      "prescriptiondataapi",
      JSON.stringify(prescriptionDataApi)
    );

    const savePrescription = async () => {
      try {
        const response = await fetch("http://localhost:5100/api/pres/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(prescriptionDataApi),
        });

        if (response.ok) {
          console.log("Success:", response);
          alert("Prescription saved successfully");
        } else {
          const errorResponse = await response.json();
          console.error("Error:", errorResponse);
          alert(`Error: ${errorResponse.message || response.statusText}`);
        }
      } catch (error) {
        console.error("An error occurred:", error.message);
        alert(`An error occurred: ${error.message}`);
      }
    };

    // Call the function to save the prescription
    savePrescription();

    window.location.href = "/pdf";
    // Optionally, you can perform navigation or any other action here
  };

  var HPIs = [];

  let HPIindex = 0;

  // Function to get HPI data from DOM and update the HPIs array
  const getHPIData = () => {
    const hpiEntries = document.querySelectorAll(".hpientry");
    hpiEntries.forEach((entry, index) => {
      const title = entry.querySelector(".hpititle").value;
      const des = entry.querySelector(".hpides").value;
      HPIs[index] = { title, des };
    });
    console.log(HPIs);
  };

  // Function to add a new HPI entry
  const addHpiEntry = ({ title = "", des = "" } = {}) => {
    const hpiDiv = document.getElementById("HPIdiv");

    const hpiEntry = document.createElement("div");
    hpiEntry.className = "hpientry";
    hpiEntry.setAttribute("id", `hpiEntry${HPIindex}`);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.style.position = "absolute";
    deleteButton.style.right = "-30px";
    deleteButton.style.top = "15px";
    deleteButton.style.paddingRight = "5px";
    deleteButton.style.paddingLeft = "5px";
    deleteButton.style.borderRadius = "50%";
    // deleteButton.style.border = "2px solid black";
    deleteButton.style.backgroundColor = "#d2234e";
    deleteButton.style.color = "#ffffff";
    deleteButton.onclick = () => deleteHpiEntry(hpiEntry.id);

    const titleInput = document.createElement("input");
    titleInput.className = "hpititle";
    titleInput.value = title;
    titleInput.placeholder = "Enter the title";

    const descInput = document.createElement("input");
    descInput.className = "hpides";
    descInput.value = des;
    descInput.placeholder = "Enter the description";

    hpiEntry.appendChild(titleInput);
    hpiEntry.appendChild(descInput);
    hpiEntry.appendChild(deleteButton);
    hpiDiv.appendChild(hpiEntry);

    HPIindex++;
  };

  // Function to delete an HPI entry
  const deleteHpiEntry = (id) => {
    const hpiDiv = document.getElementById("HPIdiv");
    const hpiEntry = document.getElementById(id);
    hpiDiv.removeChild(hpiEntry);

    const index = parseInt(id.replace("hpiEntry", ""));
    HPIs.splice(index, 1);
    const hpiEntries = document.querySelectorAll(".hpientry");
    hpiEntries.forEach((entry, idx) => {
      entry.id = `hpiEntry${idx}`;
    });

    HPIindex = hpiEntries.length;
  };

  var Medicineindex = 0;

  const addMedicineEntry = ({
    name,
    quantity,
    frequency,
    route,
    duration,
    comment,
  }) => {
    const medicineDiv = document.getElementById("Medicinediv");

    // Create new Medicineentry elements
    const medicineEntry = document.createElement("div");
    medicineEntry.className = "medicineentry";

    const nameInput = document.createElement("input");
    nameInput.className = "medicinename";
    nameInput.value = name;
    nameInput.placeholder = "Name";

    const quantityInput = document.createElement("input");
    quantityInput.className = "medicinequantity";
    quantityInput.value = quantity;
    quantityInput.placeholder = "Quantity";

    const frequencyInput = document.createElement("input");
    frequencyInput.className = "medicinefrequency";
    frequencyInput.value = frequency;
    frequencyInput.placeholder = "Frequency";

    const routeInput = document.createElement("input");
    routeInput.className = "medicineroute";
    routeInput.value = route;
    routeInput.placeholder = "Route";

    const durationInput = document.createElement("input");
    durationInput.className = "medicineduration";
    durationInput.value = duration;
    durationInput.placeholder = "Duration";

    const commentInput = document.createElement("input");
    commentInput.className = "medicinecomment";
    commentInput.placeholder = "Comment";
    commentInput.value = comment;

    medicineEntry.setAttribute("id", `medicineEntry${Medicineindex}`);
    Medicineindex++;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.style.position = "absolute";
    deleteButton.style.right = "-30px";
    deleteButton.style.top = "15px";
    deleteButton.style.paddingRight = "5px";
    deleteButton.style.paddingLeft = "5px";
    deleteButton.style.borderRadius = "50%";
    // deleteButton.style.border = "2px solid black";
    deleteButton.style.backgroundColor = "#d2234e";
    deleteButton.style.color = "#ffffff";

    deleteButton.onclick = () => {
      deleteMedicineEntry(medicineEntry.id);
    };

    medicineEntry.appendChild(nameInput);
    medicineEntry.appendChild(quantityInput);
    medicineEntry.appendChild(frequencyInput);
    medicineEntry.appendChild(routeInput);
    medicineEntry.appendChild(durationInput);
    medicineEntry.appendChild(commentInput);
    medicineEntry.appendChild(deleteButton);

    // Append new Medicineentry to Medicinediv
    medicineDiv.appendChild(medicineEntry);

    const presCardpage = document.getElementById("PresCard");

    // Extract the current height and convert to number
    let currentHeight = parseInt(presCardpage.style.height, 10) || 0;
    console.log("Current height:", currentHeight);

    // Calculate the new height
    let newHeight = currentHeight + 120;
    console.log("New height:", newHeight);

    // Set the new height
    presCardpage.style.height = `${newHeight}px`;
  };

  const deleteMedicineEntry = (index) => {
    console.log(index);
    const medicineDiv = document.getElementById("Medicinediv");
    const medicineEntry = document.getElementById(index);
    medicineDiv.removeChild(medicineEntry);
    Medicineindex--;

    index = index.replace("medicineEntry", "");
    console.log(index);
    var intIndex = parseInt(index);
    console.log(intIndex);
    for (var i = intIndex + 1; i < Medicinedata.length; i++) {
      const temp = document.getElementById(`medicineEntry${i}`);
      console.log(temp);
      temp.id = `medicineEntry${i - 1}`;
    }
  };

  const Medicinedata = [];

  const getMedicineData = () => {
    const medicineEntries = document.querySelectorAll(".medicineentry");

    // Iterate over each entry
    medicineEntries.forEach((entry, index) => {
      const name = entry.querySelector(".medicinename")?.value || "";
      const quantity = entry.querySelector(".medicinequantity")?.value || "";
      const frequency = entry.querySelector(".medicinefrequency")?.value || "";
      const route = entry.querySelector(".medicineroute")?.value || "";
      const duration = entry.querySelector(".medicineduration")?.value || "";
      const comment = entry.querySelector(".medicinecomment")?.value || "";

      // Store the extracted values in the Medicinedata array
      Medicinedata[index] = {
        name,
        quantity,
        frequency,
        route,
        duration,
        comment,
      };
    });

    // Output the collected data
    console.log(Medicinedata);

    // Return the collected data if needed elsewhere
    return Medicinedata;
  };

  const Tagsdata = [];

  const addTag = () => {
    const tagDiv = document.getElementById("tagdiv");
    const tagInput = document.querySelector("#tagsinput");

    if (tagInput.value.trim() === "") {
      return;
    }

    const newTag = document.createElement("h1");
    newTag.className = "tag";
    newTag.innerHTML = tagInput.value;
    newTag.onclick = () => {
      tagDiv.removeChild(newTag);
      Tagsdata.splice(Tagsdata.indexOf(tagInput.value), 1);
    };

    tagDiv.appendChild(newTag);

    Tagsdata.push(tagInput.value);
    console.log(Tagsdata);
    tagInput.value = "";
  };

  let dataflag = false;
  setTimeout(() => {
    if (!dataflag) {
      loaddataforedit();
    }
  }, 1000);

  const loaddataforedit = () => {
    const data = JSON.parse(localStorage.getItem("prescriptiondata"));
    console.log(data);
    if (!data) {
      return;
    }
    if (!data.hpiEntries) {
      data.hpiEntries = [];
    }
    console.log("yaha dekh", data.hpiEntries);
    data.hpiEntries.forEach((entry) => {
      addHpiEntry(entry);
      console.log(entry);
    });

    if (!data.medicinedata) {
      data.medicinedata = [];
    }

    data.medicinedata.forEach((entry) => {
      addMedicineEntry(entry);
    });

    if (!data.tags) {
      data.tags = [];
    }
    data.tags.forEach((tag) => {
      const tagDiv = document.getElementById("tagdiv");
      const newTag = document.createElement("h1");
      newTag.className = "tag";
      newTag.innerHTML = tag;
      tagDiv.appendChild(newTag);
    });
    dataflag = true;
  };

  const [ws, setWs] = useState(null);
  const [files, setFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFileData, setSelectedFileData] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket(
      "wss://e04a-2401-4900-8820-966f-3108-e3de-ca0f-9b0e.ngrok-free.app"
    );

    websocket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    websocket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "file") {
        console.log("Received file:", msg.filename);
        addFileToList(msg.filename, msg.data);
      } else {
        console.log("Received from server:", msg);
      }
    };

    websocket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    setWs(websocket);

    return () => {
      websocket.close();
    };
  }, []);

  const addFileToList = (filename, data) => {
    const fileList = document.querySelector("#Attached");
    const fileItem = document.createElement("div");
    fileItem.textContent = filename;
    fileItem.style.cursor = "pointer";
    fileItem.style.fontWeight = "200";
    fileItem.addEventListener("click", () => openFileInModal(data));
    fileList.appendChild(fileItem);
  };

  const openFileInModal = (data) => {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("fileContent");
    if (!modal || !modalContent) {
      console.error("Modal or modal content element not found");
      return;
    }

    modalContent.innerHTML = "";

    const img = document.createElement("img");
    img.src = `data:image/png;base64,${data}`;
    modalContent.appendChild(img);

    modal.style.display = "block";
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("fileContent");
    console.log("Close modal");

    modal.style.display = "none";
    modalContent.innerHTML = "";
  };

  window.onclick = (event) => {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      const modalContent = document.getElementById("fileContent");
      modal.style.display = "none";
      modalContent.textContent = "";
    }
  };

  console.log("Data loaded for editing");

  return (
    <div style={{ height: "220vh" }}>
      <NavBar>
        <LogoImage src={Logoimage} alt="website logo" />
        <LogoText src={Logotext} alt="website logo" />
        <HomeButt>Home</HomeButt>
        <SupportButt>Support</SupportButt>
        <ScheduleButt>Schedule</ScheduleButt>
      </NavBar>
      <Headerdoc>
        <DocSign src={Docsign} alt="docsign" />
        <ClinincName>Gulati Clinic</ClinincName>
        <ClinicAddress>123, 4th Street, New Delhi, India</ClinicAddress>
        <ClinicContact>Phone: 9876543210</ClinicContact>
        <DocImage src={Docimage} alt="docimage" />
        <DocName>
          Dr.{" "}
          {JSON.parse(localStorage.getItem("Doctor")).firstName +
            " " +
            JSON.parse(localStorage.getItem("Doctor")).lastName}
        </DocName>

        <DocQual>
          {JSON.parse(localStorage.getItem("Doctor")).qualification}
        </DocQual>
        <DocSpecial>
          {JSON.parse(localStorage.getItem("Doctor")).specialization}
        </DocSpecial>
        <DocId>
          Doctor ID: {JSON.parse(localStorage.getItem("Doctor")).registrationNo}
        </DocId>
      </Headerdoc>
      <PresCard id="PresCard">
        <HistoryIcon>
          <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>
        </HistoryIcon>
        <RXIcon src={Rxicon} alt="rxicon" />
        <Presdate>Date</Presdate>
        <Datebox>{new Date().toLocaleDateString()}</Datebox>
        <NSID>NSID</NSID>
        <NSIDBox>{JSON.parse(localStorage.getItem("patient")).nsid}</NSIDBox>
        <Pnumber> Phone number</Pnumber>
        <PnumberBox>
          {JSON.parse(localStorage.getItem("patient")).contactNo}
        </PnumberBox>
        <Pname>Patient Name</Pname>
        <PnameBox>
          {JSON.parse(localStorage.getItem("patient")).firstName}{" "}
          {JSON.parse(localStorage.getItem("patient")).lastName}
        </PnameBox>
        <PAge>Age</PAge>
        <AgeBox id="Agebox">
          {calculateAge(JSON.parse(localStorage.getItem("patient")).dob)}
        </AgeBox>{" "}
        <Pgender>Gender</Pgender>
        <PgenderBox>
          {JSON.parse(localStorage.getItem("patient")).gender}
        </PgenderBox>
        <Paddress>Address</Paddress>
        <PaddressBox>
          {JSON.parse(localStorage.getItem("patient")).address}
        </PaddressBox>
        <Complaints>Chief complaint</Complaints>
        <ComplaintBox
          onChange={(e) => {
            localStorage.setItem("chiefComplaint", e.target.value);
          }}
          id="Complaints"
          placeholder="Enter the chief complaint here"
        >
          {/* {localStorage.getItem("chiefComplaint")} */}
        </ComplaintBox>
        <HPITable>
          <HPITitle>HPI title</HPITitle>
          <Tabledevider></Tabledevider>
          <HPIdesc>Description</HPIdesc>
        </HPITable>
        <HPIdiv id="HPIdiv"></HPIdiv>
        <AddHPI
          onClick={(e) => {
            addHpiEntry({ title: "", des: "" });
          }}
        >
          +
        </AddHPI>
        <Note>Additional note</Note>
        <NoteBox
          onChange={(e) => {
            localStorage.setItem("additionalNotes", e.target.value);
          }}
          id="notebox"
          placeholder="Enter additional notes here"
        >
          {/* {localStorage.getItem("additionalNotes")} */}
        </NoteBox>
        <Diagnosis>Diagnosis</Diagnosis>
        <DiagnosisBox
          onChange={(e) => {
            localStorage.setItem("diagnosis", e.target.value);
          }}
          id="diagnosisbox"
          placeholder="Enter the diagnosis here"
        >
          {/* {localStorage.getItem("diagnosis")} */}
        </DiagnosisBox>
        <Tests>Medical tests</Tests>
        <TestsBox id="testbox" placeholder="Enter the tests here"></TestsBox>
        <Medicinetable>
          <MedicineName>Medicine</MedicineName>
          <MedicineTabledivider></MedicineTabledivider>
          <MedicineQuantity>Quantity</MedicineQuantity>
          <MedicineTabledivider style={{ left: "22vw" }}></MedicineTabledivider>
          <MedicineFrequency>Frequency</MedicineFrequency>
          <MedicineTabledivider style={{ left: "34vw" }}></MedicineTabledivider>
          <MedicineRoute>Route</MedicineRoute>
          <MedicineTabledivider style={{ left: "45vw" }}></MedicineTabledivider>
          <Medicineduration>Duration</Medicineduration>
          <MedicineTabledivider style={{ left: "56vw" }}></MedicineTabledivider>
          <Medicinecomment>Comment</Medicinecomment>
          <AddMedicine
            onClick={(e) => {
              addMedicineEntry({
                name: "",
                quantity: "",
                frequency: "",
                route: "",
                duration: "",
                comment: "",
              });
            }}
          >
            +
          </AddMedicine>
        </Medicinetable>
        <Medicinediv id="Medicinediv">{/*  */}</Medicinediv>
        <Tags>Tags</Tags>
        <Tagsinput
          id="tagsinput"
          placeholder="Press Enter to add tag"
          onKeyDown={(e) => e.key === "Enter" && addTag(e)}
        />
        <AddTag onClick={addTag}>+</AddTag>
        <Tagdiv id="tagdiv"></Tagdiv>
        <Allergy>Allergy</Allergy>
        <AllergyBox
          id="allergybox"
          placeholder="Enter the allergy here"
        ></AllergyBox>
        <NextFollowup>Next Followup</NextFollowup>
        <NextFollowupBox
          id="followupbox"
          placeholder="Enter the next followup date"
        ></NextFollowupBox>
        <Attachments id="Attached">Attachments</Attachments>
        <Save id="Save" onClick={savePrescriptionToLocal}>
          Save
        </Save>
        <Save
          id="showQRButton"
          style={{
            position: "absolute",
            top: "520px",
            left: "1500px",
            width: "200px",
          }}
          onClick={toggleQRCode}
        >
          Upload prescription
        </Save>
        <Save
          id="showQRButtons"
          style={{
            position: "absolute",
            top: "420px",
            left: "1500px",
            width: "200px",
          }}
          onClick={toggleQRCode}
        >
          Upload Attachments
        </Save>
        {/* {showQRCode && (
          <div
            style={{
              padding: "20px",

              top: "520px",
              left: "600px",
              backgroundColor: "#d2234e",
              zIndex: 999,
              position: "absolute",
              borderRadius: "26px",
              boxShadow: "80px 0px 80px rgba(3, 3, 3, 0.8)",
            }}
          >
            <div
              id="close"
              onClick={toggleQRCode}
              style={{
                position: "absolute",
                padding: "10px",
                paddingRight: "20px",
                paddingLeft: "20px",
                top: "-30px",
                right: "-10px",
                fontSize: "30px",
                cursor: "pointer",
                color: "#fff",
                backgroundColor: "#000000",
                borderRadius: "50%",
              }}
            >
              X
            </div>
            <QRCode
              value={prescriptionPortalLink}
              size={496}
              fgColor="#ffffff"
              bgColor="#000000"
              imageSettings={{
                src: Logoimage,
                excavate: true,
                height: 45,
                width: 45,
              }}
            />
          </div>
        )} */}
        <div id="fileList"></div>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "-30px",
                right: "-10px",
                fontSize: "30px",
                cursor: "pointer",
                color: "#fff",
                backgroundColor: "#000000",
                borderRadius: "50%",
              }}
            >
              X
            </button>

            <pre id="fileContent"></pre>
          </div>
        </div>
      </PresCard>
    </div>
  );
}

export default Prescription;
