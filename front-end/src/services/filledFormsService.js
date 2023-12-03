import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL;

export const addFormResponse = async (uuid, body) => {
  return await axios.post(
    `${BACKEND_URL}/api/v1/filledforms?uuid=${uuid}`,
    body
  )
};

export const getFormResponse = async (uuid) => {
  return await axios.get(
    `${BACKEND_URL}/api/v1/filledforms?uuid=${uuid}`
  )
};
