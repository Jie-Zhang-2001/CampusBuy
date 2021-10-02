import React, { useContext, useEffect, useState, Fragment } from "react";
import axios from "axios";
import SignedInHeader from "../Components/SignedInHeader";
import {
  Row,
  Col,
  Container,
 
  ListGroup,
 
  Button,
} from "react-bootstrap";
import classes from "../css/ProductPage.module.css";
import AuthContext from "../store/auth-context";
import {  Redirect } from "react-router";
import { useParams } from "react-router";
import SelfCarousel from "../Components/SelfCarousel";
import Chat from '../Components/Chat'
import ProductCard from "../Components/ProductCard";
import CommentForm from "../Components/CommentForm";
import CommentSection from "../Components/CommentSection";

const ProductPage = () => {
  const ctx = useContext(AuthContext);
 
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [recProducts, setRecProducts] = useState([]);
  

  const [product, setProduct] = useState(null);
  
  async function productsRequest(){
    const response = await axios.post(`${ctx.backendURL}/getProducts`, {
      token: ctx.token,
    });

    setProducts(response.data);
  };

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


  async function  request(){
    const response = await axios.post(`${ctx.backendURL}/getProduct`, {
      token: ctx.token, productId: params.productId
    });
    
    setProduct(response.data);
  };

  useEffect(() => {
    request();
    productsRequest();
  }, []);

  const handlerContactSeller = ()=>{
    Chat(ctx.token,product,ctx.chatContainer);
    ctx.showChatFunct();
  }


  if (ctx.isLoggedIn === false) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
     
      <SignedInHeader />
      <Container fluid='true'>
        <Row style={{backgroundColor:'#87cefa'}}>
          {/*Left Section for displaying product info */}
          <Col sm={12} md={12} lg={12} xl={10}>
            <div className={classes.productName}>{product===null ? 'Product Name': product.productName} </div>
            <div className={classes.productPrice}>Price: ${product===null ? '': product.productPrice} </div>
            <Row className={classes.productInformation}>
              {/* Product Images */}
              <Col xl={7}>
                {product === null ? '': <SelfCarousel  className={classes.selfCarousel}  controls={true} carouselItems={product.productImages.map((imageURL)=>{ return {img: imageURL, alt:String(imageURL)}; })} ></SelfCarousel>}
              </Col>

              {/* Product Information, Descriptions */}
              <Col sm={12} md={12} lg={12} xl={5}>
                <ListGroup className={classes.prodcuctInfo}>
                 
                  <ListGroup.Item className={classes.productDescription}>
                    Description: {product===null ? '': product.productDescrip}
                  </ListGroup.Item>
                  <ListGroup.Item className={classes.sellerInfo}>
                    Seller Information: {product===null ? '': product.productSeller}
                  </ListGroup.Item>
                  <ListGroup.Item className={classes.contactSeller}>
                    <Button onClick={ handlerContactSeller}  >Contact Seller</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            {/* Comment Section */}
            <div className={classes.commentHeadline}>Reviews</div>
            <div style={{height:'25rem', overflow:'overlay'}}>{product && <CommentSection productId={  product.id}/>}</div>
            <Row>
              <Col sm={2} md={2} xl={1}></Col>
              <Col className={classes.commentSection}>
                {product && <CommentForm productId={  product.id} />}
                
              </Col>
              <Col sm={2} md={2} xl={1}></Col>
            </Row>
          </Col>

          {/* Related Products Section */}
          <Col md={12} lg={12} xl={2} style={{backgroundColor:'#39CCCC'}}>
            <Row className='jusify-content-center'>
              {recProducts.map((product,index)=>(
              <Col key={index} className={classes.related}>
                <ProductCard  title={product.productName}
                      description={product.productDescrip}
                      img={product.productImages[0]}
                      id={product.id}
                      price={product.productPrice} ></ProductCard>
              </Col>))}
              
             
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductPage;
