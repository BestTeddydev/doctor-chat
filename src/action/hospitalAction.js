import axios from '../config/axios';

export const fetchHospitals = async() => {
  const response = await axios.get('/hospitals');
  return response.data
}

export const hospitalById = async(id) => {
  const resp = await axios.get(`/hospitals/${id}`);
  return resp.data;
}