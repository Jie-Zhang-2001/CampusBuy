import React from 'react';
import LogoSlogon from './LogoSlogon';
import { Row, Col, Container, Nav, InputGroup, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/signedInHeader.css'

const SignedInHeader = () => {
    return (
      <div className="signedInHeader">
        <Container fluid>
          <Row>
            <Col xs={4} sm={4} md={5} lg={5} xl={4}>
              <LogoSlogon />
            </Col>
            <Col>
              <InputGroup className="mb-3 searchbar">
                <FormControl
                  placeholder="Enter keywords"
                  aria-label="searchKeyword"
                  aria-describedby="searchKeyword"
                />
                <InputGroup.Append>
                  <Button variant="primary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col xs={4} sm={4} md={2} lg={3} xl={3}>
              <Nav className="justify-content-center">
                <Nav.Item className="navTabs">
                  <Link to="/account">Account</Link>
                </Nav.Item>
                <Nav.Item className="navTabs">
                  <Link to="/unknown">Log out</Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default SignedInHeader;