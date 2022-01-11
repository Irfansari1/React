import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

const Destinations = ({ data }) => {
  return (
    <div>
      <Container>
        <Row>
          {data.map((destination) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <MyCard destination={destination} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Destinations;

//const Destinations = (props) => {
//  const {data} = props
