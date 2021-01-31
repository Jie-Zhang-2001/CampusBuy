import REACT, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import axios from 'axios';


function PostingProduct(){
    
    const [productName, setProductName] = useState('');
    const [productDescrip, setProductDescrip] = useState('');
    const [productImages, setProductImages] = useState([]);
    const [productPrice, setProductPrice] = useState('');
    const [message, setMessage] = useState('');

    const addNewFile = () => {
        setProductImages(  [productImages,<Form.File/> ]  );
    }

    const postNewProduct = async (e) => {
        e.preventDefault();
        if(!productName || !productPrice || !productImages ){
            setMessage("Can't post because not all information are filled.");
        }
        else{
            const data = await axios.post("http://localhost:4000/postProduct", { productName, productDescrip, productImages ,productPrice  }, { withCredentials: true, credentials: 'include' });
            if (!data.data.authorized) {
                setMessage(data.data.message);
                
            }
            else{
                setMessage("Post new product sucessfully. Good Job!");
            }
           
        }
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label> Product Name: </Form.Label>
                    <Form.Control onChange={(e) => {setProductName(e.target.value)} }/> 
                </Form.Group>

                <Form.Group>
                    <Form.Label> Product Description: </Form.Label>
                    <Form.Control as="textarea" onChange={(e) => {setProductDescrip(e.target.value)}} /> 
                </Form.Group>

                <Form.Group id="posting_product_file">
                    <Form.Label> Product Images: </Form.Label>
                    <Form.File/>
                    {productImages}  
                </Form.Group>

                <Form.Group>
                    <Button onClick={addNewFile}>Add</Button>
                </Form.Group>

                <Form.Group>
                    <Form.Label> Product Price: </Form.Label>
                    <Form.Control onChange={(e) => {setProductPrice(e.target.value)}}/> 
                </Form.Group>

                <Form.Group>
                    <Button onClick={ (e) => postNewProduct(e)}>Post</Button>
                </Form.Group>

                <Alert variant="danger" onClose={() => setMessage('')} show={message} dismissible>
                    {message}
                </Alert>
            </Form>
        </div>
    );
};

export default PostingProduct;