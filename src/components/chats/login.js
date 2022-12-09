import React, { useState } from "react";
import { doctorLogin } from "../../action/doctorAction";
import MainLayout from "../layouts/main";
import { saveDoctor, saveUser } from "../../config/localStorageService.js";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Login() {
  const navigate = useNavigate();
  const [isDoctor, setIsDoctor] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onClickSwitchAccount = () => {
    setIsDoctor(!isDoctor);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  
  const onClickLogin = async () => {
    saveUser({ username, id: uuidv4() });
    navigate("/chat");
  };
  return (
    <MainLayout>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Doctor Chat
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your username
                  </label>
                  <input
                    type="text"
                    value={username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={onChangeUsername}
                  />
                </div>
               
                <button
                  onClick={() => onClickLogin()}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  เข้าสู่แชท
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Login;
