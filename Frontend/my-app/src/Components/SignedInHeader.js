import React from 'react';
import LogoSlogon from './LogoSlogon';
import { Row, Col, Container, Nav, InputGroup, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/signedInHeader.css'
import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import { useHistory } from 'react-router';
import ChatLogo from './ChatLogo';



const SignedInHeader = () => {
    const ctx = useContext(AuthContext);
    const history = useHistory();
    
  
    const handleSearchClick = ()=>{
      
        history.push('/search');
      
     
      
    }

    return (
      <React.Fragment>
      <ChatLogo/>
      <div className="signedInHeader">
        <Container fluid>
          <Row>
            <Col xs={4} sm={4} md={5} lg={5} xl={4}>
            <Link to='/home'> <LogoSlogon /></Link>
            </Col>
            <Col>
              <InputGroup className="mb-3 searchbar">
                <Form.Control
                  placeholder="Enter keywords"
                  aria-label="searchKeyword"
                  aria-describedby="searchKeyword"
                  value={ctx.searchTarget}
                  onChange={(event)=>{ ctx.setSearchTarget(event.target.value); }}
                ></Form.Control>
                <InputGroup.Append>
                  <Button onClick={handleSearchClick} variant="primary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col xs={4} sm={4} md={2} lg={3} xl={3}>
              <Nav className="justify-content-center" style={{flexWrap:'nowrap'}}>
                <Nav.Item className="navTabs">
                  <Link to="/profile">Account</Link>
                </Nav.Item>
                <Nav.Item className="navTabs">
                  <Link to="/" onClick={()=>{ctx.logout();}} >Log out</Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      </React.Fragment>
    );
}

export default SignedInHeader;