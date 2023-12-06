import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const addNewForm = async (body) => {
  return await axios.post(`${BACKEND_URL}/api/v1/savedforms`, body);
};

export const getForm = async (uuid) => {
  return await axios.get(`${BACKEND_URL}/api/v1/savedforms?uuid=${uuid}`);
};
