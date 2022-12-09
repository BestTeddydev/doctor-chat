import React from "react";
import { getDoctor, getUser } from "../../config/localStorageService";
import MainLayout from "../layouts/main";
import Message from "./message";

function DoctorChat({ messages, onSendMessage }) {
  const doctor = getDoctor();
  const user = getUser();
  return (
    <MainLayout>
      <Message
        sender={doctor}
        receiver={user}
        messages={messages}
        onSend={onSendMessage}
      />
    </MainLayout>
  );
}

export default DoctorChat;
