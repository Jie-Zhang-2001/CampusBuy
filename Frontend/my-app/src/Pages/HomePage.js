import React from 'react';
import Footer from '../Components/Footer';
import LogoSlogon from '../Components/LogoSlogon';
import Account_Logo from '../images/Account_Logo.png';
import Gift_Image from '../images/gift.jpeg';
import { Row, Col, Container, Nav, Dropdown, DropdownButton, Image, Button,Form, FormControl, NavDropdown, Navbar, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Container className='header' fluid>
                <Row>
                    <Col xs={9} sm={9} md={9} lg={6} xl={9} >
                       <Link to='/'> <LogoSlogon /></Link>
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={6} xl={3} className="d-none d-lg-block">
                        <Nav defaultActiveKey="/home" className="justify-content-center">
                            <Nav.Item className ="navTabs">
                                <a href="#about" className = "about">About</a>
                            </Nav.Item>
                            <Nav.Item className ="navTabs">
                                <Link to="/login"><Image fluid className='account_logo' src={Account_Logo}  roundedCircle/></Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="d-lg-none" xs={3} sm={3} md={3}>
                        <DropdownButton id="dropdown-basic-button" title ="Sign Up">
                            <Dropdown.Item><Link to='/login'>Login</Link></Dropdown.Item>
                            <Dropdown.Item><Link to='/register'>Sign Up</Link></Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
            
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