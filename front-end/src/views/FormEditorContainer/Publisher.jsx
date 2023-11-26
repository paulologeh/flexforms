import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, Modal, Message, Icon } from "semantic-ui-react";
import { addNewForm } from "services";
import { validEmail } from "utils";

import { PUBLISHED } from "navigation/CONSTANTS";
import { ToolStore } from "contexts/toolsContext";

const initialStore = {
  selectedTool: "",
  allTools: [],
  allToolProps: [],
};

const MessageIcon = ({ header, message, icon, status = true }) => (
  <Message icon>
    <Icon name={icon} loading={status} />
    <Message.Content>
      <Message.Header>{header}</Message.Header>
      {message}
    </Message.Content>
  </Message>
);

export const Publisher = ({ publishing, openPublishing, closePublishing }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toolStore, updateToolStore] = useContext(ToolStore);
  const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const publish = async () => {
    setLoading(true);

    // Checks
    if (!name) {
      console.log(name, "is invalid");
      setError("Invalid name");
      setLoading(false);
      return;
    }
    if (!title) {
      console.log(title, "is invalid");
      setError("Invalid title");
      setLoading(false);
      return;
    }
    if (!email || !validEmail(email)) {
      console.log(email, "is invalid");
      setError("Invalid email");
      setLoading(false);
      return;
    }
    if (!toolStore.allToolProps.length) {
      console.log("Nothing to publish");
      setError("Nothing to publish");
      setLoading(false);
      return;
    }

    let secondsSinceEpoch = Math.round(Date.now() / 1000);
    let responseBody = {
      title: title,
      owner: name,
      email: email,
      form_obj: toolStore.allToolProps,
      date: secondsSinceEpoch,
      expiry: secondsSinceEpoch + 604800,
    };
    let response = await addNewForm(responseBody);

    // clear contexts
    let newToolStore = initialStore;
    newToolStore.editorLink = response.data["editor_link"];
    newToolStore.viewerLink = response.data["viewer_link"];
    newToolStore.responseLink = response.data["response_link"];
    updateToolStore(newToolStore);

    setLoading(false);
    closePublishing();
    history.push(PUBLISHED);
  };

  return (
    <>
      <Modal
        onClose={closePublishing}
        onOpen={openPublishing}
        open={publishing}
      >
        {loading && (
          <MessageIcon
            icon="circle notched"
            header="Just one second"
            message="We are checking the information"
          />
        )}
        {!loading && (
          <>
            <Modal.Header>Publish Form</Modal.Header>
            <Modal.Content>
              {error && (
                <MessageIcon
                  icon="window close outline"
                  header="Error"
                  message={error}
                  status={false}
                />
              )}
              <Form>
                <Form.Field>
                  <label>Form Title</label>
                  <input
                    placeholder="My Form"
                    onChange={handleTitleChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label>Full Name</label>
                  <input
                    placeholder="Paul Ologeh"
                    onChange={handleNameChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    placeholder="paulologeh@gmail.com"
                    onChange={handleEmailChange}
                    required
                  />
                </Form.Field>
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={closePublishing}>
                Go Back
              </Button>
              <Button
                content="Publish"
                labelPosition="right"
                icon="checkmark"
                onClick={publish}
                positive
              />
            </Modal.Actions>
          </>
        )}
      </Modal>
    </>
  );
};
