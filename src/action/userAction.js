import axios from "../config/axios";

export const fetchsUser = async () => {
  const resp = await axios.get("/doctors");
  return resp.data;
};
