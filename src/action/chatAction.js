import axios from '../config/axios'

export const myChat = async(id) => {
  const resp = await axios.get(`/chats?receiveId=${id}`);
  console.log('my chate',resp.data);
  return resp.data;
}

export const weMessage = async(senderId,receiveId) => {
  const resp = await axios.get(`/chats?receiveId=${receiveId}&senderId=${senderId}`);
  console.log('we chate',resp.data);
  return resp.data
}

export const sendMessage = async(data) => {
  await axios.post('/chats',data);
}