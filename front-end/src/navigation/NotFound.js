import React from "react"
import {Container, Header} from "semantic-ui-react"


export const NotFound = ({mobile}) => {
  return (
    <div className="App">
      <Container text>
        <Header
          as='h1'
          content='Page Not Found'
          color='grey'
          style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
            marginBottom: 0,
          }}
        />
      </Container>
    </div>
  );
};
