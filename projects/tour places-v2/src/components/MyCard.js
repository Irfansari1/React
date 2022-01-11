import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyCard = (props) => {
  const navigate = useNavigate();
  const { image, desc, title, link, id } = props.destination;
  return (
    <Card key={id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button onClick={() => navigate(`/${link}`)}>Take me to {title}</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
