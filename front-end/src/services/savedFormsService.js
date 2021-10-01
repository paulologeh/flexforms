import axios from "axios";

export const addNewForm = async (body) => {
  const response = await axios.post(
    "http://localhost:5000/api/v1/savedforms",
    body
  );
  console.log("addNewForm: Response is ", response);
  return response;
};

export const getForm = async (uuid) => {
  const response = await axios.get(
    `http://localhost:5000/api/v1/savedforms?uuid=${uuid}`
  );
  console.log("getForm: Response is ", response);
  return response;
};
