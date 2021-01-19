import React, {useState} from "react";
import {Button, Container, Form, Row, Col,  Alert, Navbar, Nav,FormControl}  from 'react-bootstrap';
import axios from 'axios';
import {BrowserRouter, Route, Link, Redirect, withRouter} from 'react-router-dom';
import './HomePage.css';

function HomePage(){

    return (
        <Container>
            <Row>
            <Col>
                
                </Col>
                <Col className="home_nav_col">
                <Navbar className="home_nav_bar" >
                <Navbar.Brand> Campus Buy </Navbar.Brand>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Recommendation</Nav.Link>
                    <Nav.Link>Forum</Nav.Link>
                </Nav>
                <div className="home_nav_bar_search"/>
                <Form inline> 
                    <FormControl type="text" placeholder="Search" ></FormControl>
                    <Button >Search</Button>
                </Form>
                
                </Navbar>
                </Col>
                <Col>
                
                </Col>
            </Row>
            <Row>
                <Col/>
                <Col className="home_main_center"/>
                <Col/>
            </Row>
            <Row>

            </Row>
        </Container>
    );
}

export default HomePage;