import React, {useState, useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import '../css/LoginPage.css';
import {Button, Form, Alert}  from 'react-bootstrap';
import axios from 'axios';
import AuthContext from "../store/auth-context";
import { Redirect } from "react-router";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setMessage] = useState("");
    const history = useHistory();
    const ctx = useContext(AuthContext);
    if(ctx.isLoggedIn === true){
       
        return <Redirect to='/home' />
    }
    

    
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
        const response = await axios.post(`${ctx.backendURL}/login`, { email, password }, { withCredentials: true, credentials: 'include' });
        
        if( response.data.authorized ){
            ctx.login(response.data.token);
            history.push("/home");
        }
        else{
            setMessage(response.data.message);
            setError(true);
            fade();
        }
        
        
    }

    return (
        <div className="loginPage">
                <div className = "loginForm">
                    <Link to='/'><div className = "logo2"> Campus Buy </div></Link>
                    <div className = "slogon2"> Start Trading Within Your Campus! </div>
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
                        <Button as="div" className = "loginButton" type="submit" onClick={(e) => sendData(e)} >Login</Button>
                    </Form>
                </div>
        </div>
    );
}




export default LoginPage;