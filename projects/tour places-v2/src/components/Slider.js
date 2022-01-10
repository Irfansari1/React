import React from "react";
import { Carousel } from "react-bootstrap";
import time from "../img/time.jpg";
import voyages from "../img/voyages.jpg";
import world from "../img/world.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <img className="d-block w-100" src={time} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={voyages} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={world} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
