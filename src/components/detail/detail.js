import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { hospitalById } from "../../action/hospitalAction";
import { fetchsDoctors } from "../../action/doctorAction";

import DoctorAvatar from "../home/doctorAvatar";
import MainLayout from "../layouts/main";
function Detail() {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [users, setUsers] = useState([]);

  const fechHospital = async (id) => {
    const hospital = await hospitalById(id);
    const respUser = await fetchsDoctors();

    setHospital(hospital);
    setUsers(respUser);
  };
  useEffect(() => {
    fechHospital(id);
  }, [id]);

  return (
    <MainLayout>
      <div className="h-full">
        {hospital ? (
          <div>
            <div className="relative rounded-lg overflow-hidden flex justify-center items-center w-auto h-72">
              <img
                src={hospital.src}
                alt={hospital.hospName}
                className="h-72 w-full object-cover text-center"
              />
              <div className="absolute w-auto bottom-0 inset-x-0 bg-black/30 h-full leading-4">
                <h1 className="text-center text-white mt-24">
                  {hospital.hospName}
                </h1>
              </div>
            </div>
            <p>{hospital.description}</p>
            <div className="grid grid-flow-col auto-cols-max">
              {hospital.doctorsId.map((doctor) => (
                <div className="w-96">
                  <DoctorAvatar
                    users={users}
                    doctorId={doctor}
                    isDetail={true}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </MainLayout>
  );
}

export default Detail;
