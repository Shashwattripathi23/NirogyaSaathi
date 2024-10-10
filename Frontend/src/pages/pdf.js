import React, { useState } from "react";
import styled from "styled-components";
import Logoimage from "../images/logoIm.png";
import Logotext from "../images/logoText.png";
import Docsign from "../images/Docsign.png";
import Docimage from "../images/DocImage.png";
import Rxsign from "../images/RXicon.png";
import "./css/print.css";
import { useRef } from "react";

import { ReactToPrint } from "react-to-print";

function Pdf() {
  const componentRef = useRef();
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
    @media print {
      display: none;
    }
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

  const Page = styled.div`
    position: absolute;
    top: 200px;
    left: 15vw;
    width: 70vw;

    border-radius: 26px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);

    height: auto;
    min-height: 1600px;

    background-color: rgba(230, 228, 228, 0.31);
    @media print {
      position: relative;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background-color: #ffffff;
      min-height: 1600px;
    }
  `;

  const DocsignImage = styled.img`
    position: absolute;
    mix-blend-mode: multiply;
    width: 170px;
    height: 180px;
    left: 43%;
    top: 50px;
  `;

  const Clinicdiv = styled.div`
    position: absolute;
    top: 10px;
    left: 50px;
    width: 250px;
    height: 210px;
    background-color: transparent;
  `;

  const Docdiv = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 250px;
    height: 210px;
    background-color: transparent;
    @media print {
      font-size:larger;
  `;

  const Patientnamediv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 300px;
    left: 30px;
    width: 240px;
    height: 30px;
    background-color: transparent;
  `;
  const Patientagediv = styled.div`
    position: absolute;
    top: 300px;
    left: 300px;
    width: 140px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const Patientgenderdiv = styled.div`
    position: absolute;
    top: 300px;
    left: 480px;
    width: 150px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const Nsiddiv = styled.div`
    position: absolute;
    top: 300px;
    right: 50px;
    width: 260px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;
  const Phonediv = styled.div`
    position: absolute;
    top: 350px;
    left: 30px;
    width: 280px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const Timedatediv = styled.div`
    position: absolute;
    top: 350px;
    right: 10px;
    width: 300px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const Line = styled.div`
    position: absolute;
    top: 405px;
    left: 2.5%;
    width: 95%;
    height: 1px;
    background-color: #000000;
  `;
  const Complaindiv = styled.div`
    position: absolute;
    top: 430px;
    left: 30px;
    width: 680px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const Diagnosisdiv = styled.div`
    position: absolute;
    top: 480px;
    left: 30px;
    width: 680px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;
  const Notediv = styled.div`
    position: absolute;
    top: 530px;
    left: 30px;
    width: 680px;
    height: 80px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const Testdiv = styled.div`
    position: absolute;
    top: 430px;
    right: 10px;
    width: 380px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const Followupdiv = styled.div`
    position: absolute;
    top: 480px;
    right: 10px;
    width: 380px;
    height: 30px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
  `;

  const RxsignImage = styled.img`
    position: absolute;
    mix-blend-mode: multiply;
    width: 30px;

    height: 30px;
    left: 30px;
    top: 620px;
  `;

  const Medicineheading = styled.h1`
    position: absolute;
    top: 640px;
    left: 150px;

    font-size: 20px;
    font-weight: 700;
    color: #222222;
    font-family: "Roboto";
    line-height: 21px;
  `;

  const Quantityheading = styled.h1`
    position: absolute;
    top: 640px;
    left: 320px;
    font-size: 20px;
    font-weight: 700;
    color: #222222;
    font-family: "Roboto";
    line-height: 21px;
  `;

  const Frequencyheading = styled.h1`
    position: absolute;
    top: 640px;
    left: 490px;
    font-size: 20px;
    font-weight: 700;
    color: #222222;
    font-family: "Roboto";
    line-height: 21px;
  `;

  const Routeheading = styled.h1`
    position: absolute;
    top: 640px;
    left: 660px;
    font-size: 20px;
    font-weight: 700;
    color: #222222;
    font-family: "Roboto";
    line-height: 21px;
  `;

  const Timingsheading = styled.h1`
    position: absolute;
    top: 640px;
    left: 800px;
    font-size: 20px;
    font-weight: 700;
    color: #222222;
    font-family: "Roboto";
    line-height: 21px;
  `;

  const Nodeheading = styled.h1`
    position: absolute;
    top: 640px;
    left: 1050px;
    font-size: 20px;
    font-weight: 700;
    color: #222222;
    font-family: "Roboto";
    line-height: 21px;
  `;

  const Medicineentry = styled.div`
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    background-color: transparent;
  `;

  const Medicinediv = styled.div`
    position: relative;
    top: 700px;
    left: 50px;
    width: 92%;
    height: auto;

    background-color: transparent;
  `;

  const MedSno = styled.h1`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #030303;
    font-family: "Roboto";
    line-height: 21px;
  `;

  const MedName = styled.h1`
    position: absolute;
    top: 10px;
    left: 100px;
    font-size: 18px;
    font-weight: 400;
    max-width: 200px;
    color: #030303;
    font-family: "Roboto";
    line-height: 21px;
  `;
  const MedQuantity = styled.h1`
    position: absolute;
    top: 10px;
    left: 280px;
    font-size: 18px;
    font-weight: 400;
    max-width: 200px;

    color: #030303;
    font-family: "Roboto";
    line-height: 21px;
  `;
  const MedFrequency = styled.h1`
    position: absolute;
    top: 10px;
    left: 450px;
    font-size: 18px;
    font-weight: 400;
    max-width: 200px;

    color: #030303;
    font-family: "Roboto";
    line-height: 21px;
  `;
  const MedRoute = styled.h1`
    position: absolute;
    top: 10px;
    left: 620px;
    font-size: 18px;
    font-weight: 400;
    max-width: 200px;

    color: #030303;
    font-family: "Roboto";
    line-height: 21px;
  `;
  const MedTimings = styled.h1`
    position: absolute;
    top: 10px;
    left: 770px;
    font-size: 18px;
    font-weight: 400;
    color: #030303;
    max-width: 200px;
    font-family: "Roboto";
    line-height: 21px;
  `;
  const MedNote = styled.h1`
    position: absolute;
    top: 10px;
    left: 950px;
    width: 200px;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: 400;
    color: #030303;
    background-color: transparent;
    font-family: "Roboto";
    word-wrap: break-word; /* Allow long words to break and wrap to the next line */
    word-break: break-word; /* Break long words and wrap to the next line */
  `;

  const Medline = styled.div`
    position: absolute;
    bottom: 10px;
    left: 5%;
    width: 90%;
    height: 1px;
    background-color: #000000;
  `;

  const Credits = styled.div`
    position: absolute;
    bottom: 10px;
    right: 50px;
    font-size: 16px;
    font-weight: 400;
    color: #030303;
    font-family: "Roboto";
    line-height: 21px;
    background-color: transparent;
  `;

  const FooterImage = styled.img`
    position: relative;
    width: 30px;
    height: 30px;
    bottom: -25px;
    left: -35px;
    mix-blend-mode: multiply;
    background-color: #ffffff;
  `;
  const Footertext = styled.img`
    position: relative;
    width: 130px;
    height: 30px;
    bottom: 0px;
    left: 0px;
    mix-blend-mode: multiply;

    background-color: #ffffff;
  `;
  const ClinincName = styled.h1`
    top: 0px;
    left: 13vw;
    font-size: 26px;
    font-weight: 500;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media print {
      font-size: 25px;
    }
  `;

  const ClinicAddress = styled.h1`
    top: 40px;
    left: 13vw;
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media print {
      font-size: 18px;
    }
  `;

  const ClinicContact = styled.h1`
    top: 70px;
    left: 13vw;
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media print {
      font-size: 18px;
    }
  `;

  const DocName = styled.h1`
    top: 0px;
    right: 9vw;
    font-size: 26px;
    font-weight: 500;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media print {
      font-size: 25px;
    }
  `;

  const DocQual = styled.h1`
    top: 40px;
    right: 12vw;
    font-size: 18px;
    font-weight: 400;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media print {
      font-size: 18px;
    }
  `;

  const DocSpecial = styled.h1`
    top: 65px;
    right: 10vw;
    font-size: 18px;
    font-weight: 400;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media print {
      font-size: 18px;
    }
  `;

  const DocId = styled.h1`
    top: 90px;
    right: 10vw;
    font-size: 16px;
    font-weight: 400;
    color: #000000;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media print {
      font-size: 16px;
    }
  `;

  const PatientName = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;

  const PatientNameValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;

  const PatientAge = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;
  const PatientAgeValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;
  const PatientGender = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;

  const PatientGenderValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;

  const Nsid = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;
  const NsidValue = styled.h1`
    font-size: 17px;

    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;

  const Phone = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;

  const PhoneValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;
  const TimeDate = styled.h1`
    font-size: 17px;
    font-weight: 600;

    color: #000000;
    margin-right: 10px;
  `;
  const TimeDateValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;

    margin-right: 10px;
  `;
  const Complain = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;
  const ComplainValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;
  const Diagnosis = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;

  const DiagnosisValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;
  const Note = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;

  const NoteValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;
  const Test = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;
  const TestValue = styled.h1`
    font-size: 17px;
    font-weight: 400;
    color: #000000;
    margin-right: 10px;
  `;
  const Followup = styled.h1`
    font-size: 17px;
    font-weight: 600;
    color: #000000;
    margin-right: 10px;
  `;
  const FollowupValue = styled.h1`
    font-size: 17px;

    font-weight: 400;

    color: #000000;
    margin-right: 10px;
  `;

  const Print = styled.button`
    position: absolute;
    top: 1700px;
    bottom: 4vw;
    left: 30vw;
    width: 120px;
    height: 40px;
    background-color: #d2234e;
    border: none;
    border-radius: 26px;
    font-size: 16px;
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 50px;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
  `;

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const formattedTime = `${currentDate.getHours()}:${(
    "0" + currentDate.getMinutes()
  ).slice(-2)}`;

  const presdata = localStorage.getItem("prescriptiondata");
  const presdataobj = JSON.parse(presdata);
  console.log(presdataobj);

  const medicinedata = presdataobj.medicinedata;
  console.log(medicinedata);

  console.log(localStorage.getItem("prescriptiondataapi"));

  const [medicines, setMedicines] = useState([
    {
      medicineName: "",
      quantity: "",
      frequency: "",
      route: "",
      timings: "",
      notes: "",
    },
  ]);

  const MedicineItem = styled.div`
    top: ${(props) => props.top}px;
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    background-color: transparent;
  `;

  return (
    <div style={{ height: "200vh" }}>
      <ReactToPrint
        trigger={() => (
          <Print style={{ position: "absolute", top: "190vh", left: "45vw" }}>
            Print
          </Print>
        )}
        content={() => componentRef.current}
      />
      ;
      <NavBar>
        <LogoImage src={Logoimage} alt="website logo" />
        <LogoText src={Logotext} alt="website logo" />
        <HomeButt>Home</HomeButt>
        <SupportButt>Support</SupportButt>
        <ScheduleButt>Schedule</ScheduleButt>
      </NavBar>
      <Page ref={componentRef}>
        <DocsignImage src={Docsign} alt="Docsign" />
        <Clinicdiv>
          <ClinincName> Clinic Name</ClinincName>
          <ClinicAddress> Clinic Address</ClinicAddress>
          <ClinicContact> Clinic Contact</ClinicContact>
        </Clinicdiv>
        <Docdiv>
          <DocName>
            {" "}
            Dr.{" "}
            {JSON.parse(localStorage.getItem("Doctor")).firstName +
              " " +
              JSON.parse(localStorage.getItem("Doctor")).lastName}
          </DocName>
          <DocQual>
            {" "}
            {JSON.parse(localStorage.getItem("Doctor")).qualification}
          </DocQual>
          <DocSpecial>
            {JSON.parse(localStorage.getItem("Doctor")).specialization}
          </DocSpecial>
          <DocId>
            {" "}
            Doctor ID:{" "}
            {JSON.parse(localStorage.getItem("Doctor")).registrationNo}
          </DocId>
        </Docdiv>
        <Patientnamediv>
          <PatientName>Name:</PatientName>
          <PatientNameValue>
            {presdataobj.firstName} {presdataobj.lastName}
          </PatientNameValue>
        </Patientnamediv>
        <Patientagediv>
          <PatientAge>Age:</PatientAge>
          <PatientAgeValue> {presdataobj.Age}</PatientAgeValue>
        </Patientagediv>
        <Patientgenderdiv>
          <PatientGender>Gender:</PatientGender>
          <PatientGenderValue>{presdataobj.gender} </PatientGenderValue>
        </Patientgenderdiv>
        <Nsiddiv>
          <Nsid>NSID:</Nsid>
          <NsidValue> {presdataobj.nsid} </NsidValue>
        </Nsiddiv>
        <Phonediv>
          <Phone>Phone:</Phone>
          <PhoneValue> {presdataobj.contactNo} </PhoneValue>
        </Phonediv>
        <Timedatediv>
          <TimeDate>Time & Date:</TimeDate>
          <TimeDateValue>
            {formattedDate} {formattedTime}
          </TimeDateValue>
        </Timedatediv>
        <Line> </Line>
        <Complaindiv>
          <Complain>Complain:</Complain>
          <ComplainValue>{presdataobj.chiefComplaint} </ComplainValue>
        </Complaindiv>
        <Diagnosisdiv>
          <Diagnosis>Diagnosis:</Diagnosis>
          <DiagnosisValue> {presdataobj.diagnosis} </DiagnosisValue>
        </Diagnosisdiv>
        <Notediv>
          <Note>Note:</Note>
          <NoteValue> {presdataobj.additionalNotes} </NoteValue>
        </Notediv>
        <Testdiv>
          <Test>Test:</Test>
          <TestValue> {presdataobj.medicalTests} </TestValue>
        </Testdiv>
        <Followupdiv>
          <Followup>Followup:</Followup>
          <FollowupValue>{presdataobj.nextFollowup} </FollowupValue>
        </Followupdiv>
        <RxsignImage src={Rxsign} alt="Rxsign" />
        <Medicineheading>Medicine</Medicineheading>
        <Quantityheading>Quantity</Quantityheading>
        <Frequencyheading>Frequency</Frequencyheading>
        <Routeheading>Route</Routeheading>
        <Timingsheading>Timings</Timingsheading>
        <Nodeheading>Notes</Nodeheading>
        <Medicinediv>
          {presdataobj.medicinedata.map((medicine, index) => (
            <MedicineItem key={index} top={index * 100}>
              <MedSno>{index + 1}</MedSno>
              <MedName>{medicine.name}</MedName>
              <MedQuantity>{medicine.quantity}</MedQuantity>
              <MedFrequency>{medicine.frequency}</MedFrequency>
              <MedRoute>{medicine.route}</MedRoute>
              <MedTimings>{medicine.duration}</MedTimings>
              <MedNote>{medicine.comment}</MedNote>
              <Medline></Medline>
            </MedicineItem>
          ))}
        </Medicinediv>

        <Credits>
          <h3
            style={{
              position: "absolute",
              top: "30px",
              right: "160px",
              width: "100px",
            }}
          >
            Powered by
          </h3>
          <FooterImage src={Logoimage} alt="website logo" />
          <Footertext src={Logotext} alt="website logo" />
        </Credits>
      </Page>
    </div>
  );
}

export default Pdf;
