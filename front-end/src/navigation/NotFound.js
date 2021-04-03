import React from "react";
import { ErrorMessage } from "components";

export const NotFound = ({ mobile }) => {
  return (
    <div className="App">
      <ErrorMessage
        errorType="Page Not Found"
        error="This Page does not exist"
      />
    </div>
  );
};
