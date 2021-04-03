import React, { useState } from "react";
import { Form, Container, Header } from "semantic-ui-react";
import { ErrorMessage, SuccessMessage } from "components";
import { useAuth } from "context/AuthContext";
import PropTypes from "prop-types";
import { DELETE } from "navigation/CONSTANTS";
import { Link } from "react-router-dom";

export const Profile = ({ userEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, updatePassword, updateEmail } = useAuth();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmChange = (e) => setConfirm(e.target.value);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    setSuccess("");

    if (email && email !== user.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        console.log("Updating profile");
        setSuccess("Your profile has been updated");
      })
      .catch((err) => {
        if ("message" in err) {
          setError(err.message);
        } else {
          setError("Failed to upadte profile");
        }
        setSuccess("");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Container>
      {error && (
        <ErrorMessage errorType="Sorry that did not work" error={error} />
      )}
      {success && <SuccessMessage type="Success!" message={success} />}
      <Form onSubmit={handleUpdate} padded>
        <Header>Update Your Profile</Header>
        <Form.Input
          label="Email"
          placeholder={userEmail}
          value={email}
          onChange={handleEmailChange}
        />
        <Form.Input
          label="Password"
          placeholder="New Password"
          // placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <Form.Input
          value={confirmPassword}
          placeholder="Confirm Password"
          type="password"
          onChange={handleConfirmChange}
        />
        <Form.Button disabled={loading}>Update</Form.Button>
      </Form>
      <br />
      <br />
      <Link to={DELETE}>Delete Account</Link>
    </Container>
  );
};

Profile.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default Profile;
