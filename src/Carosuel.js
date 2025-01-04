import React from 'react'
import { Carousel } from 'react-bootstrap';

const Carouselexecution1 = () => 
{
  return (
    <>
    <Carousel fade data-bs-theme='dark'>
        <Carousel.Item>
            <img className='d-block w-100'
            src='public/pic 1.jpg'
            alt='Image no-1'
            ></img>
            <Carousel.Caption className='text-primary'>
                <p className='h1 fw-bold'>Loginpage</p>
                <p>The login page allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.</p>
            </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100'
            src="./pic 2.jpg"
            alt='Image no-1'
            ></img>

        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100'
            src=".\pic 3.jpg"
            alt='Image no-1'
            ></img>

        </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Carouselexecution1;