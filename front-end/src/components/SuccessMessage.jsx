import React from "react";
import { Message } from "semantic-ui-react";
import PropTypes from "prop-types";

export const SuccessMessage = ({ type, message }) => {
  return (
    <Message success>
      <Message.Header>{type}</Message.Header>
      <p>{message}</p>
    </Message>
  );
};

SuccessMessage.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
