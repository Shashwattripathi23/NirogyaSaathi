import { useState } from "react";
import Butt1 from "../images/Butt1.png";
import NewLogo from "../images/logoW.png";
import log from "../images/log.png";
import docIm from "../images/DocImage.png";
import db from "../images/home.png";
import MAC from "../images/MAC.png";
import PatS from "../images/search.png";
import Pat from "../images/edit.png";
import QRCode from "qrcode.react";
import AU from "../images/AU.png";
import Supp from "../images/Supp.png";
import ReactDOM from "react-dom";
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
import Go from "../images/Go.png";
import Vr from "../images/del.png";
import React, { useEffect } from "react";
import pdf from "../images/pdf.png";
import "./css/prescription.css";
import { ChatbotContext } from "./Chatprovider";
import { useContext } from "react";

function Newpres() {
  let Prescription = {
    name: "John Doe",
    age: 20,
    gender: "Male",
    phone: 1234567890,
    email: "abc@gmail.com",
    address: "127, 1st Cross, 1st Main, 1st Stage, 1st Phase, 1st Block",
    weight: 70,
    temperature: 98.6,
    longtermDiseases: ["Diabetes", "Hypertension"],
    allergies: ["Penicildlin"],
    chiefComplaints: "Headache",
    tags: ["Fever", "Headache"],
    historyOfPresentIllness: [
      { title: "Headache", description: "Headache for 2 days" },
      { title: "Fever", description: "Fever for 2 days" },
    ],
    medications: [
      {
        name: "Paracetamol",
        quantity: "500mg",
        frequency: "Once a day",
        route: "Oral",
        duration: "3 days",
        comments: "After food",
      },
      {
        name: "Ibuprofen",
        quantity: "400mg",
        frequency: "Twice a day",
        route: "Oral",
        duration: "3 days",
        comments: "Before food",
      },
    ],
    diagnosis: "Viral fever",
    labTests: ["CBC", "CRP"],
    followUp: "12/11/1111",
    additionalNotes: "Drink plenty of water",
    attachments: ["Prescription.pdf", "Lab Report.pdf", "X-Ray.pdf"],
  };

  let Pres = JSON.parse(localStorage.getItem("pdf"));
  console.log(Pres);

  const [medicines, setMedicines] = useState(
    Pres.prescriptions[0].medicines || []
  );
  const [medicine, setMedicine] = useState({
    name: "",
    quantity: "",
    frequency: "",
    route: "",
    duration: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleAddMedicine = () => {
    setMedicines([...medicines, medicine]);
    setMedicine({
      name: "",
      quantity: "",
      frequency: "",
      route: "",
      duration: "",
      comments: "",
    });
  };

  const handleDeleteMedicine = (index) => {
    const newMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(newMedicines);
  };

  const [ws, setWs] = useState(null);
  const [files, setFiles] = useState(
    Prescription.attachments.map((filename) => ({
      filename: filename,
      data: "",
    }))
  );

  useEffect(() => {
    const websocket = new WebSocket(
      "wss://81bd-2401-4900-8820-2c6f-74e1-bba-7a10-f4e9.ngrok-free.app"
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

  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, noteText]);
      setNoteText("");
    }
  };

  const handleDeleteNote = (index) => {
    console.log("Deleting note at index", index);
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const addFileToList = (filename, data) => {
    setFiles((prevFiles) => [...prevFiles, { filename: filename, data: data }]);
  };

  const openFileInNewTab = (data) => {
    const newWindow = window.open("", "_blank", "width=500,height=500");
    newWindow.document.write(
      `<img src="data:image/png;base64,${data}" alt="Image" style="width: 100%; height: auto;" />`
    );
  };

  const renderFileList = () => {
    return files.map((file, index) => (
      <div
        key={index}
        style={{
          cursor: "pointer",
          fontWeight: "200",
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
        className="flex flex-row justify-start"
      >
        <div className="flex flex-col justify-center items-center  ">
          <img
            onClick={() => openFileInNewTab(file.data)}
            src={pdf}
            className="h-24 mr-4"
            alt="pdf"
          />
          <h1>{file.filename}</h1>
        </div>
        <img
          src={Vr}
          className="h-8 ml- mix-blend-multiply"
          alt="delete"
          onClick={() => handleDeleteFile(index)}
        />
      </div>
    ));
  };

  const handleDeleteFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const prescriptionPortalLink =
    "https://81bd-2401-4900-8820-2c6f-74e1-bba-7a10-f4e9.ngrok-free.app/cam";

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
    qrCloseButton.style.top = "-20px";
    qrCloseButton.style.right = "0px";
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
      <QRCode value={`${prescriptionPortalLink}`} size={256} />,
      qrCodeContainer
    );

    qrcontent.appendChild(qrCloseButton);
    qrcontent.appendChild(qrCodeContainer);
    qrdiv.appendChild(qrcontent);
    document.body.appendChild(qrdiv);
  };

  const [allergy, setAllergy] = useState("");
  const [allergies, setAllergies] = useState(
    Pres.prescriptions[0].allergies || []
  );

  console.log(allergies);
  const handleAddAllergy = () => {
    if (allergy.trim() !== "") {
      setAllergies([...allergies, allergy]);
      setAllergy("");
    }
  };

  const handleDeleteAllergy = (index) => {
    const newAllergies = allergies.filter((_, i) => i !== index);
    setAllergies(newAllergies);
  };

  const [longterm, setLongterm] = useState("");
  const [longterms, setLongterms] = useState(Pres.prescriptions[0].ltd || []);

  const handleAddLongterm = () => {
    if (longterm.trim() !== "") {
      setLongterms([...longterms, longterm]);
      setLongterm("");
    }
  };

  const handleDeleteLongterm = (index) => {
    const newLongterms = longterms.filter((_, i) => i !== index);
    setLongterms(newLongterms);
  };

  const [hpiTitle, setHpiTitle] = useState("");
  const [hpiDescription, setHpiDescription] = useState("");
  const [hpiEntries, setHpiEntries] = useState(Pres.prescriptions[0].HPI || []);

  const handleAddHPI = () => {
    if (hpiTitle.trim() !== "" && hpiDescription.trim() !== "") {
      setHpiEntries([
        ...hpiEntries,
        { title: hpiTitle, description: hpiDescription },
      ]);
      setHpiTitle("");
      setHpiDescription("");
    }
  };

  const handleDeleteHPI = (index) => {
    const newHPIEntries = hpiEntries.filter((_, i) => i !== index);
    setHpiEntries(newHPIEntries);
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const { isChatCollapsed, setIsChatCollapsed } = useContext(ChatbotContext);

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
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
            style={{
              cursor: "pointer",
            }}
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
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              window.location.href = "/myacc";
            }}
            className="relative flex items-center py-4 border-b border-gray-300"
          >
            <span className="w-2 h-full"></span>
            <img src={MAC} className="h-9 p-1 rounded-md ml-6" alt="call" />
            {!isNavCollapsed && (
              <>
                <h1
                  className="ml-3"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Inter",
                    fontWeight: "500",
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
            className="relative flex items-center py-4 border-b bg-blue-100 border-gray-300"
          >
            <img
              src={PatS}
              className="bg-custom-im-dark h-9  px-2 py-2 rounded-md ml-8"
              alt="call"
            />
            <span className="bg-blue-600 w-2 h-full absolute"></span>

            {!isNavCollapsed && (
              <h1
                className="text-custom-font ml-3"
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
        } transition-all duration-300`}
      >
        <div
          style={{ zIndex: "1000" }}
          className={`box h-20  bg-custom-bg-dark flex shadow-md items-center w-full fixed top-20 ${
            isNavCollapsed ? "left-24" : "left-[calc(16.67%+0rem)]"
          }  transition-all duration-300`}
        >
          <img
            src={Pat}
            className="h-14 ml-10 border-r pr-6 py-2 border-custom-border-dark"
            alt="db"
          />
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "600",
              fontFamily: "Inter",
            }}
            className="text-custom-im-dark ml-10"
          >
            Create New Prescription
          </h2>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "Inter",
              cursor: "pointer",
              marginLeft: isNavCollapsed ? "50%" : "40%",
            }}
            onClick={() => {
              localStorage.setItem("search", Pres.NSID);
              window.location.href = "/res";
            }}
            className=" right-0 flex items-center bg-custom-butt text-white px-6 py-2 rounded-full"
          >
            <h2>View prescriptions</h2>
            <img
              src={Go}
              className="h-10 ml-10 bg-white px-3 py-2 rounded-full"
              alt="db"
            />
          </div>
        </div>

        <div
          style={{ zIndex: "1000", height: "auto" }}
          className={`box   bg-white flex flex-col shadow-lg items-start  mt-32 ${
            isNavCollapsed ? "ml-48 , w-4/5" : "ml-24 , w-3/4"
          }  transition-all duration-300`}
        >
          <div className="flex flex-row items-center justify-between w-full border-b-4 h-36">
            <div className="flex flex-col items-start justify-center w-1/2 h-36">
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-custom-im-dark ml-10 pb-5"
              >
                Pres Id:
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    fontFamily: "Inter",
                  }}
                  className="text-custom-im-dark ml-3"
                >
                  {Pres.prescriptions[0].id}
                </span>
              </h1>
              <h1
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#454547",
                }}
                className=" ml-10"
              >
                Date: {Pres.prescriptions[0].visit}
              </h1>
            </div>
            <div className="pr-10">
              <h1
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-custom-im-dark ml-10 pb-5"
              >
                NSID:
                <span
                  style={{
                    fontSize: "25px",
                    fontWeight: "800",
                    fontFamily: "Inter",
                  }}
                  className="text-custom-im-dark ml-3"
                >
                  {Pres.NSID}
                </span>
              </h1>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#F8FDFF" }}
            className="flex flex-row items-center justify-between w-full  h-auto "
          >
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "600",
                fontFamily: "Inter",
                color: "#007FA8",
              }}
              className=" ml-10 py-5"
            >
              Patient details
            </h1>
          </div>
          <div className="flex flex-row items-center justify-centre w-full  h-auto pt-6 pb-4 ">
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-64 text-lg"
            >
              Name:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 text-lg"
              >
                {Pres.name}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-64 text-lg"
            >
              Gender:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 text-lg"
              >
                {Pres.gender}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-24 text-lg"
            >
              Age:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 text-lg"
              >
                {Pres.age} Years
              </span>
            </h1>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            className="flex flex-row items-center justify-between w-full  h-auto py-4 "
          >
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-24 text-lg"
            >
              Phone Number
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 text-lg"
              >
                {Pres.phone}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-24 text-lg"
            >
              Email:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 text-lg"
              >
                {Pres.email}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-24 text-lg"
            >
              Aadhar Number:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 text-lg"
              >
                {Pres.adhar}
              </span>
            </h1>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            className="flex flex-row items-center justify-between w-full  h-auto py-4 border-b-2 "
          >
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-24 text-lg"
            >
              Address
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 text-lg"
              >
                {Pres.address}
              </span>
            </h1>
          </div>
          <div className="flex flex-row items-center justify-centre w-full space-x-80  h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Weight
              </h1>
              <div>
                <input
                  type="text"
                  placeholder="Enter weight"
                  value={Pres.weight}
                  readOnly
                  className="border-2 border-custom-border-dark rounded-md cursor-not-allowed mt-10 h-14 w-96 pl-6"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-20">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                  marginLeft: "2.2rem",
                }}
                className="text-lg"
              >
                Temperature
              </h1>
              <div>
                <input
                  type="text"
                  placeholder="Enter temperature"
                  value={Pres.prescriptions[0].temperature}
                  style={{ marginLeft: "2.2rem" }}
                  readOnly
                  className="border-2 border-custom-border-dark rounded-md cursor-not-allowed mt-10 h-14 w-96 pl-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row  w-full justify-start  h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6 mr-10 rounded-lg">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Longterm Diseases
              </h1>

              <div
                id="diseaseTagss"
                style={{
                  //   overflowX: "scroll",
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  display: "flex",
                }}
                className="flex flex-row items-center mt-4 h-20 flex-wrap w-96"
              >
                {longterms.map((tag, index) => (
                  <h1
                    key={index}
                    // onClick={() => handleDeleteLongterm(index)}
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter",
                      cursor: "pointer",
                      display: "inline-block",
                      backgroundColor: "#0083AC",
                    }}
                    className="text-white  px-4 rounded-md ml-4 shadow-lg text-lg"
                  >
                    {tag}
                    {/* <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Inter",
                        cursor: "pointer",
                      }}
                      className="absolute text-custom-butt bg-white px-1 -mt-2 rounded-full ml-2 shadow-xl border-2 "
                    >X</span> */}
                  </h1>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-start ml-80 rounded-lg">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Allergies
              </h1>

              <div
                id="allergiesTagss"
                style={{
                  //   overflowX: "scroll",
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  display: "flex",
                }}
                className="flex flex-row items-center mt-4 h-20 flex-wrap w-96"
              >
                {allergies.map((tag, index) => (
                  <h1
                    key={index}
                    // onClick={() => handleDeleteAllergy(index)}
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter",
                      cursor: "pointer",
                      backgroundColor: "#0083AC",
                    }}
                    className="text-white  px-4 rounded-md ml-4 shadow-lg text-lg"
                  >
                    {tag}
                  </h1>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-centre w-full space-x-64  h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6 w-full">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Chief Complaints
              </h1>
              <div className="w-full pr-10">
                <textarea
                  type="text"
                  placeholder="Enter complaints"
                  readOnly
                  value={Pres.prescriptions[0].complaint}
                  className="border-2 border-custom-border-dark text-lg rounded-md cursor-not-allowed mt-10 h-36 w-full pl-6 pt-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full space-x-64 h-auto pt-6 pb-4">
            <div className="flex flex-col justify-start ml-6 w-full">
              <div className="flex flex-row items-center justify-between w-full h-auto">
                <h1
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    color: "#979797",
                  }}
                  className="text-lg"
                >
                  History of Present Illness
                </h1>
                <h1
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    backgroundColor: "#F2F3FE",
                    cursor: "not-allowed",
                    opacity: "0.4",
                  }}
                  className="text-custom-blue-dark mr-10 rounded-md px-4 border-2 text-lg border-custom-blue-dark"
                  onClick={handleAddHPI}
                >
                  Add HPI
                </h1>
              </div>

              <div className="w-full pr-10 mt-4">
                {hpiEntries.map((entry, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col w-full h-auto py-2"
                  >
                    {/* <img
                      src={Vr}
                      className="h-10 w-10 absolute top-5 right-2 cursor-pointer mix-blend-multiply"
                      alt="db"
                      onClick={() => handleDeleteHPI(index)}
                    /> */}
                    <div className="border-2 border-custom-border-dark rounded-md flex flex-col p-4 pt-4">
                      <h1 className="text-lg font-bold mb-3 border-b-0">
                        {entry.title}
                      </h1>
                      <p className="text-base mt-2">{entry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-centre w-full space-x-80  h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Diagnosis
              </h1>
              <div>
                <input
                  readOnly
                  value={Pres.prescriptions[0].diagnosis}
                  type="text"
                  placeholder="Enter diagnosis"
                  className="border-2 border-custom-border-dark cursor-not-allowed  rounded-md mt-10 h-14 w-96 pl-6"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-20">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Medical tests
              </h1>
              <div>
                <input
                  type="text"
                  readOnly
                  value={Pres.prescriptions[0].tests}
                  placeholder="Enter recommended tests"
                  className="border-2 border-custom-border-dark cursor-not-allowed rounded-md mt-10 h-14 w-96 pl-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-centre w-full space-x-64  h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6 w-full">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Additional notes
              </h1>
              <div className="w-full pr-10">
                <textarea
                  readOnly
                  value={Pres.prescriptions[0].notes}
                  type="text"
                  placeholder="Enter additional notes"
                  className="border-2 border-custom-border-dark text-lg cursor-not-allowed rounded-md mt-10 h-24 w-full pl-6 pt-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-centre w-full space-x-80  h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Additional tags
              </h1>
              <div>
                <input
                  type="text"
                  readOnly
                  value={Pres.prescriptions[0].additionaltags}
                  placeholder="Enter tags"
                  className="border-2 border-custom-border-dark cursor-not-allowed rounded-md mt-10 h-14 w-96 pl-6"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-20">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Next follow-up
              </h1>
              <div>
                <input
                  type="text"
                  readOnly
                  value={Pres.prescriptions[0].nextvisit}
                  placeholder="Enter recommended tests"
                  className="border-2 border-custom-border-dark cursor-not-allowed rounded-md mt-10 h-14 w-96 pl-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-centre w-full space-x-64  h-auto pt-6 pb-24 border-b-2">
            <div className="flex flex-col justify-start ml-6 w-full">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="text-lg"
              >
                Upload documents (If any)
              </h1>
              <div className="w-full pr-10">
                <div
                  style={{ backgroundColor: "#F2F3FE" }}
                  className="border-dashed border-2 border-custom-blue-dark  text-lg rounded-md mt-10 h-48 w-full pl-6 pt-6"
                >
                  {files.length === 0 ? (
                    <h1
                      onClick={toggleQRCode}
                      style={{
                        fontSize: "30px",
                        fontWeight: "500",
                        fontFamily: "Inter",

                        // color: "#979797",
                      }}
                      className="text-custom-blue-dark ml-96 pl-24 mt-14"
                    >
                      Click here to generate QR
                    </h1>
                  ) : (
                    <div id="Attached" className="parent-div flex flex-row">
                      {renderFileList()}
                      <h1
                        onClick={toggleQRCode}
                        style={{
                          fontSize: "30px",
                          fontWeight: "500",
                          fontFamily: "Inter",
                          color: "white",
                          // color: "#979797",
                        }}
                        className="bg-custom-blue-dark cursor-pointer px-4 mt-8 h-14 ml-5 pt-3 rounded-full"
                      >
                        +
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full space-y-5 h-auto pt-6 pb-24 border-b-2">
            <div className="flex flex-row items-center justify-between w-full h-auto">
              <h1
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "black",
                }}
                className="ml-10 py-5 text-2xl"
              >
                Recommended Medicines
              </h1>
              <h1
                style={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  backgroundColor: "#F2F3FE",
                  opacity: "0.4",
                }}
                className="mr-12 py-2 px-4 rounded-lg text-custom-im-dark border-2 border-custom-im-dark cursor-not-allowed"
                // onClick={handleAddMedicine}
              >
                Add Medicine
              </h1>
            </div>
            <div
              style={{ width: isNavCollapsed ? "93%" : "94%" }}
              className="flex flex-row items-center ml-10 justify-between space-x-1 m-auto border- mx-10"
            >
              <div
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "white",
                  backgroundColor: "#0083AC",
                  width: "14.28%",
                }}
                className="ml-0 py-3   flex flex-row justify-center items-center  rounded-lg text-lg"
              >
                Medicine
              </div>
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "white",
                  backgroundColor: "#0083AC",
                  width: "14.28%",
                }}
                className="ml-10 py-3  rounded-lg text-lg flex flex-row justify-center"
              >
                Quantity
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "white",
                  backgroundColor: "#0083AC",
                  width: "14.28%",
                }}
                className="ml-10 py-3  rounded-lg text-lg flex flex-row justify-center"
              >
                Frequency
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "white",
                  backgroundColor: "#0083AC",
                  width: "14.28%",
                }}
                className="ml-10 py-3  rounded-lg text-lg flex flex-row justify-center"
              >
                Route
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "white",
                  backgroundColor: "#0083AC",
                  width: "14.28%",
                }}
                className="ml-10 py-3  rounded-lg text-lg flex flex-row justify-center"
              >
                Duration
              </h1>
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "white",
                  backgroundColor: "#0083AC",
                  width: "28.56%",
                }}
                className="ml-10 py-3  rounded-lg text-lg flex flex-row justify-center"
              >
                Comments/Instructions
              </h1>
            </div>
            {medicines.map((med, index) => (
              <div
                key={index}
                style={{ width: isNavCollapsed ? "93%" : "94%" }}
                className="flex flex-row items-center ml-10 justify-start  space-x- m-auto"
              >
                <div
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    color: "black",
                    backgroundColor: "#F2F3FE",
                    width: "14.28%",
                    overflowX: "hidden",
                  }}
                  className="ml-0 py-3 h-14 px-2 rounded-lg text-base"
                >
                  {med.name}
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    color: "black",
                    backgroundColor: "#F2F3FE",
                    width: "14.28%",
                    overflowX: "hidden",
                  }}
                  className="ml-1 py-3 h-14 px-2 rounded-lg"
                >
                  {med.quantity}
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    // color: "#F2F3FE",
                    backgroundColor: "#F2F3FE",
                    width: "14.28%",
                    overflowX: "hidden",
                  }}
                  className="ml-1 py-3 h-14 px-2 rounded-lg"
                >
                  {med.frequency}
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    // color: "#F2F3FE",
                    backgroundColor: "#F2F3FE",
                    width: "14.28%",
                    overflowX: "hidden",
                  }}
                  className="ml-1 py-3 h-14 px-2 rounded-lg"
                >
                  {med.route}
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    // color: "#F2F3FE",
                    backgroundColor: "#F2F3FE",
                    width: "14.28%",
                    overflowX: "hidden",
                  }}
                  className="ml-1 py-3 h-14 px-2 rounded-lg"
                >
                  {med.duration}
                </div>
                <div
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    // color: "#F2F3FE",
                    backgroundColor: "#F2F3FE",
                    width: "28.56%",
                    overflowX: "hidden",
                  }}
                  className="ml-1 py-3 px-2 h-14 rounded-lg"
                >
                  {med.notes}
                </div>
                {/* <img
                  onClick={() => handleDeleteMedicine(index)}
                  src={Vr}
                  className="h-10 ml-1 bg-white px-1 py-0 rounded-full"
                  alt="db"
                /> */}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-centre w-full h-auto pt-6 pb-4">
            <div className="flex flex-row items-center justify-between w-full h-auto">
              <h1
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "black",
                }}
                className="ml-10 py-5 text-2xl"
              >
                Add notes
              </h1>
              <h1
                style={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  backgroundColor: "#F2F3FE",
                  opacity: "1",
                }}
                className="mr-10 py-2 px-4 rounded-lg text-custom-im-dark border-2 border-custom-im-dark cursor-pointer"
                onClick={handleAddNote}
              >
                Add
              </h1>
            </div>
            <div style={{ width: "95%" }} className="mt-4">
              {notes.map((note, index) => (
                <div
                  key={index}
                  className="relative border-2 flex flex-row justify-between border-custom-border-dark text-lg rounded-md p-4 my-4"
                >
                  <p
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter",
                      overflowWrap: "anywhere",
                    }}
                    className="text-base mt-2"
                  >
                    {note}
                  </p>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      fontFamily: "Inter",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteNote(index)}
                    className=" text-custom-butt bg-white px-3 h-10 py-1  rounded-full ml-2 shadow-sm border-2 "
                  >
                    X
                  </span>
                </div>
              ))}
            </div>
            <div style={{ width: "95%" }} className="border-0 h-auto pb-0">
              <textarea
                type="text"
                placeholder="Enter notes"
                className="border-2 border-custom-border-dark text-lg rounded-md mt-0 h-20 w-full pl-6 pt-6"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between w-full  h-auto pt-6 pb-4 ">
            <div
              style={{ opacity: "0.0" }}
              className="flex flex-row  items-center ml-6 space-x-4"
            >
              <input
                className="border-2 border-custom-im-dark h-6 w-6 rounded-md text-custom-im-dark focus:ring-2 focus:ring-custom-im-dark transition-all duration-200 ease-in-out"
                type="checkbox"
              />
              <h1 className="text-lg font-medium text-gray-800">
                Send report to patient's registered mobile number
              </h1>
            </div>
            <div
              style={{
                fontWeight: "500",
                fontFamily: "Inter",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/dashboard";
              }}
              className="
            bg-custom-butt mr-10 px-10 py-2 shadow-xl text-lg  rounded-lg "
            >
              Save changes
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newpres;
