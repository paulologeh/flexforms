import React from "react";
import { Modal } from "semantic-ui-react";
import PropTypes from "prop-types";

export const PopUpError = ({ error, errorType }) => {
  return <Modal open={error} header={errorType} content={error} />;
};

PopUpError.propTypes = {
  error: PropTypes.string,
  errorType: PropTypes.string.isRequired,
};
