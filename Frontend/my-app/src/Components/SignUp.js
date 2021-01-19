import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const SignUp = (props) => {
    useEffect(() => {
        signUpFormCss();
    }, [props.history.location.pathname]);
    
    const signUpFormCss = () => {
        if (props.history.location.pathname === '/register') {
            require('../css/SignUp.css');
        } else {
            require('../css/landing.css');
        }
    }
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setCPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const notifFade = (x) => {
        setTimeout(() => {
            if (x == 1) { //1 for error, 2 for success
                setError(false);
            } else {
                setSuccess(false);
            }
        }, 3000);
    }

    const signUp = async () => {
        if (!name || !email || !password || !confirmPassword) {
            setError(true);
            setMessage("Please complete all fields");
            notifFade(1);
            return;
        }
        if (password != confirmPassword) {
            setError(true);
            setMessage("Please check your password");
            notifFade(1);
            return;
        }
        if (password.length < 6) {
            setError(true);
            setMessage("Password should be at least 6 characters");
            notifFade(1);
            return;
        }
        const data = await axios.post('http://localhost:4000/signup', { name, email, password, confirmPassword });
        if (data.data == 1) {
            setMessage("Email already registered");
            setError(true);
            notifFade(1);
        } else {
            setMessage("Sucessfully Registered!");
            props.history.push('/login');
            setSuccess(true);
            notifFade(2);
        }
    }
    return (
        <div>
            <Alert className="successMessage" variant="success" onClose={() => setError(false)} show={success} dismissible>
                {errorMessage}
            </Alert>
            <div className="signUpForm">
                <Form >
                    <div className="logo">Campus Buy</div>
                    <div className="signupmessage">Start Trading Within Your Campus!</div>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} />
                    </Form.Group>
                    <Button as="div" className="signUpButton" variant="primary" type="submit" onClick={signUp}>
                        Sign Up
                    </Button>
                    <Alert variant="danger" onClose={() => setError(false)} show={error} dismissible>
                        {errorMessage}
                    </Alert>
                </Form>
            </div>
        </div>
    );
};

export default withRouter(SignUp);