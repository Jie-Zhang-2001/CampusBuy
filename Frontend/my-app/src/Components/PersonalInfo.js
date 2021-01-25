import React from 'react';
import { Row, Col, Tab, ListGroup, Form, Container, Image} from 'react-bootstrap';
import '../css/PersonalInfo.css';
import Account_Logo from '../images/Account_Logo.png';

function PersonalInfo(){
    return(
        <div fluid>
            <Container fluid>
                <div fluid className="personalinfo_account_icon">
                <Image className="personalinfo_account_image" fluid src={Account_Logo}  />
                </div>
                
                <Row className="personalinfo_row">
                    <Form className="personalinfo_row_form">
                        <Form.Group>
                            <Form.Label> Account Info </Form.Label>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text>Name: </Form.Text>
                            <Form.Text>Email: </Form.Text>
                            <Form.Text>Password: </Form.Text>
                        </Form.Group>
                    </Form>
                </Row>
                <Row className="personalinfo_row">
                    <Form className="personalinfo_row_form">
                        <Form.Group>
                            <Form.Label> Contact Info </Form.Label>
                        </Form.Group>

                        <Form.Group>
                            <Form.Text>Phone: </Form.Text>
                            <Form.Text>Address: </Form.Text>
                            <Form.Text>Fax: </Form.Text>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
        </div>
    );
}

export default PersonalInfo;