/*eslint-disable no-unused-vars */

import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import image1 from '../../assets/image1.jpg'
import images2 from '../../assets/images2.jpg.png'

import image3 from '../../assets/image3.jpg'
import { Container } from 'react-bootstrap';
const Banner = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                <img
                        className="d-block w-100 h-100"
                        src={image1}
                        alt="First slide"
                    />
                    
                    <Carousel.Caption className='mb-16'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdumNulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
       
        </Container>
    );
};

export default Banner;
