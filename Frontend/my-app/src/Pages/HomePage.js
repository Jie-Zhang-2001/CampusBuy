import React, { useContext, useState, useEffect } from "react";

import Footer from "../Components/Footer";

import {
  Row,
  Col,
  Container,
 
  Carousel,
} from "react-bootstrap";
import "../css/HomePage.css";
import SignedInHeader from "../Components/SignedInHeader";
import AuthContext from "../store/auth-context";
import { Redirect } from "react-router";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import images from '../images/Images';


const HomePage = () => {
  const ctx = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [recProducts, setRecProducts] = useState([]);
  

  async function request(){
    const response = await axios.post(`${ctx.backendURL}/getProducts`, {
      token: ctx.token,
    });

    setProducts(response.data);
  };

  useEffect(() => {
    request();
  }, []);

  useEffect(()=>{

    if( products.length>4 ){
        const random4 = [];
        while( random4.length <4 ){
            var randomNum = Math.floor(Math.random() * products.length) ;
            if(!random4.includes(randomNum)){
                random4.push(randomNum);
            }
            
        }
        setRecProducts([ products[random4[0]] , products[random4[1]] , products[random4[2]] , products[random4[3]] ]);
    }
    else{
        setRecProducts(products);
    }

      
  },[products]);

  if (ctx.isLoggedIn === false) {
    
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <SignedInHeader />

      <Container fluid="true" className="body">
        <Row className="home_body_product_display" style={{ margin: "0", backgroundColor:'#5D5C61' }}>
          <Col>
            <Carousel className="home_body_pd_adboard">
              <Carousel.Item fluid="true">
                <img
                  fluid="true"
                  className="d-block w-100"
                  src={images.Gift}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  fluid="true"
                  className="d-block w-100"
                  src={images.Mountain}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  fluid="true"
                  className="d-block w-100"
                  src={images.StarSky}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="home_body_recommendation" style={{ margin: "0", backgroundColor:'#97CAEF' }}>
          {recProducts.map((product, index) =>{
              
              return (
                <Col key={index}>
                  <ProductCard
                    title={product.productName}
                    description={product.productDescrip}
                    img={product.productImages[0]}
                    id={product.id}
                    price={product.productPrice}
                  ></ProductCard>
                </Col>
              );
          } )}
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default HomePage;
