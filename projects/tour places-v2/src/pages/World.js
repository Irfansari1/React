import React from "react";
import dataWorld from "../data/dataWorld";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const World = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          {dataWorld.map((world) => {
            const { image, desc, title, id } = world;
            return (
              <Col key={id} xs={12} md={6} lg={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body className="mb-3 d-flex-col text-center justify-content-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{desc}</Card.Text>
                    <Button
                      className="btn-warning"
                      onClick={() => navigate(-1)}
                    >
                      Go Back
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default World;
