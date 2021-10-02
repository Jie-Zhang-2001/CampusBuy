import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AdsThumbnail from "./AdsThumbnail";
import SignUp from "./SignUp";
import classes from "../css/CarasoulSignUp.module.css";
import SelfCarousel from "./SelfCarousel.js";
import Images from "../images/Images.js";


const CarasoulSignUp = () => {
  const adsObjects = [
    {
      title: "Recommendation",
      text: "Hottest items on sale",
      img: Images.Gift,
    },
    {
      title: "Trade",
      text: "Trade within your comfort",
      img: Images.Products,
    },
    {
      title: "Covenience",
      text: "Shop in your home",
      img: Images.LandingCarasoul,
    },
  ];
  
  return (
    <Container fluid>
      <Row >
        <Col className={classes.carouselSignup} xs={0} sm={0} md={0} lg={12}>
        <SelfCarousel  className={classes.selfCarousel}  controls={false} carouselItems={adsObjects} ></SelfCarousel>
        </Col>
      </Row>
      <SignUp />
      <Row id="about" className="justify-content-md-center">
        {adsObjects.map((ads, index) => (
          <Col key={index} className={classes.cardCol}>
            <AdsThumbnail
              title={ads.title}
              text={ads.text}
              img={ads.img}
            ></AdsThumbnail>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarasoulSignUp;
