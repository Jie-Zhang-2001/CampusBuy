import React, {useState} from "react";
import './LoginPage.css';
import {Button, Container, Form, Row, Col}  from 'react-bootstrap';
import axios from 'axios';
// import {Redirect} from 'react-router-dom';


function LoginPage(){
   
    // toRegisterPage = () => {
        // return <Redirect to="/asd/"/>
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const   sendData = async (e) => {
        e.preventDefault();
        console.log(1);
        const data = await axios.post("http://localhost:4000/login",{email,password});

    }

    return (
        
        <Container className="container">
           
            <Row>

            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <div style={{ height: '150px' }} />
                    <div className="text-center" style={{ fontSize: '35px' }}> Campus Buy Login </div>
                    <div style={{ height: '50px' }} />
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password}   onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button type="submit" onClick={ (e) => sendData(e)} >submit </Button>
                    </Form></Col>
                <Col></Col>

            </Row>
            <Row>

            </Row>


        </Container>
       
    );
}




export default LoginPage;