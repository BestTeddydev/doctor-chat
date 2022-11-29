import React, { useEffect, useState } from "react";
import { fetchHospitals } from "../../action/hospitalAction";
import MainLayout from "../layouts/main";
import { useNavigate } from "react-router-dom";
import { fetchsUser } from "../../action/userAction";
import DoctorAvatar from "./doctorAvatar";

function HomePage() {
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState([]);
  const [users, setUsers] = useState([]);
  const fetchsData = async () => {
    const resp = await fetchHospitals();
    const respUser = await fetchsUser();

    setHospitals(resp);
    setUsers(respUser);
  };
  useEffect(() => {
    fetchsData();
  }, []);
  return (
    <MainLayout>
      <div className="grid grid-cols-3 gap-2 mx-10 my-6">
        {hospitals?.map((hospital) => (
          <div key={hospital.id} className="h-70 mx-6">
            <img
              src={hospital.src}
              alt={hospital.hospName}
              className="h-56 w-full"
            />
            <h3>{hospital.hospName}</h3>
            <p>{hospital.description}</p>

            <div className=" flex justify-between">
              <div className="flex w-48">
                {hospital.doctorsId.map((doctor) => (
                  <DoctorAvatar users={users} doctorId={doctor} />
                ))}
              </div>
              <button onClick={() => navigate(`/detail/${hospital.id}`)} className="underline">
                รายละเอียด
              </button>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default HomePage;
