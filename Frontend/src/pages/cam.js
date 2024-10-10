import React, { useRef, useState, useEffect } from "react";

import NewLogo from "../images/logoW.png";

function CameraUploader() {
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
        setFiles((prevFiles) => [
          ...prevFiles,
          { filename: msg.filename, data: msg.data },
        ]);
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

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newFiles = [...files];
        newFiles[index] = {
          ...newFiles[index],
          file: file,
          preview: reader.result,
        };
        setFiles(newFiles);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = {
      ...newFiles[index],
      title: event.target.value,
    };
    setFiles(newFiles);
  };

  const handleAddFileInput = () => {
    setFiles([...files, { file: null, title: "", preview: "" }]);
  };

  const handleSendFiles = () => {
    files.forEach(({ file, title }) => {
      if (file && title && ws && ws.readyState === WebSocket.OPEN) {
        const reader = new FileReader();
        reader.onload = () => {
          const fileData = reader.result.split(",")[1]; // Get the base64 part of the data URL
          const filename = `${title}`;
          ws.send(JSON.stringify({ type: "file", data: fileData, filename }));
        };
        reader.readAsDataURL(file); // Read file as base64 encoded string
      }
    });
  };

  return (
    <div>
      <div
        style={{ zIndex: "1000" }}
        className="bg-gradient-to-r from-custom-blue-dark to-custom-blue-light h-20 w-full fixed top-0 left-0 z-10 flex items-center justify-between px-4"
      >
        <img src={NewLogo} alt="logo" className="h-12" />
      </div>

      {/* <h1>Camera Uploader</h1> */}

      <div className="flex flex-col items-center justify-center">
        {files.map((fileInput, index) => (
          <div key={index}>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleFileChange(index, event)}
              className="ml-20 mb-16"

              // style={styles.fileInput}
            />
            <input
              style={{
                backgroundColor: "#d8d8d8",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                marginBottom: "3.5rem",
                marginLeft: "20%",
              }}
              type="text"
              placeholder="Enter title"
              value={fileInput.title}
              onChange={(event) => handleTitleChange(index, event)}
            />
            {fileInput.preview && (
              <img
                src={fileInput.preview}
                alt={fileInput.title}
                className="h-64 w-64 object-cover rounded-lg shadow-lg mb-4 ml-16"
                // style={styles.previewImage}
              />
            )}
          </div>
        ))}
        <div>
          <button
            onClick={handleAddFileInput}
            style={{
              backgroundColor: "#bcbcbc",
              color: "#000000",
              padding: "0.5rem 1rem",
              borderRadius: "26px",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              textTransform: "uppercase",
              fontWeight: "500",
              fontFamily: "Inter",
            }}
          >
            Add Another File
          </button>
          <button
            onClick={handleSendFiles}
            className="bg-custom-blue-light"
            style={{
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "26px",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              textTransform: "uppercase",
              fontWeight: "500",
              fontFamily: "Inter",
            }}
          >
            Send Files
          </button>
        </div>
      </div>
    </div>
  );
}

export default CameraUploader;
