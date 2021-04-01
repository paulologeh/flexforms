import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import logo from "assets/FlexFormsLogoNoText.png";
import { RESET, SIGN_UP, DASHBOARD } from "navigation/CONSTANTS";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { ErrorMessage } from "components";

export const Login = () => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState();
  const hanleEmailChange = (e) => setEmail(e.target.value);
  const hanlePasswordChange = (e) => setPassword(e.target.value);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push(DASHBOARD);
    } catch (err) {
      if ("message" in err) {
        setError(err.message);
      } else {
        setError("Failed to login to account");
      }
    }
    setLoading(false);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={logo} /> Log-in to your account
        </Header>
        {error && (
          <ErrorMessage errorType="Sorry that did not work" error={error} />
        )}
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              value={email}
              fluid
              icon="mail"
              iconPosition="left"
              placeholder="E-mail address"
              required
              onChange={hanleEmailChange}
            />
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
            <Button
              color="black"
              fluid
              size="large"
              type="submit"
              disabled={loading}
            >
              Log In
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to={RESET}>Forgot password?</Link>
          <span style={{ marginLeft: "5em" }}>Don't have an account? </span>
          <Link to={SIGN_UP}>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
