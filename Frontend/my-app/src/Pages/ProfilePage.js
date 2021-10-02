import React, {useContext} from 'react';
import { Row, Col, Tab, ListGroup} from 'react-bootstrap';
import SignedInHeader from '../Components/SignedInHeader';
import PersonalInfo from '../Components/PersonalInfo';
import ProductRecord from '../Components/ProductsRecord';
import PostingProduct from '../Components/PostingProduct';
import '../css/ProfilePage.css';
import AuthContext from '../store/auth-context';
import { Redirect } from "react-router";


function ProfilePage(){
    const ctx = useContext(AuthContext);
    if(ctx.isLoggedIn === false){
        return ( <Redirect to='/login' />);
    }

    return(
        <div>
            <SignedInHeader/>

            <Row className="profile_main_body_content">
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#personalinfo">
                    <Row className="profile_main_body_row">
                        <Col sm={2}>
                            <ListGroup>
                                <ListGroup.Item action href="#personalinfo">
                                    Personal Info
                                </ListGroup.Item>
                                
                                <ListGroup.Item action href="#products">
                                    Products
                                </ListGroup.Item>

                                <ListGroup.Item action href="#posting">
                                    Posting
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#personalinfo">
                                    <PersonalInfo />
                                </Tab.Pane>
                                
                                <Tab.Pane eventKey="#products">
                                    <ProductRecord />
                                </Tab.Pane>

                                <Tab.Pane eventKey="#posting">
                                    <PostingProduct />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>

        </div>
    );
} 



export default ProfilePage;