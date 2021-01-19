import React from 'react';
import { Col, Row, Container, Carousel, Card } from 'react-bootstrap';
import caraImage from '../images/LandingCarasoul.jpeg';
import caraImage2 from '../images/Products.jpg';
import caraImage3 from '../images/gift.jpeg';
import SignUp from './SignUp';
import '../css/landing.css'

const CarasoulSignUp = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="carasoulSignup" xs={0} sm={0} md={0} lg={12}>
                    <Carousel as="div" className = "carousel" controls={false}> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={caraImage}
                                alt="buying"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={caraImage2}
                                alt="products"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={caraImage3}
                                alt="products"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                </Row>
                <SignUp />
            <Row id = "about" className="justify-content-md-center">
                <Col className="cardCol">
                    <Card style={{ width: '10rem' }} />
                    <Card.Body>
                        <Card.Img className = "cardImg" variant="top" src={caraImage3} />
                        <Card.Title>Recommendation</Card.Title>
                        <Card.Text>Hottest items on sale</Card.Text>
                    </Card.Body>
                </Col>
                <Col className="cardCol">
                    <Card style={{ width: '10rem' }} />
                    <Card.Body>
                        <Card.Img className = "cardImg" variant="top" src={caraImage2} />
                        <Card.Title>Trade</Card.Title>
                        <Card.Text>Trade within your comfort</Card.Text>
                        </Card.Body>
                </Col>
                <Col className="cardCol">
                    <Card style={{ width: '10rem' }} />
                    <Card.Body>
                        <Card.Img className = "cardImg" variant="top" src={caraImage} />
                        <Card.Title>Covenience</Card.Title>
                        <Card.Text>Shop in your home</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    );
}

export default CarasoulSignUp;