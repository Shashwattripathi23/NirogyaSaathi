import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

function FileViewer() {
  const [ws, setWs] = useState(null);
  const [files, setFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFileData, setSelectedFileData] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket(
      "wss://3ca1-2401-4900-8823-d48d-38e7-56ae-56aa-8820.ngrok-free.app"
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

  const openFileInModal = (data) => {
    setSelectedFileData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFileData(null);
  };

  return (
    <div className="FileViewer">
      <h1>Received Files</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <button onClick={() => openFileInModal(file.data)}>
              {file.filename}
            </button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <img
              src={`data:image/png;base64,${selectedFileData}`}
              alt="Received file"
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

export default FileViewer;
