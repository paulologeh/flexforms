import axios from "axios";

const BACK_END_URI = process.env.REACT_APP_BACK_END_URI;

export const addNewForm = async (body) => {
  const response = await axios.post(`${BACK_END_URI}/api/v1/savedforms`, body);
  return response;
};

export const getForm = async (uuid) => {
  const response = await axios.get(
    `${BACK_END_URI}/api/v1/savedforms?uuid=${uuid}`
  );
  return response;
};
