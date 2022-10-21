import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../p5.jpg'
import logo2 from '../../p7.png'

const Carousol = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default Carousol;