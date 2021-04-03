import { Container, Image } from "semantic-ui-react";
import head1 from "assets/head1.png";
import head2 from "assets/head2.png";
import head3 from "assets/head3.png";

export const Banner = () => {
  return (
    <>
      <Container style={{ padding: "5em 0em" }}>
        <Image src={head1} size="small" centered alt="head1" />
        <p style={{ fontSize: "1.5em" }}>
          Collaborate with other form builders
        </p>
        <Image src={head2} size="small" centered alt="head2" />
        <p style={{ fontSize: "1.5em" }}>
          Fully customisable with an open canvas
        </p>
        <Image src={head3} size="small" centered alt="head3" />
        <p style={{ fontSize: "1.5em" }}>Get real time engagement data</p>
      </Container>
    </>
  );
};
