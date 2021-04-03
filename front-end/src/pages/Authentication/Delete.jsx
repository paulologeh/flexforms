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
import { DASHBOARD } from "navigation/CONSTANTS";
import logo from "assets/FlexFormsLogoNoText.png";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { ErrorMessage, SuccessMessage } from "components";

export const Delete = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { deleteUser } = useAuth();
  const [loading, setLoading] = useState();
  const [confirmPassword, setConfirm] = useState("");
  const handleConfirmChange = (e) => setConfirm(e.target.value);
  const handleDelete = async () => {
    try {
      setSuccess("");
      setError("");
      setLoading(true);
      await deleteUser();
      setSuccess("Your account has been deleted");
    } catch (err) {
      if ("message" in err) {
        setError(err.message);
      } else {
        setError("Failed to delete account");
      }
    }
    setLoading(false);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="black" textAlign="center">
          <Image src={logo} /> Delete Your Account
        </Header>
        {success && <SuccessMessage type="Successs" message={success} />}
        {error && (
          <ErrorMessage errorType="Sorry that did not work" error={error} />
        )}
        <Form size="large" onSubmit={handleDelete}>
          <Segment stacked>
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
              Delete Account
            </Button>
          </Segment>
        </Form>
        <Message>
          <Link to={DASHBOARD}>Get me out of here</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
