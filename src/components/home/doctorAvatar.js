import React from "react";
import { useNavigate } from "react-router-dom";
import { getUser, saveDoctor } from "../../config/localStorageService";

function DoctorAvatar({ users, doctorId, isDetail = false }) {
  const navigate = useNavigate();
  const onChat = (doctor) => {
    const user = getUser();
    saveDoctor(doctor);
    if (user) {
      navigate("/chat");
      return;
    }
    navigate("/login");
  };
  return (
    <div>
      {users
        ?.filter((doctor) => doctor.id === doctorId)
        .map((doctor) => (
          <div className="mx-2 flex flex-col justify-center items-center my-4">
            <img
              className="w-12 h-10 rounded-full mx-1 my-2"
              src="/doctor.png"
              alt="Rounded avatar"
            />
            <p>{doctor.firstName}</p>

            {isDetail && (
              <>
                <p>แผนก: {doctor.department}</p>

                <p>{doctor.description}</p>
                <button
                  className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
                  onClick={() => onChat(doctor)}
                >
                  ปรึกษาคุณหมอ
                </button>
              </>
            )}
          </div>
        ))}
    </div>
  );
}

export default DoctorAvatar;
