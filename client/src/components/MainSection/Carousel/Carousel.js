import React from "react";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1400, itemsToShow: 4 },
];

function CarouselSlider() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <h1>Our Portfolio</h1>
        <Carousel breakPoints={breakPoints}>
          <img src="/Images/p1.png" alt=""/>
          <img src="/Images/p2.png" alt=""/>
          <img src="/Images/p3.png" alt="" />
          <img src="/Images/p4.png" alt="" />
          <img src="/Images/p5.png" alt="" />
       </Carousel>
      </div>
      </div>
  );
}
 
export default CarouselSlider;