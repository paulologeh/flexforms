import React from "react"
import _404 from "assets/404.gif"
import {Container, Header, Image} from "semantic-ui-react"


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
         <Image src={_404} inline/>
      </Container>
    </div>
  );
};
