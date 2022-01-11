import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import about from "../img/about.png";

const About = () => {
  return (
    <Container className="text-center mt-4">
      <Row>
        <Col className="d-flex align-item-center justify-content-center">
          <img src={about} alt="" />
        </Col>
        <Col>
          <h1>Who We are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            placeat dignissimos, amet illo voluptatem iure velit atque cum
            mollitia accusantium recusandae, tenetur assumenda obcaecati
            aspernatur magni! Tenetur consequatur repudiandae provident minima
            quidem maxime tempora quo dolores, ducimus, reiciendis tempore
            reprehenderit quod aperiam assumenda ad. Enim reprehenderit quisquam
            iure temporibus vero porro modi sit minus optio tempora qui,
            voluptatem eaque vitae fuga excepturi cum impedit, soluta totam
            asperiores! Voluptate, id nostrum.
          </p>
          <h1>Our Purpose</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            placeat dignissimos, amet illo voluptatem iure velit atque cum
            mollitia accusantium recusandae, tenetur assumenda obcaecati
            aspernatur magni! Tenetur consequatur repudiandae provident minima
            quidem maxime tempora quo dolores, ducimus, reiciendis tempore
            reprehenderit quod aperiam assumenda ad. Enim reprehenderit quisquam
            iure temporibus vero porro modi sit minus optio tempora qui,
            voluptatem eaque vitae fuga excepturi cum impedit, soluta totam
            asperiores! Voluptate, id nostrum.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
