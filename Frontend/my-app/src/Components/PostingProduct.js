import  {useState, useEffect, useContext, useRef} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import axios from 'axios';
import AuthContext from '../store/auth-context';
import {useHistory} from 'react-router'

const PostingProduct = () => {
    
    const [productName, setProductName] = useState('');
    const [productDescrip, setProductDescrip] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('default');
    const [message, setMessage] = useState('');
    const [productImages, setProductImages] = useState(null);
    const ctx = useContext(AuthContext);
    const fileUploaderRef = useRef();
    const history = useHistory();
    
    useEffect(()=> {
        setMessage('');
    },[productName,productDescrip,productPrice,productImages]);

    const fileHandler = async (event) => {
        const files = event.target.files;
        if( files.length > 10 ){
            setMessage('Only 10 images are allowed!');
            event.target.value = null;
            return;
        }
        
        for(let i=0; i<files.length;i++){
            if( files[i].type.split('/')[0] !== 'image' ){
                setMessage('Only image files are allowed!');
                event.target.value = null;
                return;
            }
            
        }
        
        setProductImages(files);
    }

   

    const postNewProduct = async (e) => {
        e.preventDefault();
        if(!productName || !productPrice || !productImages || productCategory === 'default' ){
            setMessage("Can't post because not all information are filled.");
        }
        else{
            const formData = new FormData();
            formData.append('productName',productName.replace(/'/g,`''`));
            formData.append('productDescrip',productDescrip.replace(/'/g,`''`));
            formData.append('productCategory', productCategory);
            formData.append('productPrice',productPrice);
            formData.append('token',ctx.token);
            const images = productImages;
            for(let i=0;i<images.length;i++ ){
                formData.append('productImage',images[i]);
            }
            const response = await axios.post(`${ctx.backendURL}/postProduct`, formData, { withCredentials: true, credentials: 'include', headers: {  "Content-type": "multipart/form-data" } });
            setMessage(response.data.message);
            if (response.data.querySuccess) {
                setProductName('');
                setProductDescrip('');
                setProductImages(null);
                setProductPrice('');
                fileUploaderRef.current.value = null;
                alert(response.data.message);
                history.go(0);
            }

        }
       
    }


    const handlePriceChange = (event)=>{
        if( event.target.value.length >0){
            setProductPrice(event.target.value);
        }
        else{
            setProductPrice('');
            event.target.value= '';
        }
    }

    

    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label> Product Name: </Form.Label>
            <Form.Control
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Product Description: </Form.Label>
            <Form.Control
              as="textarea"
              value={productDescrip}
              onChange={(e) => {
                setProductDescrip(e.target.value);
              }}
            />
          </Form.Group>

          <label style={{marginRight: '1rem'}} htmlFor="categories">Category: </label>

          <select id="categorySelector" onChange={(event)=>{ setProductCategory(event.target.selectedOptions[0].value);}} defaultValue={productCategory}  name="categories" >
            <option disabled value="default">-- select an option --</option>
            <option value="Eletronic">Eletronic</option>
            <option value="Food">Food</option>
            <option value="Liquid">Liquid</option>
            <option value="Game">Game</option>
            <option value="Book">Book</option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Appliance">Appliance</option>
            <option value="Account">Account</option>
            <option value="Cloth">Cloth</option>
            <option value="House">House</option>
            <option value="Other">Other</option>
          </select>

          <Form.Group id="posting_product_file">
            <Form.Label> Product Images: </Form.Label>
            <Form.File multiple ref={fileUploaderRef} onChange={fileHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label> Product Price: </Form.Label>
            <Form.Control
              type="number"
              value={productPrice}
              onChange={handlePriceChange}
            />
          </Form.Group>

          <Form.Group>
            <Button onClick={(e) => postNewProduct(e)}>Post</Button>
          </Form.Group>

          <Alert
            variant="danger"
            onClose={() => setMessage("")}
            show={message.length > 0}
            dismissible
          >
            {message}
          </Alert>
        </Form>
      </div>
    );
};

export default PostingProduct;