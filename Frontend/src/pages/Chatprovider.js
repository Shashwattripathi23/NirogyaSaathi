import React, { createContext, useState, useEffect } from "react";

export const ChatbotContext = createContext();

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("chats");
    return savedChats ? JSON.parse(savedChats) : [];
  });

  const [prescriptionInput, setPrescriptionInput] = useState({
    age: "",
    gender: "",
    weight: "",
    temperature: "",
    chiefComplaints: "",
  });

  const [isChatCollapsed, setIsChatCollapsed] = useState(() => {
    const savedState = localStorage.getItem("isChatCollapsed");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    localStorage.setItem("isChatCollapsed", JSON.stringify(isChatCollapsed));
  }, [isChatCollapsed]);

  const addChat = (chat) => {
    setChats((prevChats) => [...prevChats, chat]);
  };

  return (
    <ChatbotContext.Provider
      value={{
        chats,
        addChat,
        isChatCollapsed,
        setIsChatCollapsed,
        prescriptionInput,
        setPrescriptionInput,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export { ChatProvider };
export default ChatProvider;
