import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types';

export const ErrorMessage = ({ errorType, error }) => (
  <Message negative>
        <Message.Header>{errorType}</Message.Header>
        <p>{error}</p>
  </Message>
)

ErrorMessage.propTypes = {
    errorType: PropTypes.string,
    error: PropTypes.string.isRequired
}