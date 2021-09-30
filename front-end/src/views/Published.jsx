import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ROOT } from "navigation/CONSTANTS";
import { ToolStore } from "contexts/toolsContext";
import { Button, Header, Icon, Segment, Message } from "semantic-ui-react";

const Published = () => {
  const [toolStore] = useContext(ToolStore);
  const history = useHistory();

  console.log("Publish", toolStore);

  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="thumbs up" />
        Success!
      </Header>
      <Message positive>
        <Header>Your Form has been published</Header>
        <br />
        People can view the form using the viewer link and you can make changes
        to the forms using the editor link. You can view your responses to the
        form in the response link.
        <br />
        <br />
        This form will expire in 7 days and all links will stop working after
        this.
        <br />
        <br />
        <span>
          Viewer Link: <a href={toolStore.viewerLink}>{toolStore.viewerLink}</a>
        </span>
        <br />
        <span>
          Editor Link: <a href={toolStore.editorLink}>{toolStore.editorLink}</a>
        </span>
        <br />
        <span>
          Response Link:
          <a href={toolStore.responseLink}>{toolStore.responseLink}</a>
        </span>
        <br />
        <br />
        These details also will be emailed to you.
      </Message>
      <Button primary onClick={() => history.push(ROOT)}>
        Take me out of here
      </Button>
    </Segment>
  );
};

export default Published;
