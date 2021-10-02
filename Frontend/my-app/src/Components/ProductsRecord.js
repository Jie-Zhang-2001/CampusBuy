import React, { useEffect, useContext, useState } from "react";
import { Row,   Tab, Tabs } from "react-bootstrap";
import "../css/ProductsRecord.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import AuthContext from "../store/auth-context";

const ProductRecord = () => {
    
  const [productRecord, setProductRecord] = useState([]);
  const ctx = useContext(AuthContext);
  async function request(){
    const response = await axios.post(`${ctx.backendURL}/getProducts`, {
      token: ctx.token,
    });
    const response2 = await axios.post(`${ctx.backendURL}/getUser`, {
      token: ctx.token,
    });
    
    if (response.data !== null && response2.data.querySuccess) {
        
      const relatedProducts = [];
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].productSeller === response2.data.user.email) {
          relatedProducts.push(response.data[i]);
        }
      }
      
      setProductRecord(relatedProducts);
    }
  };

  useEffect(()=>{
    request();
  },[]);
  
  

  return (
    <div>
      <Tabs defaultActiveKey="selling" id="personal_products_record">
        <Tab eventKey="selling" title="Selling">
          <Row className="products_record_row">
            {productRecord.map((product, index) =>{
               
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
            })}
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductRecord;
