import React, { useContext, useEffect, useState } from "react";
import SignedInHeader from "../Components/SignedInHeader";

import Footer from "../Components/Footer";
import Filter from "../Components/Filter";
import { Row, Col, Container,  Button, Pagination } from "react-bootstrap";
import classes from "../css/SearchPage.module.css";
import ProductCard from "../Components/ProductCard";

import AuthContext from "../store/auth-context";
import { Redirect } from "react-router";
import axios from "axios";
import LoadingPage from "./LoadingPage";

const SearchPage = (props) => {
  const ctx = useContext(AuthContext);
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dataLimit = 10;
  
  const request = async () => {
    
    if( ctx.searchTarget.length <1 ){
     
      const response = await axios.post(`${ctx.backendURL}/getProducts`, {
        token: ctx.token,
      }); 
     
      setProducts(response.data);
    }
    else{
    
      const response = await axios.post(`${ctx.backendURL}/searchProducts`, {
        token: ctx.token, target: ctx.searchTarget
      });
    
      setProducts(response.data.searchResult);
    }
    
    if( isLoading ){
      setIsLoading(false);
    }
    
  };

  useEffect(()=>{
    request();
  },[ctx.searchTarget]);

  const handlePrevClick = ()=>{
    if( currentPage > 1 ){
      setCurrentPage(currentPage-1);
    }
  }

  const handleNextClick = ()=>{
    var maxPages = Math.ceil(products.length / dataLimit);
    if( currentPage+1 <= maxPages ){
      setCurrentPage(currentPage+1);
    }
  }

  useEffect( ()=>{
    
  } ,[selectedCategories]);

  if (ctx.isLoggedIn === false) {
   
    return <Redirect to="/login" />;
  }

  if( isLoading ){
    return ( <LoadingPage/> );
  }

  const selectCategory = ( category )=>{
    setSelectedCategories( (prevState)=>{
      return [...prevState, category];
    } );
  }

  const deselectCategory = ( category )=>{
    setSelectedCategories( (prevState)=>{
      return prevState.filter( (value)=>{
        if( value === category){
          return false;
        }
        else{
          return true;
        }
      } );
    } );
  }
  
  const categoryFilter = (product)=>{
    if( selectedCategories.length <1 ){
      return true;
    }
    if( selectedCategories.includes(product.productCategory) ){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <React.Fragment>
      <SignedInHeader />
      <Container style={{backgroundColor:'#D1E8E2', maxWidth:'100vw'}} fluid="true">
        <Row style={{margin:'0'}}>
        <Filter selectCategory={selectCategory} deselectCategory={deselectCategory} minPrice={minPrice} maxPrice={maxPrice}  setMinPrice={setMinPrice}  setMaxPrice={setMaxPrice} />

        <Col className={classes.mainBodyCol}>
          <Row className={classes.mainBodyRow}>
            
            {products.filter( categoryFilter ).filter((product)=> product.productPrice >= (String(minPrice).length >0 ?  minPrice:0) &&  product.productPrice <= (String(maxPrice).length >0 ? maxPrice: Number.MAX_VALUE) ).map((product, index) => {
                if( (currentPage-1) * dataLimit <= index && index < currentPage * dataLimit ){
                 
                  return (
              
                    <ProductCard
                      key={index}
                      title={product.productName}
                      description={product.productDescrip}
                      img={product.productImages[0]}
                      id={product.id}
                      price={product.productPrice}
                    ></ProductCard>
                  );
                }
                else{
                  return(<React.Fragment/>);
                }

            })}
            
          </Row>
          <div className={classes.pagination} style={{display:'flex',justifyContent:'center'}}><Button onClick={handlePrevClick}>Prev</Button><Button disabled>{currentPage}</Button><Button onClick={handleNextClick}>Next</Button></div>
        </Col>
        </Row>
        <Row className={classes.footerRow}>
            <Footer />
          </Row>
      </Container>
      <Pagination />
    </React.Fragment>
  );
};

export default SearchPage;
