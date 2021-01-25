import React from 'react';
import Footer from '../Components/Footer';
import Gift_Image from '../images/gift.jpeg';
import { Row, Col, Container, Image, Button,Form, Carousel } from 'react-bootstrap';
import '../css/HomePage.css';
import SignedInHeader from '../Components/SignedInHeader';

const HomePage = () => {
    return (
        <div>
            <SignedInHeader />
           
            <Container fluid className='body'> 
                <Row className='home_body_product_display'>
                    <Col >
                        <Carousel className='home_body_pd_adboard'>
                            <Carousel.Item fluid>
                                <img fluid
                                    className="d-block w-100"
                                    src={Gift_Image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img fluid
                                    className="d-block w-100"
                                    src={Gift_Image}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img fluid
                                    className="d-block w-100"
                                    src={Gift_Image}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

               <Row className="home_body_recommendation">
                   <Col>
                        <div fluid className="home_body_recommendation_form">
                            <Form>
                                <Form.Group >
                                    <Image fluid src={Gift_Image} />
                                </Form.Group>

                                <div className="home_body_recommendation_text">
                                    <Form.Group>
                                        <Form.Label> Item 1 </Form.Label>
                                        <Form.Text> Description for item 1 </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button> Go Somewhere </Button>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>
                   </Col>
                        
                   <Col>
                        <div fluid className="home_body_recommendation_form">
                            <Form>
                                <Form.Group >
                                    <Image fluid src={Gift_Image} />
                                </Form.Group>

                                <div className="home_body_recommendation_text">
                                    <Form.Group>
                                        <Form.Label> Item 1 </Form.Label>
                                        <Form.Text> Description for item 1 </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button> Go Somewhere </Button>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>
                   </Col>
                   
                   <Col>
                        <div fluid className="home_body_recommendation_form">
                            <Form>
                                <Form.Group >
                                    <Image fluid src={Gift_Image} />
                                </Form.Group>

                                <div className="home_body_recommendation_text">
                                    <Form.Group>
                                        <Form.Label> Item 1 </Form.Label>
                                        <Form.Text> Description for item 1 </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button> Go Somewhere </Button>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>
                   </Col>

                   <Col>
                        <div fluid className="home_body_recommendation_form">
                            <Form>
                                <Form.Group >
                                    <Image fluid src={Gift_Image} />
                                </Form.Group>

                                <div className="home_body_recommendation_text">
                                    <Form.Group>
                                        <Form.Label> Item 1 </Form.Label>
                                        <Form.Text> Description for item 1 </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button> Go Somewhere </Button>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>
                   </Col>

               </Row>

            </Container>
            
            <Footer />
        </div>
    );
}

export default HomePage;