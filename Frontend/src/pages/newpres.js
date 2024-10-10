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
import Chatbot from "./Chatbot";
import { type } from "@testing-library/user-event/dist/type";

function Newpres() {
  const Patdetails = {
    Name: "Baba bro",
    age: "20",
    gender: "Male",
    weight: "60",
    temperature: "98",
    phone: "1234567890",
    email: "Bababroq@gmail.com",
    Aadhar: "1234567890",
    address: "127, 1st Cross, 1st Main, 1st Stage, 1st Phase, 1st Block",
    nsid: "123456",
  };

  const Patient = JSON.parse(localStorage.getItem("pdf"));
  console.log(Patient);

  const [medicines, setMedicines] = useState([]);
  const [medicine, setMedicine] = useState({
    name: "",
    quantity: "",
    frequency: "",
    route: "",
    duration: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleAddMedicine = () => {
    if (medicine.name.trim() === "") {
      return;
    }

    setMedicines([...medicines, medicine]);
    setMedicine({
      name: "",
      quantity: "",
      frequency: "",
      route: "",
      duration: "",
      notes: "",
    });
  };

  const handleDeleteMedicine = (index) => {
    const newMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(newMedicines);
  };

  const [ws, setWs] = useState(null);
  const [files, setFiles] = useState([]);

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

  const addFileToList = (filename, data) => {
    setFiles((prevFiles) => [...prevFiles, { filename: filename, data: data }]);
  };

  const openFileInNewTab = (data) => {
    const newWindow = window.open("", "_blank", "width=500,height=500");
    newWindow.document.write(
      `<img src="data:image/png;base64,${data}" alt="Image" style="width: 100%; height: auto;" />`
    );
  };

  const { prescriptionInput, setPrescriptionInput } =
    useContext(ChatbotContext);

  const [temperature, setTemperature] = useState("");
  const [weight, setWeight] = useState("");

  const [diagnosis, setDiagnosis] = useState("");
  const [tests, setTests] = useState("");
  const [addnote, setAddnotes] = useState("");
  const [addtag, setTags] = useState("");
  const [nextdate, setFollowup] = useState("");

  useEffect(() => {
    setPrescriptionInput({
      ...prescriptionInput,
      age: Patient.age,
      gender: Patient.gender,
      weight: Patient.weight,
      temperature: temperature,
    });
  }, []);

  const handlePrescriptionInputChange = (e) => {
    const { name, value } = e.target;
    setPrescriptionInput({ ...prescriptionInput, [name]: value });
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
    qrdiv.style.width = "100%";
    qrdiv.style.height = "100%";
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
  const [allergies, setAllergies] = useState([]);

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
  const [longterms, setLongterms] = useState([]);

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
  const [hpiEntries, setHpiEntries] = useState([]);

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
          <div className="relative flex items-center py-4 border-b border-gray-300">
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
          <div className="relative flex items-center py-4 border-b border-gray-300">
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
        className={`absolute bg-custom-bg-dark pb-4 top-20 ${
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
          style={{ zIndex: "1000", height: "auto" }}
          className={`box   bg-white flex flex-col shadow-lg items-start auto mx-5  mt-32 ${
            isNavCollapsed ? "" : "xl:mr-80 "
          }  transition-all duration-300`}
        >
          <div className="flex flex-row items-center justify-between w-full border-b-4 h-36">
            <div className="flex flex-col items-start justify-center w-1/2 h-36">
              <h1
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-custom-im-dark ml-10 pb-5 md:text-lg xl:text-2xl"
              >
                Pres Id:
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "Inter",
                  }}
                  className="text-custom-im-dark ml-3 md:text-lg xl:text-2xl"
                >
                  123456
                </span>
              </h1>
              <h1
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#454547",
                }}
                className=" ml-10 md:text-base xl:text-lg"
              >
                Date:
                {new Date().toLocaleDateString()}
              </h1>
            </div>
            <div className="pr-10">
              <h1
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className="text-custom-im-dark ml-10 pb-5 md:text-lg xl:text-2xl"
              >
                NSID:
                <span
                  style={{
                    fontWeight: "800",
                    fontFamily: "Inter",
                  }}
                  className="text-custom-im-dark ml-3 md:text-lg xl:text-2xl"
                >
                  {Patient.NSID}
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
                fontWeight: "600",
                fontFamily: "Inter",
                color: "#007FA8",
              }}
              className=" ml-10 py-5 md:text-xl xl:text-3xl"
            >
              Patient details
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between border-0 w-full  h-auto pt-6 pb-4 ">
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 xl:pr-64 md:text-sm xl:text-2xl"
            >
              Name:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 md:text-sm xl:text-2xl"
              >
                {Patient.name}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" xl:ml-10 pb-5 xl:pr-64 md:text-sm xl:text-2xl"
            >
              Gender:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 md:text-sm xl:text-2xl"
              >
                {Patient.gender}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 pr-24 md:text-sm xl:text-2xl"
            >
              Age:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 md:text-sm xl:text-2xl"
              >
                {Patient.age} Years
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
              className=" ml-10 pb-5 xl:pr-24 md:text-sm xl:text-2xl"
            >
              Phone:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 md:text-sm xl:text-2xl"
              >
                {Patient.phone}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" ml-10 pb-5 xl:pr-24 md:text-sm xl:text-2xl"
            >
              Email:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 md:text-sm xl:text-2xl"
              >
                {Patient.email}
              </span>
            </h1>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "Inter",
              }}
              className=" xl:ml-10 pb-5 xl:pr-24 md:text-sm xl:text-2xl"
            >
              Aadhar:
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" xl: md:pr-5 lg:pr-0 ml-3 md:text-sm xl:text-2xl"
              >
                {Patient.adhar}
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
              className=" ml-10 pb-5 pr-24 md:text-sm xl:text-2xl"
            >
              Address
              <span
                style={{
                  fontWeight: "600",
                  fontFamily: "Inter",
                }}
                className=" ml-3 md:text-sm xl:text-2xl"
              >
                {Patient.address}
              </span>
            </h1>
          </div>
          <div className="flex flex-row items-center justify-between w-full md:space-x-44 xl:pr-16   h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6 w-2/5">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="md:text-base xl:text-2xl"
              >
                Weight
              </h1>
              <div>
                <input
                  type="text"
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 xl:w-full md:h-8 md:w-40  xl:pl-6 md:pl-1 md:text-sm xl:text-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start w-2/5 ">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                  marginLeft: "2.2rem",
                }}
                className="md:text-base xl:text-2xl"
              >
                Temperature
              </h1>
              <div>
                <input
                  type="text"
                  onChange={(e) => setTemperature(e.target.value)}
                  placeholder="Enter temperature"
                  style={{ marginLeft: "2.2rem" }}
                  className="border-2 border-custom-border-dark rounded-md mt-10 xl:h-14 xl:w-full xl:pl-6 md:h-8 md:w-40 md:pl-1 md:text-sm xl:text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between  h-auto pt-6 pb-4 ">
            <div className="flex flex-col justify-start ml-6  w-2/5 rounded-lg">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="md:text-base xl:text-2xl"
              >
                Longterm Diseases
              </h1>
              <div className="flex flex-row items-center md:justify-between border-custom-border-dark rounded-lg border-2 mt-10 xl:w-full md:w-full xl:h-16 md:h-10">
                <input
                  type="text"
                  style={{
                    outline: "none",
                  }}
                  placeholder="Enter disease"
                  value={longterm}
                  onChange={(e) => setLongterm(e.target.value)}
                  className="border-none rounded-md mt-0 xl:h-14 xl:w-96 xl:pl-6 md:h-8 md:w-32 md:pl-1 md:text-base xl:text-2xl"
                />
                <div
                  onClick={handleAddLongterm}
                  style={{
                    backgroundColor: "#F2F3FE",
                    cursor: "pointer",
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                  className="text-custom-blue-dark right-0 xl:h-10 xl:w-20 md:h-6 ms:w-14 md:text-xs md:px-2 xl:text-2xl rounded-md flex border-custom-blue-dark border-2 mr-4 items-center justify-center"
                >
                  Add
                </div>
              </div>
              <div
                id="diseaseTagss"
                style={{
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  display: "flex",
                }}
                className="flex flex-row items-center mt-4 h-20 flex-wrap w-full"
              >
                {longterms.map((tag, index) => (
                  <h1
                    key={index}
                    onClick={() => handleDeleteLongterm(index)}
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter",
                      cursor: "pointer",
                      display: "inline-block",
                      backgroundColor: "#0083AC",
                    }}
                    className="text-white md:text-base xl:text-2xl px-4 rounded-md ml-4 shadow-lg"
                  >
                    {tag}
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Inter",
                        cursor: "pointer",
                      }}
                      className="absolute text-custom-butt bg-white px-1 -mt-2 rounded-full ml-2 shadow-xl border-2"
                    >
                      X
                    </span>
                  </h1>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-start  rounded-lg w-2/5">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="md:text-base xl:text-2xl"
              >
                Allergies
              </h1>
              <div className="flex flex-row items-center md:justify-between border-custom-border-dark rounded-lg border-2 mt-10 xl:w-full md:w-full xl:h-16 md:h-10">
                <input
                  type="text"
                  style={{
                    outline: "none",
                  }}
                  placeholder="Enter allergies"
                  value={allergy}
                  onChange={(e) => setAllergy(e.target.value)}
                  className="border-none rounded-md mt-0 xl:h-14 xl:w-96 xl:pl-6 md:h-8 md:w-32 md:pl-1 md:text-base xl:text-2xl"
                />
                <div
                  onClick={handleAddAllergy}
                  style={{
                    backgroundColor: "#F2F3FE",
                    cursor: "pointer",
                    fontFamily: "Inter",
                    fontWeight: "600",
                  }}
                  className="text-custom-blue-dark right-0 xl:h-10 xl:w-20 md:h-6 ms:w-14 md:text-xs md:px-2 xl:text-2xl rounded-md flex border-custom-blue-dark border-2 mr-4 items-center justify-center"
                >
                  Add
                </div>
              </div>
              <div
                id="allergiesTagss"
                style={{
                  whiteSpace: "nowrap",
                  display: "flex",
                }}
                className="flex flex-row items-center mt-4 h-20 flex-wrap w-full "
              >
                {allergies.map((tag, index) => (
                  <h1
                    key={index}
                    onClick={() => handleDeleteAllergy(index)}
                    style={{
                      fontWeight: "400",
                      fontFamily: "Inter",
                      cursor: "pointer",
                      display: "inline-block",
                      backgroundColor: "#0083AC",
                    }}
                    className="text-white md:text-base xl:text-2xl px-5 rounded-md ml-4 shadow-lg"
                  >
                    {tag}
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Inter",
                        cursor: "pointer",
                      }}
                      className="absolute text-custom-butt bg-white px-1 -mt-2 rounded-full ml-2 shadow-xl border-2"
                    >
                      X
                    </span>
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
                className="md:text-base xl:text-2xl"
              >
                Chief Complaints
              </h1>
              <div className="w-full pr-10">
                <textarea
                  type="text"
                  name="chiefComplaints"
                  value={prescriptionInput.chiefComplaints}
                  onChange={handlePrescriptionInputChange}
                  placeholder="Enter complaints"
                  className="border-2 border-custom-border-dark text-lg rounded-md mt-10 md:h-24 xl:h-36 w-full pl-6 pt-6 md:text-base xl:text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-full space-x-64 h-auto pt-6 pb-4">
            <div className="flex flex-col justify-start ml-6 w-full">
              <div className="flex flex-row items-center justify-between w-11/12 h-auto">
                <h1
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    color: "#979797",
                  }}
                  className="md:text-base xl:text-2xl"
                >
                  History of Present Illness
                </h1>
                <h1
                  style={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    backgroundColor: "#F2F3FE",
                    cursor: "pointer",
                  }}
                  className="text-custom-blue-dark ml-10 rounded-md px-4 border-2 border-custom-blue-dark md:text-base xl:text-2xl"
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
                    <img
                      src={Vr}
                      className="h-10 w-10 absolute top-5 right-2 cursor-pointer mix-blend-multiply"
                      alt="db"
                      onClick={() => handleDeleteHPI(index)}
                    />
                    <div className="border-2 border-custom-border-dark rounded-md flex flex-col p-4 pt-4">
                      <h1 className="xl:text-lg md:text-base font-bold mb-3 border-b-0">
                        {entry.title}
                      </h1>
                      <p className="xl:text-base md:text-xs mt-2">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full pr-10">
                <div className="flex flex-col w-full h-auto py-4">
                  <div className="border-t-2 border-x-2 border-custom-border-dark rounded-t-md flex flex-row items-center justify-between">
                    <input
                      type="text"
                      placeholder="Enter HPI Title"
                      value={hpiTitle}
                      onChange={(e) => setHpiTitle(e.target.value)}
                      className="mt-0 h-14 w-4/5 pl-6 outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Enter HPI"
                      value={hpiDescription}
                      onChange={(e) => setHpiDescription(e.target.value)}
                      className="border-2 outline-none border-custom-border-dark text-lg rounded-b-md mt-0 h-24 w-full pl-6 pt-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full xl:pr-10 h-auto pt-6  pb-4">
            <div className="flex flex-col justify-start ml-6 rounded-lg w-1/2">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="md:text-base xl:text-2xl"
              >
                Diagnosis
              </h1>
              <div className="flex flex-row items-center md:justify-between border-custom-border-dark rounded-lg border-2 mt-10 xl:w-full md:w-1/2 xl:h-16 md:h-10">
                <input
                  type="text"
                  onChange={(e) => setDiagnosis(e.target.value)}
                  placeholder="Enter diagnosis"
                  style={{
                    outline: "none",
                  }}
                  className="border-none rounded-md mt-0 xl:h-14 xl:w-full xl:pl-6 md:h-8 md:w-32 md:pl-1 md:text-base xl:text-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-6 w-1/2 rounded-lg">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="md:text-base xl:text-2xl"
              >
                Medical tests
              </h1>
              <div className="flex flex-row items-center md:justify-between border-custom-border-dark rounded-lg border-2 mt-10 xl:w-full md:w-1/2 xl:h-16 md:h-10">
                <input
                  type="text"
                  onChange={(e) => setTests(e.target.value)}
                  placeholder="Enter recommended tests"
                  style={{
                    outline: "none",
                  }}
                  className="border-none rounded-md mt-0 xl:h-14 xl:w-full xl:pl-6 md:h-8 md:w-32 md:pl-1 md:text-base xl:text-2xl"
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
                className="md:text-base xl:text-2xl"
              >
                Additional notes
              </h1>
              <div className="w-full pr-10">
                <textarea
                  type="text"
                  name="additionalNotes"
                  onChange={(e) => {
                    setAddnotes(e.target.value);
                  }}
                  placeholder="Enter additional notes"
                  className="border-2 border-custom-border-dark text-lg rounded-md mt-10 h-24 w-full pl-6 pt-6 md:text-base xl:text-2xl "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-centre w-full xl:space-x-64 h-auto pt-6 pb-4 xl:pr-10">
            <div className="flex flex-col justify-start ml-6 rounded-lg w-1/2">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="md:text-base xl:text-2xl"
              >
                Additional tags
              </h1>
              <div className="flex flex-row items-center md:justify-between border-custom-border-dark rounded-lg border-2 mt-10 xl:w-full md:w-1/2 xl:h-16 md:h-10">
                <input
                  type="text"
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Enter tags"
                  style={{
                    outline: "none",
                  }}
                  className="border-none rounded-md mt-0 xl:h-14 xl:w-full xl:pl-6 md:h-8 md:w-32 md:pl-1 md:text-base xl:text-2xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start ml-6 rounded-lg w-1/2">
              <h1
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "#979797",
                }}
                className="md:text-base xl:text-2xl"
              >
                Next follow-up
              </h1>
              <div className="flex flex-row items-center md:justify-between border-custom-border-dark rounded-lg xl:pr-10 border-2 mt-10 xl:w-full md:w-1/2 xl:h-16 md:h-10">
                <input
                  type="date"
                  onChange={(e) => setFollowup(e.target.value)}
                  placeholder="Enter recommended tests"
                  style={{
                    outline: "none",
                  }}
                  className="border-none rounded-md mt-0 xl:h-14 xl:w-full xl:pl-6 md:h-8 md:w-32 md:pl-1 md:text-base xl:text-2xl"
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
                className="md:text-base xl:text-2xl"
              >
                Upload documents (If any)
              </h1>
              <div className="w-full pr-10">
                <div
                  style={{ backgroundColor: "#F2F3FE" }}
                  className="border-dashed border-2 border-custom-blue-dark flex justify-center  text-lg rounded-md mt-10 h-48 w-full items-center "
                >
                  {files.length === 0 ? (
                    <h1
                      onClick={toggleQRCode}
                      style={{
                        fontWeight: "500",
                        fontFamily: "Inter",

                        // color: "#979797",
                      }}
                      className="text-custom-blue-dark cursor-pointer md:text-xl xl:text-4xl"
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
                        className="bg-custom-blue-dark px-4 mt-8 h-14 ml-5 pt-3 rounded-full"
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
                className="ml-10 py-5 md:text-xl xl:text-3xl"
              >
                Recommended Medicines
              </h1>
              <h1
                style={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  backgroundColor: "#F2F3FE",
                }}
                className="mr-20 py-2 px-4 rounded-lg text-custom-im-dark border-2 border-custom-im-dark cursor-pointer"
                onClick={handleAddMedicine}
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
                    width: "24.56%",
                    overflowX: "hidden",
                  }}
                  className="ml-1 py-3 px-2 h-14 rounded-lg"
                >
                  {med.notes}
                </div>
                <img
                  onClick={() => handleDeleteMedicine(index)}
                  src={Vr}
                  style={{ cursor: "pointer", width: "4%" }}
                  className="h-10 ml-1 bg-white px-1 py-0 rounded-full"
                  alt="db"
                />
              </div>
            ))}
            <div
              style={{ width: isNavCollapsed ? "93%" : "94%" }}
              className="flex flex-row items-center ml-10 justify-start  space-x- m-auto"
            >
              <input
                name="name"
                value={medicine.name}
                onChange={handleInputChange}
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "black",
                  backgroundColor: "#F2F3FE",
                  width: "14.28%",
                  overflowX: "hidden",
                }}
                className="ml-0 py-3 h-14 px-2 rounded-lg text-base"
              />
              <input
                name="quantity"
                value={medicine.quantity}
                onChange={handleInputChange}
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "black",
                  backgroundColor: "#F2F3FE",
                  width: "14.28%",
                  overflowX: "hidden",
                }}
                className="ml-1 py-3 h-14 px-2 rounded-lg text-base"
              />
              <input
                name="frequency"
                value={medicine.frequency}
                onChange={handleInputChange}
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "black",
                  backgroundColor: "#F2F3FE",
                  width: "14.28%",
                  overflowX: "hidden",
                }}
                className="ml-1 py-3 h-14 px-2 rounded-lg text-base"
              />
              <input
                name="route"
                value={medicine.route}
                onChange={handleInputChange}
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "black",
                  backgroundColor: "#F2F3FE",
                  width: "14.28%",
                  overflowX: "hidden",
                }}
                className="ml-1 py-3 h-14 px-2 rounded-lg text-base"
              />
              <input
                name="duration"
                value={medicine.duration}
                onChange={handleInputChange}
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "black",
                  backgroundColor: "#F2F3FE",
                  width: "14.28%",
                  overflowX: "hidden",
                }}
                className="ml-1 py-3 h-14 px-2 rounded-lg text-base"
              />
              <input
                name="notes"
                value={medicine.notes}
                onChange={handleInputChange}
                style={{
                  fontWeight: "500",
                  fontFamily: "Inter",
                  color: "black",
                  backgroundColor: "#F2F3FE",
                  width: "28.56%",
                  overflowX: "hidden",
                }}
                className="ml-1 py-3 h-14 px-2 rounded-lg text-base"
              />
              {/* <img
                // onClick={handleAddMedicine}
                src={Vr}
                className="h-10 ml-1 bg-white px-1 py-0 rounded-full"
                alt="db"
              /> */}
            </div>
          </div>

          <div className="flex flex-row items-center justify-between w-full  h-auto pt-6 pb-4 ">
            <div className="flex flex-row items-center ml-6 space-x-4">
              <input
                className="border-2 border-custom-im-dark h-6 w-6 rounded-md text-custom-im-dark focus:ring-2 focus:ring-custom-im-dark transition-all duration-200 ease-in-out"
                type="checkbox"
              />
              <h1 className="md:text-base xl:text-2xlfont-medium text-gray-800">
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
                const finalPrescription = {
                  name: Patient.name,
                  age: Patient.age,
                  gender: Patient.gender,
                  phone: Patient.phone,
                  email: Patient.email,
                  address: Patient.address,
                  adhar: Patient.adhar,
                  weight: weight,
                  NSID: Patient.NSID,
                  prescriptions: {
                    visit: "21-02-2024",
                    type: "General",
                    temperature: temperature,
                    ltd: longterms,
                    allergies: allergies,
                    complaint: prescriptionInput.chiefComplaints,
                    HPI: hpiEntries,
                    diagnosis: diagnosis,
                    id: 123456,
                    tests: tests,
                    additionaltags: addtag,
                    nextvisit: nextdate,
                    notes: addnote,
                    medicines: medicines,
                    documents: files,
                  },
                };

                localStorage.setItem(
                  "finalPrescription",
                  JSON.stringify(finalPrescription)
                );

                window.location.href = "/newpdf";
              }}
              className="
            bg-custom-butt mr-10 px-10 py-2 shadow-xl  rounded-lg md:text-base xl:text-2xl "
            >
              Save report
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newpres;
