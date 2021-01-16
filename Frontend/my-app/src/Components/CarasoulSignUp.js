import React, { useState } from 'react';
import { Col, Row, Container, Carousel, Form, Button, Card, Alert } from 'react-bootstrap';
import caraImage from '../images/LandingCarasoul.jpeg';
import caraImage2 from '../images/Products.jpg';
import caraImage3 from '../images/gift.jpeg';
import axios from 'axios';

import '../css/landing.css'
const CarasoulSignUp = () => {
    const [ name, setName] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [confirmPassword, setCPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const notifFade = (x) => {
        setTimeout(() => {
            if (x == 1) { //1 for error, 2 for success
                setError(false);
            } else {
                setSuccess(false);
            }
        }, 3000);
    }
    const signUp = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setError(true);
            setMessage("Please complete all fields");
            notifFade(1);
            return;
        }
        if (password != confirmPassword) {
            setError(true);
            setMessage("Please check your password"); 
            notifFade(1);
            return;
        }
        if (password.length < 6) {
            setError(true);
            setMessage("Password should be at least 6 characters"); 
            notifFade(1);
            return;
        }
        const data = await axios.post('http://localhost:4000/signup', { name, email, password, confirmPassword });
        if (data.data == 1) {
            setMessage("Email already registered");
            setError(true);
            notifFade(1);
        } else {
            setMessage("Sucessfully Registered!");
            setSuccess(true);
            notifFade(2);
        }
    }
    return (
        <Container fluid>
            <Row>
            <Alert className="successMessage" variant="success" onClose={() => setError(false)} show={success} dismissible>
                        {errorMessage}
            </Alert>
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
                <div className="signUpForm">
                <Form >
                    <div className="signupmessage">Start Trading Within Your Campus!</div>
                    <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) =>  setCPassword(e.target.value) } />
                        </Form.Group>
                        <Button as="div" className="signUpButton" variant="primary" type="submit" onClick={signUp}>
                            Sign Up
                        </Button>
                        <Alert variant="danger" onClose={() => setError(false)} show={error} dismissible>
                        {errorMessage}
                         </Alert>
                    </Form>
                </div>
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