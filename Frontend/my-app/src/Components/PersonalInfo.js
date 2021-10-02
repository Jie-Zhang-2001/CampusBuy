import React, { useState, useEffect, useContext } from "react";
import {
  Row,
  
  Button,
  Form,
  Container,
  Image,
} from "react-bootstrap";
import "../css/PersonalInfo.css";
import Account_Logo from "../images/AccLogo.png";
import axios from "axios";
import AuthContext from "../store/auth-context";
import LoadingPage from "../Pages/LoadingPage";
import { useHistory } from "react-router";

const PersonalInfo = () => {
  const [user,setUser] = useState(null);
  const ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [productRecord, setProductRecord] = useState([]);
  const history = useHistory();
  
  async function request(){
    const response = await axios.post(`${ctx.backendURL}/getUser`, {
      token: ctx.token,
    });

    if( response.data.querySuccess ){
        setUser(response.data.user);
        setIsLoading(false);
    }

  };

  
  async function request2(){
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
    request2();
  },[]);
  
  if( isLoading ){
    return <LoadingPage/>;
  }

  const handlleDeleteProduct = async (event)=>{
    const productId = event.target.value;
    const response = await axios.post(`${ctx.backendURL}/deleteProduct`,{token:ctx.token, productId:productId, userEmail:user.email});
    if( response.data.querySuccess ){
        request2();
    }
    
    alert(response.data.message);
    history.go(0);
  }


  return (
    <div fluid="true">
      <Container fluid="true">
        <div fluid="true" className="personalinfo_account_icon">
          <Image
            className="personalinfo_account_image"
            fluid="true"
            src={Account_Logo}
          />
        </div>

        <Row className="personalinfo_row">
          <Form className="personalinfo_row_form">
            <Form.Group>
              <Form.Label> Account Info </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Text>Name: {user.name}</Form.Text>
              <Form.Text>Email: {user.email}</Form.Text>
              <Form.Text>Password (encrypted): {user.password}</Form.Text>
            </Form.Group>
          </Form>
        </Row>
        <Row className="personalinfo_row">
          <Form className="personalinfo_row_form">
            <Form.Group>
              <Form.Label> Products Currently On Sale </Form.Label>
            </Form.Group>

            <Form.Group style={{maxHeight:'20rem',overflow:'overlay'}}>
                {productRecord.map((product,index)=>( <div key={index} style={{display:'flex', justifyContent:'space-between', padding:'1rem', backgroundColor:'#e4ebf1', borderRadius:'1rem', marginBottom:'1rem', marginRight:'2rem'}}><Form.Text>Product Name: {product.productName} </Form.Text><Button value={product.id} onClick={handlleDeleteProduct} >Delete</Button></div> ))}
              
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default PersonalInfo;
