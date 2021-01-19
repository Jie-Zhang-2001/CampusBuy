import React from 'react'
import { Row, Col, Container, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/header.css';
import LogoSlogon from './LogoSlogon';

const Header = () => {
    return (
        <div className="header">
            <Container fluid>
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
                                <Link to="/login">Login</Link>
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
        </div>
    )
}

export default Header;
