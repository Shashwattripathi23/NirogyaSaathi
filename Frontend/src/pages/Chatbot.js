import React, { useContext, useState, useEffect, useRef } from "react";
import { ChatbotContext } from "./Chatprovider";
import Chat from "../images/chat.png";

const API_KEY = "Add your OpenAI API key here";

const Chatbot = () => {
  const {
    chats,
    addChat,
    isChatCollapsed,
    setIsChatCollapsed,
    prescriptionInput,
  } = useContext(ChatbotContext);
  const [input, setInput] = useState("");
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const [PresPage, setPresPage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/newpres") {
      setPresPage(true);
    }
  }, []);

  const handleSend = async (message) => {
    if (message.trim() && !isRequestInProgress) {
      const userMessage = { message, sender: "user" };
      addChat(userMessage);
      setIsRequestInProgress(true);

      // Add typing indicator
      // const typingMessage = { message: "Typing...", sender: "bot" };
      // addChat(typingMessage);

      const url = "https://api.openai.com/v1/chat/completions";
      const token = `Bearer ${API_KEY}`;
      const model = "gpt-3.5-turbo";

      const prompt = {
        role: "user",
        content: message + " return response in less than 150 words",
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            model: model,
            messages: [prompt],
            max_tokens: 150,
            temperature: 0.7,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Remove typing indicator
          setTimeout(() => {
            addChat({
              message: data.choices[0].message.content.trim(),
              sender: "bot",
            });
          }, 1500);
        } else {
          throw new Error(data.error.message);
        }
      } catch (error) {
        console.error("Error fetching response from OpenAI:", error);
        const errorMessage = {
          message:
            "Sorry, I couldn't process your request. Please try again later. Error: " +
            error.message,
          sender: "bot",
        };
        addChat(errorMessage);
      } finally {
        setIsRequestInProgress(false);
      }
    }
  };

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
  };

  const handleDiagnoseClick = () => {
    const { age, gender, weight, temperature, chiefComplaints } =
      prescriptionInput;
    const message = `Diagnose patient with details: 
      Age: ${age}, 
      Gender: ${gender}, 
      Weight: ${weight}, 
      Temperature: ${temperature}, 
      Chief Complaints: ${chiefComplaints}`;
    handleSend(message);
  };

  return (
    <>
      <div
        className="fixed right-10 bottom-10 md:w-10 md:h-10 xl:h-14 xl:w-14 flex justify-center items-center rounded-full bg-black cursor-pointer"
        onClick={toggleChat}
        style={{ zIndex: "2550" }}
      >
        <img src={Chat} className="h-10 absolute w-10 " alt="chat" />
      </div>
      {isChatCollapsed && (
        <div
          className="fixed right-10 flex flex-col bottom-20 bg-white shadow-2xl"
          style={{ width: "35rem", height: "600px", zIndex: "2550" }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "500",
              fontFamily: "Inter",
            }}
            className="text-custom-chat-light bg-custom-chat-dark h-16 pt-4 pl-5"
          >
            Chat with AI
          </h2>
          <div
            className="bg-white"
            style={{
              height: "calc(100% - 8rem)",
              overflowY: "scroll",
            }}
            ref={chatContainerRef}
          >
            <div className="flex items-center my-2 flex-row px-2">
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                }}
                className="px-2 h-10 w-10 border mt-2 rounded-full flex items-center justify-center bg-custom-chat-dark text-white"
              >
                NS
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Inter",
                  width: "80%",
                }}
                className="text-black ml-2 mt-6 py-2 px-2 bg-custom-chat-light"
              >
                Hi! How can I help you today?
              </h3>
            </div>
            {chats.map(
              (chat, index) =>
                chat && (
                  <div
                    key={index}
                    className={`flex items-center my-2 px-2 ${
                      chat.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter",
                      }}
                      className={`h-10 w-10 border mt-2 rounded-full flex items-center justify-center ${
                        chat.sender === "user"
                          ? "bg-custom-chat-bg"
                          : "bg-custom-chat-dark text-white"
                      }`}
                    >
                      {chat.sender === "user" ? "U" : "NS"}
                    </div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter",
                        width: "80%",
                        overflowWrap: "anywhere",
                      }}
                      className={`text-black ml-2 mt-6 py-2 px-2 mr-2 ${
                        chat.sender === "user"
                          ? "bg-custom-chat-bg text-right"
                          : "bg-custom-chat-light"
                      }`}
                    >
                      {chat.message}
                    </h3>
                  </div>
                )
            )}
          </div>
          {PresPage && (
            <div
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "500",
              }}
              className="border-2 w-full flex py-3 justify-center items-center"
            >
              <h1
                className="text-custom-im-dark mx-5 cursor-pointer border-custom-im-dark border-2 px-4 bg-custom-navFont rounded-md"
                onClick={handleDiagnoseClick}
              >
                Diagnose
              </h1>
              {/* <h1 className="text-custom-im-dark mx-5 cursor-pointer border-custom-im-dark border-2 px-4 bg-custom-navFont rounded-md">
                Medicines
              </h1> */}
            </div>
          )}
          <div
            style={{
              height: "4rem",
              width: "100%",
              backgroundColor: "#F3F3F3",
            }}
            className="bg-custom-chat-input flex items-center px-4"
          >
            <input
              type="text"
              placeholder="Type your message here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                fontSize: "16px",
                width: "calc(100% - 4rem)",
                height: "3rem",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                paddingLeft: "10px",
              }}
            />
            <div
              style={{
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Poppins",
                cursor: "pointer",
              }}
              className="bg-custom-butt text-white h-12 w-16 rounded-md flex items-center justify-center ml-2"
              onClick={() => handleSend(input)}
            >
              Send
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
