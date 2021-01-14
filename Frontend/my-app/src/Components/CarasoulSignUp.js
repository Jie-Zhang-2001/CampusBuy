import React from 'react';
import { Col, Row, Container, Carousel, Form, Button, Card } from 'react-bootstrap';
import caraImage from '../images/LandingCarasoul.jpeg';
import caraImage2 from '../images/Products.jpg';
import caraImage3 from '../images/gift.jpeg';

import '../css/landing.css'
const CarasoulSignUp = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="carasoulSignup" lg={12}>
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
                <div className="signUpForm">
                <Form>
                         <div className ="signupmessage">Start Trading Within Your Campus!</div>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                            <Form.Text class="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>University</Form.Label>
                            <Form.Control type="text" placeholder="University" />
                        </Form.Group>
                        <Button as="div" className="signUpButton" variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </Row>
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