/*eslint-disable no-unused-vars */

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/image1.jpg";
import images2 from "../../assets/images2.jpg.png";

import { Container } from "react-bootstrap";
import image3 from "../../assets/image3.jpg";
const Banner = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={image1} alt="First slide" />
          <Carousel.Caption className="mb-16">
            <h3>First slide label</h3>
            <p>A Bangladeshi chef is a culinary professional who specializes in the cuisine of Bangladesh, Bangladeshi cuisine is known for its bold flavors, complex spices, and diverse regional dishes..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={images2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>A Bangladeshi chef typically has a deep understanding of the local ingredients, cooking techniques, and cultural traditions that influence the countrys cuisine. They are skilled in preparing dishes that feature a wide range of spices, herbs, vegetables, meats, and seafood.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                        Bangladeshi dishes that a chef may prepare include biryani (a rice dish with meat or vegetables), dal (lentil soup), chutney (a spicy condiment), and various curries. A Bangladeshi chef may also be skilled in making various types of bread, such as naan and roti.
                        </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
