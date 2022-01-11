import React from "react";
import dataAsia from "../data/dataAsia";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Asia = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          {dataAsia.map((asia) => {
            const { image, desc, title, id } = asia;
            return (
              <Col xs={12} md={6} lg={4}>
                <Card key={id} style={{ width: "18rem" }}>
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

export default Asia;
