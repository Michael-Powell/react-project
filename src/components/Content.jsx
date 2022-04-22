import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Content = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="" alt="First slide" />
          <Carousel.Caption>
            <h3>Name of test</h3>
            <h4>Date of test</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Content;
