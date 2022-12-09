import axios from "../config/axios";

export const fetchsDoctors = async () => {
  const resp = await axios.get("/doctors");
  return resp.data;
};

export const doctorLogin = async (username,password) => {
  const resp = await axios.get(`/doctors?username=${username}&password=${password}`)
  return resp.data;
}