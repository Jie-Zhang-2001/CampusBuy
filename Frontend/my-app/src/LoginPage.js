import React, {useState} from "react";
import './LoginPage.css';
import {Button, Container, Form, Row, Col,  Alert, Carousel}  from 'react-bootstrap';
import axios from 'axios';
import {BrowserRouter, Route, Link, Redirect, withRouter} from 'react-router-dom';
import caraImage from './images/LandingCarasoul.jpeg';



// import {Redirect} from 'react-router-dom';


function LoginPage(props){
   
    // toRegisterPage = () => {
        // return <Redirect to="/asd/"/>
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); 

   

    const   sendData = async (e) => {
        setMessage("");
        e.preventDefault();
        
        const data = await axios.post("http://localhost:4000/login",{email,password});
        
        if(data.data==="good"){
            
             props.history.push('/home');
            
            
        }
        if(data.data==="bad"){
            setMessage("Incorrect Email Address or Password, Please Try Again.");
        }
       
    }

    return (
        
        <Container fluid className="container2">
           
            <Row  className="background_row">

            <Col  className="caraouselLogin">
            <Carousel  className = "carousel2" > 
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                // src={caraImage}
                                
                            />
                        </Carousel.Item>
                        
            </Carousel>
            </Col>
            </Row>
          
               
                <div className="loginform">
                    
                    <Form>
                    {/* <div className="upperDiv"  /> */}
                    <div className="text-center" > Campus Buy </div>
                    <div className="lowerDiv" />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password}   onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                        </Form.Group>
                       
                        <Button type="submit" className="loginButton" onClick={ (e) =>   sendData(e)   } >submit </Button>
                        <Form.Group>
                            <Form.Text >
                                Start Trading Within Your Campus!
                            </Form.Text>
                        </Form.Group>
                        <Alert  >{message}</Alert>
                    </Form>
                    </div>
                    
                

           
            


        </Container>
       
    );
}




export default withRouter(LoginPage );