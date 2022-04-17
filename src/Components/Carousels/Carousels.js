import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousels.css'
import caru1 from "../../images/104.jpg";
import caru2 from "../../images/106.jpg";
import caru3 from "../../images/102.jpg";
const Carousels = () => {
  return (
    <div className="carousel-slider">
        <Carousel >
      <Carousel.Item>
        <img style={{height:"600px"}} className="d-block w-100" src={caru1} alt="First slide" />
        <Carousel.Caption>
          <h1 className="fw-bold text-info">WELCOMING YOU TO THE BEST PHOTOGRAPHY SERVICE IN TOWN</h1>
          <h5>I produce professional pictures for my clint. You can hire me for your projects. If you are looking for the best photographer, you are at the right place.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"600px"}} className="d-block w-100" src={caru2} alt="Second slide" />

        <Carousel.Caption>
        <h1 className="fw-bold text-info">I PROVIDE WILD LIFE AND MODEL PHOTOGRAPHY SERVICES TO MY CLINT</h1>
          <p>Heir me for your wedding photography. I will give you the best survices.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"600px"}} className="d-block w-100" src={caru3} alt="Third slide" />

        <Carousel.Caption>
        <h1 className="fw-bold text-info">GET THE BEST PHOTO OF YOURS TODAY</h1>
          <p>
            If you want photography for your products heir me today. You will get what you want.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Carousels;
