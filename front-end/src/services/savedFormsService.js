import axios from "axios";

export const addNewForm = async (body) => {
  const response = await axios.post(
    "http://localhost:5000/api/v1/savedforms/newform",
    body
  );
  console.log("Response is ", response);
  return response;
};
