

import { Form , Button} from "react-bootstrap";
import axios from "axios";
import AuthContext from "../store/auth-context";
import { useContext, useState } from "react";
import { useHistory } from "react-router";

const CommentForm = (props)=>{
    const ctx = useContext(AuthContext);
    const history = useHistory();
    const [comment, setComment] = useState('');

    const request = async ()=>{
        const response = await axios.post(`${ctx.backendURL}/postComment`,{token:ctx.token, productId: props.productId, comment: comment  }); 
        alert(response.data.message);
        setComment('');
        history.go(0);
    }

    return(<Form.Group style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', borderTop:'1px solid black'}}>
        <Form.Label style={{fontWeight:'bold', fontSize:'2rem'}}> Comment: </Form.Label>
        <Form.Control as="textarea" value={comment} onChange={(event)=>{ setComment(event.target.value) }} style={{margin:'1rem', height:'10rem'}}   /> 
        <Button onClick={request}>Submit</Button>
    </Form.Group>);
}

export default CommentForm;