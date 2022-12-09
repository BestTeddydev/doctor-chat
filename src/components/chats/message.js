import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
function Message({ sender, receiver, messages, onSend, onClear }) {
  // doctor or user use like id
  const [message, setMessage] = useState("");
  const onSendMessage = () => {
    if (message && message !== "") {
      const data = {
        id: uuidV4(),
        receiveId: receiver.id,
        senderId: sender.id,
        message: message,
        dateTime: new Date(),
      };
      onSend(data);
      setMessage("");
    }
  };
  return (
    <div className="my-3 relative">
      <div className="overflow-y-auto mx-4">
        {messages.map((message) => (
          <div
            className={
              message.senderId === sender.id
                ? "flex flex-auto justify-end my-1 "
                : " flex justify-start my-1"
            }
          >
            {/* {message.senderId !== sender.id && (
              <img
                src="/doctor.png"
                className="w-6 h-6 mx-2"
                alt="doctor avatar"
              />
            )} */}

            <p
              className={
                message.senderId === sender.id
                  ? "bg-blue-400 rounded-full px-2 py-2"
                  : "bg-gray-100 rounded-full px-2 py-2 "
              }
            >
              {message.message}
            </p>
          </div>
        ))}
      </div>
      <div className="fixed bottom-10 w-full">
        <div className="grid grid-cols-7 gap-4 mx-4 ">
          <div className="col-span-6">
            <input
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:placeholder-gray-400 dark:text-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <button
              onClick={onSendMessage}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
            >
              ส่ง
            </button>
          </div>
        </div>
        {onClear && (
          <div className="flex justify-center my-2">
            <button
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => onClear()}
            >
              จบการสนทนา
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
