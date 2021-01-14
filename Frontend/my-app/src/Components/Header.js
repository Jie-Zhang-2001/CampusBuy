import React from 'react'
import { Row, Col, Container, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import '../css/header.css';
import LogoSlogon from './LogoSlogon';

const Header = () => {
    return (
        <div className="header">
            <Container fluid>
                <Row>
                    <Col xs={10} sm={10} md={10} lg={6} xl={9} >
                        <LogoSlogon />
                    </Col>
                    <Col xs={0} sm={0} md={0} lg={6} xl={3} className="d-none d-lg-block">
                        <Nav defaultActiveKey="/home" className="justify-content-center">
                            <Nav.Item className ="navTabs">
                                <a href="#about" className = "about">About</a>
                            </Nav.Item>
                            <Nav.Item className ="navTabs">
                                <Nav.Link>Login</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="d-lg-none" xs={2} sm={2} md={2}>
                        <DropdownButton id="dropdown-basic-button" title ="">
                                <Dropdown.Item>About</Dropdown.Item>
                                <Dropdown.Item>Login</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;
