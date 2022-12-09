export const saveUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
export const saveDoctor = (data) => {
  localStorage.setItem("doctor", JSON.stringify(data));
};
export const getUser = () => {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
};
export const getDoctor = () => {
  const doctor = localStorage.getItem("doctor");
  return JSON.parse(doctor);
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
export const removeDoctor = () => {
  localStorage.removeItem("doctor");
};

export const saveMessages = (data) => {
  localStorage.setItem("messages", JSON.stringify(data));
};
export const getMessages = () => {
  const data = localStorage.getItem("messages");
  return JSON.parse(data);
};
export const removeMessages = () => {
  localStorage.removeItem("messages");
};
