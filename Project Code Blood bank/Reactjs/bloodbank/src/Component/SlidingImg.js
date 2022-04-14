import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  
export default function SlidingImg() {
  return (
    
    <div style={{display:'block', width:"100%", padding: 30 }}>
      <h4>Blood Donation Camps</h4>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
src="/img/camp1.png"
            alt="Image One"
            width="100%"
            height="500px"
          />
          <Carousel.Caption>
            <h3 style={{color:"black"}}>1</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://wallpapercave.com/wp/wp4323467.jpg"
            alt="Image Two"
            height='500px'
          />
          <Carousel.Caption>
            <h3 style={{color:"black"}}>2</h3>
         </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://i0.wp.com/nationalday.in/wp-content/uploads/2021/05/World-Blood-Donor-Day.jpg?resize=1024%2C550&ssl=1"
            alt="Image Two"
            height='500px'
          />
          <Carousel.Caption>
            <h3 style={{color:"black"}}>3</h3>
         </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>

  );
}