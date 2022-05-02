import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container
        fluid
        className="py-5 px-5 mt-5"
        style={{ backgroundColor: "#1f557c", color: "white", padding: "20px" }}
      >
        <Row>HillsboroFoodCoop 2022</Row>
      </Container>
    </>
  );
}

export default Footer;
