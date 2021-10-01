import axios from "axios";

export const addFormResponse = async (uuid, body) => {
  const response = await axios.post(
    `http://localhost:5000/api/v1/filledforms?uuid=${uuid}`,
    body
  );
  console.log("addFormResponse: Response is ", response);
  return response;
};

export const getFormResponse = async (uuid) => {
  const response = await axios.get(
    `http://localhost:5000/api/v1/filledforms?uuid=${uuid}`
  );
  console.log("getFormResponse: Response is ", response);
  return response;
};
