import React from 'react';
import Gift_Image from '../images/gift.jpeg';
import { Row, Col, Image, Button,Form, Tab, Tabs } from 'react-bootstrap';
import '../css/ProductsRecord.css';


function ProductRecord(){
    return(
        <div>
            <Tabs defaultActiveKey="purchased" id="personal_products_record">
                <Tab eventKey="purchased" title="Purchased">
                    <Row className="products_record_row">
                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="onSale" title="On Sale">
                    <Row className="products_record_row">
                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="sold" title="Sold" >
                    <Row className="products_record_row">
                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div fluid className="home_body_recommendation_form">
                                <Form>
                                    <Form.Group >
                                        <Image fluid src={Gift_Image} />
                                    </Form.Group>

                                    <div className="home_body_recommendation_text">
                                        <Form.Group>
                                            <Form.Label> Item 1 </Form.Label>
                                            <Form.Text> Description for item 1 </Form.Text>
                                        </Form.Group>

                                        <Form.Group>
                                            <Button> Go Somewhere </Button>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    );
}

export default ProductRecord;