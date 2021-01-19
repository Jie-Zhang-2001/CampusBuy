import React, {useState} from "react";
import '../css/LoginPage.css';
import {Button, Container, Form, Row, Col, Alert}  from 'react-bootstrap';
import axios from 'axios';


function LoginPage(){
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState("");


    const fade = () => {
        setTimeout(() => {
            setError(false);
        }, 3000)
    }

    const sendData = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMessage("Please fill in your email and password!");
            setError(true);
            fade();
            return;
        }
        const data = await axios.post("http://localhost:4000/login", { email, password }, { withCredentials: true, credentials: 'include' });
        if (!data.data.authorized) {
            setError(true);
            fade();
        }
        setMessage(data.data.message);
    }

    return (
        <Container className="container">
            <Row>
                <Col></Col>
                <Col>
                    <div style={{ height: '150px' }} />
                    <div className="text-center" style={{ fontSize: '35px' }}> Campus Buy</div>
                    <div style={{ height: '50px' }} />
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password}   onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </Form.Group>
                        <Alert variant="danger" onClose={() => setError(false)} show={error} dismissible>
                            {errorMessage}
                         </Alert>
                        <Button type="submit" onClick={(e) => sendData(e)} >submit </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
       
    );
}




export default LoginPage;