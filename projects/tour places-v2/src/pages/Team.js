import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Team = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  /*  return (
    <div className="text-center">
      <h1>OUR TEAM</h1>
      <h5 className="text-danger">
        This is just to learn API. It is not real :)
      </h5>
      {users.map((user) => {
        const { id, login, avatar_url } = user;
        return (
          <div key={id}>
            <h2>{login}</h2>

            <img
              src={avatar_url}
              alt=""
              style={{ cursor: "pointer", width: "300px" }}
              onClick={() => navigate(`/team/${user.login}`)}
            />
          </div>
        );
      })}
    </div>
  ); */

  return (
    <div>
      <h1>OUR TEAM</h1>
      <Container>
        <Row>
          {users.map((user) => {
            const { id, login, avatar_url } = user;
            return (
              <Col key={id} xs={12} md={6} lg={4}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={avatar_url}
                    style={{ cursor: "pointer", width: "300px" }}
                    onClick={() => navigate(`/team/${user.login}`)}
                  />
                  <Card.Body className="mb-3 d-flex-col text-center justify-content-center">
                    <Card.Title>{login}</Card.Title>
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

export default Team;
