import React, { createContext, useReducer, useContext } from "react";

const ChatStateContext = createContext();
const ChatDispatchContext = createContext();

const chatReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CHAT":
      return [...state, action.payload];
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, [
    { message: "Hello! How may I help you?", sender: "bot" },
  ]);

  return (
    <ChatStateContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>
        {children}
      </ChatDispatchContext.Provider>
    </ChatStateContext.Provider>
  );
};

export const useChatState = () => useContext(ChatStateContext);
export const useChatDispatch = () => useContext(ChatDispatchContext);
