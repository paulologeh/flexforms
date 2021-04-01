import React, { useState } from "react";
import {
  Message,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import { SIGN_IN } from "navigation/CONSTANTS";
import logo from "assets/FlexFormsLogoNoText.png";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { ErrorMessage, SuccessMessage } from "components";

export const Reset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState();
  const hanleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordReset = async () => {
    try {
      setSuccess("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setSuccess("Check email for further Instructions");
    } catch (err) {
      if ("message" in err) {
        setError(err.message);
      } else {
        setError("Failed to reset password");
      }
    }
    setLoading(false);
  };

  console.log(success);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={logo} /> Reset your password
        </Header>
        {success && (
          <SuccessMessage type="Reset Email Sent" message={success} />
        )}
        {error && (
          <ErrorMessage errorType="Sorry that did not work" error={error} />
        )}
        <Form size="large" onSubmit={handlePasswordReset}>
          <Segment stacked>
            <Form.Input
              value={email}
              onChange={hanleEmailChange}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Button
              color="black"
              fluid
              size="large"
              type="submit"
              disabled={loading}
            >
              Reset Password
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to={SIGN_IN}>Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
