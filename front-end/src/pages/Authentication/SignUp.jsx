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
import logo from "assets/FlexFormsLogoNoText.png";
import { useAuth } from "context/AuthContext";
import { ErrorMessage } from "components";
import { Link, useHistory } from "react-router-dom";
import { SIGN_IN, DASHBOARD } from "navigation/CONSTANTS";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log(password, confirmPassword);
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push(DASHBOARD);
    } catch (err) {
      if ("message" in err) {
        setError(err.message);
      } else {
        setError("Failed to create an account");
      }
    }
    setLoading(false);
  };

  const hanleEmailChange = (e) => setEmail(e.target.value);
  const hanlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmChange = (e) => setConfirm(e.target.value);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={logo} /> Create a new account
        </Header>
        {error && (
          <ErrorMessage errorType="Sorry that did not work" error={error} />
        )}
        <Form size="large" onSubmit={handleSignUp}>
          <Segment stacked>
            {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' required /> */}
            {/* <Form.Input fluid icon='user outline' iconPosition='left' placeholder='Last Name' required /> */}
            <Form.Input
              value={email}
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              required
              onChange={hanleEmailChange}
            />
            {/* <Form.Input fluid icon='phone' iconPosition='left' placeholder='Mobile' /> */}
            {/* <Form.Input fluid icon='calendar' type='date' iconPosition='left' placeholder='Date of Birth' required></Form.Input> */}
            <Form.Input
              value={password}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Enter Password"
              type="password"
              required
              onChange={hanlePasswordChange}
            />
            <Form.Input
              value={confirmPassword}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
              required
              onChange={handleConfirmChange}
            />
            <Button
              color="black"
              fluid
              size="large"
              type="submit"
              disabled={loading}
            >
              {" "}
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account ? <Link to={SIGN_IN}>Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
