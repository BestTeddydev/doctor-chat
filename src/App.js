import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { sendMessage, weMessage } from "./action/chatAction";
import DoctorChat from "./components/chats/DoctorChat";
import Login from "./components/chats/login";
import UserChat from "./components/chats/userChat";
import Detail from "./components/detail/detail";
import HomePage from "./components/home";
import {
  getMessages,
  removeDoctor,
  removeMessages,
  saveMessages,
} from "./config/localStorageService";

function App() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const onSendMessage = async (data) => {
    let messageStorages = getMessages();

    if (!messageStorages) {
      saveMessages([data]);
      setMessages([data]);
      return;
    }
    const newMessage = [...messageStorages, data];
    saveMessages(newMessage);
    setMessages(newMessage);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      let messageStorages = getMessages();
      if (messageStorages) {
        const newMessage = [...messageStorages];
        saveMessages(newMessage);
        setMessages(newMessage);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [messages]);

  const onClearChat = () => {
    removeDoctor();
    removeMessages();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route
        path="/chat"
        element={
          <UserChat
            messages={messages}
            onSendMessage={onSendMessage}
            onClear={onClearChat}
          />
        }
      />
      <Route
        path="/doctor/chat"
        element={
          <DoctorChat messages={messages} onSendMessage={onSendMessage} />
        }
      />
    </Routes>
  );
}

export default App;
