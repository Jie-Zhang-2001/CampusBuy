import React from 'react';
import SignedInHeader from '../Components/SignedInHeader';
import Footer from '../Components/Footer';
import Filter from '../Components/Filter';
import { Row, Col, Container, Card, Button, Pagination } from 'react-bootstrap';
import '../css/search.css';
import exampleImg from '../images/gift.jpeg';

const SearchPage = () => {
    return (
      <div>
        <SignedInHeader />
        <Container fluid>
          <Row>
            <Col lg={2} xl={2}>
              <Filter />
            </Col>
            <Col lg={10} xl={10}>
              <Row className="products" xl={4}>
                <Col>
                  <Card className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                            </Col>
                            <Col>
                  <Card className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                            </Col>
                            <Col>
                  <Card className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                            </Col>
                            <Col>
                  <Card  className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                            </Col>
                            <Col>
                  <Card className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                            </Col>
                            <Col>
                  <Card className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                            </Col>
                            <Col>
                  <Card className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                            </Col>
                            <Col>
                  <Card className="product" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImg} />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
                </Row>

            </Container>
            <Pagination />
        <Footer />
      </div>
    );
}

export default SearchPage;