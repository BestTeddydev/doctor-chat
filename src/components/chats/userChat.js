import React from "react";
import { getDoctor, getUser } from "../../config/localStorageService";
import MainLayout from "../layouts/main";
import Message from "./message";

function UserChat({ messages, onSendMessage, onClear }) {
  const user = getUser();
  const doctor = getDoctor();
  return (
    <MainLayout>
      <Message
        receiver={doctor}
        sender={user}
        messages={messages}
        onSend={onSendMessage}
        onClear={onClear}
      />
    </MainLayout>
  );
}

export default UserChat;
