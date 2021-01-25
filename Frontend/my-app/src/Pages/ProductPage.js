import React from 'react';
import SignedInHeader from '../Components/SignedInHeader';
import { Row, Col, Container, Carousel, ListGroup, Card, Button } from 'react-bootstrap';
import exampleImage from '../images/blog5img.jpeg';
import '../css/productpage.css'
const ProductPage = () => {
    return (
      <div>
        <SignedInHeader />
        <Container fluid>
          <Row>
            {/*Left Section for displaying product info */}
            <Col sm={12} md={12} lg={12} xl={10}>
              <div className="productName">Product Name: </div>
              <div className="productPrice">Price: </div>
              <Row className="productInformation">
                {/* Product Images */}
                <Col xl={7}>
                  <Carousel className="productImages">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={exampleImage}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={exampleImage}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={exampleImage}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Col>

                {/* Product Information, Descriptions */}
                <Col sm={12} md={12} lg={12} xl={5}>
                  <ListGroup className="productInfo">
                    <ListGroup.Item className="sellerRate">
                      Seller Rate:{" "}
                    </ListGroup.Item>
                    <ListGroup.Item className="productDescription">
                      Description:
                    </ListGroup.Item>
                    <ListGroup.Item className="sellerInfo">
                      Seller Information:
                    </ListGroup.Item>
                    <ListGroup.Item className="contactSeller">
                      <Button>Contact Seller</Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>

              {/* Comment Section */}
              <div className="commentHeadline">Comments</div>
              <Row>
                <Col sm={2} md={2} xl={1}></Col>
                <Col className="commentSection">
                  <ListGroup className="comments">
                    <ListGroup.Item>Name: </ListGroup.Item>
                    <ListGroup.Item>Rating: </ListGroup.Item>
                    <ListGroup.Item className="commentDesc">
                      Comments:{" "}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={2} md={2} xl={1}></Col>
              </Row>
            </Col>

            {/* Related Products Section */}
            <Col md={12} lg={12} xl={2}>
              <Row className="jusify-content-center">
                <Col className="related">
                  <Card className="relatedProducts" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImage} />
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
                <Col className="related">
                  <Card className="relatedProducts" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={exampleImage} />
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
      </div>
    );
}

export default ProductPage;