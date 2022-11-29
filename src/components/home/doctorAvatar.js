import React from "react";

function DoctorAvatar({ users, doctorId,isDetail = false }) {
  return (
    <div>
      {users
        ?.filter((user) => user.id === doctorId)
        .map((user) => (
          <div className="mx-2">
            <img
              className="w-10 h-10 rounded-full mx-1"
              src="/doctor.png"
              alt="Rounded avatar"
            />
            {user.firstName}
            {
              isDetail && (
                <button>chat</button>
              )
            }
          </div>
        ))}
    </div>
  );
}

export default DoctorAvatar;
