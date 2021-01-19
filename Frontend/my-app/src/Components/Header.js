import React from 'react'
import { Row, Col, Container, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import '../css/header.css';
import LogoSlogon from './LogoSlogon';

const Header = () => {
    

    return (
        <div className="header">
            <Container fluid>
                <Row>
                    <Col xs={9} sm={9} md={9} lg={6} xl={9} >
                        <LogoSlogon />
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={6} xl={3} className="d-none d-lg-block">
                        <Nav defaultActiveKey="/home" className="justify-content-center">
                            <Nav.Item className ="navTabs">
                                <a href="#about" className = "about">About</a>
                            </Nav.Item>
                            <Nav.Item className ="navTabs">
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item className ="navTabs">
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="d-lg-none" xs={3} sm={3} md={3}>
                        <DropdownButton id="dropdown-basic-button" title ="Sign Up">
                                <Dropdown.Item>About</Dropdown.Item>
                            <Dropdown.Item >Login</Dropdown.Item>
                            <Dropdown.Item >Register</Dropdown.Item>
                            <Dropdown.Item>Sign Up</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;
