import axios from "axios";
import { Fragment, useState , useContext, useEffect} from "react";
import AuthContext from "../store/auth-context";
import { Form } from "react-bootstrap";


const CommentSection = (props) => {
  const [comments, setComments] = useState([]);
  const ctx = useContext(AuthContext);

  async function request(){
      const response = await axios.post(`${ctx.backendURL}/getComments`,{token:ctx.token, productId: props.productId});
      if(response.data.querySuccess){
        setComments(response.data.comments)
      }
      else{
        alert(response.data.message);
      }
  }

  useEffect(()=>{
      request();
  },[]);

  return (
    <Fragment>
      {comments.map((comment, index) => (
        <Form  style={{padding:'1rem', background:'#7FDBFF', margin:'1rem', borderRadius:'1rem'}} key={index} >
          <Form.Group style={{margin:'0'}}>
            <Form.Label>User: {comment.user}</Form.Label>
          </Form.Group>
          <Form.Group style={{ maxHeight: "20rem", overflow: "overlay", margin:'0' }}>
            <div
             
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                backgroundColor: "#e4ebf1",
                borderRadius: "1rem",
                marginBottom: "0",
                marginRight: "2rem",
              }}
            >
              <Form.Text>Comment: {comment.comment} </Form.Text>
            </div>
          </Form.Group>
        </Form>
      ))}
    </Fragment>
  );
};

export default CommentSection;
