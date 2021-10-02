import {  Button, Card } from "react-bootstrap";
import classes from "../css/ProductCard.module.css";
import { useHistory } from "react-router";

const ProductCard = (props) => {
  const history = useHistory();
  return (
    
    <Card className={classes.productCard} style={{ width: "18rem", backgroundColor:'#CAFAFE' }}>
      <Card.Img  className={classes.cardImage} variant="top" src={props.img} />
      <Card.Body className={classes.cardBody}>
        <Card.Title className={classes.cardTitle}>{props.title}</Card.Title>
        <Card.Text className={classes.cardText}>{props.description}</Card.Text>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Button  className={classes.cardButton}
          onClick={() => {
            history.push(`/products/${props.id}`);
          }}
          variant="primary"
        >
          Shop
        </Button>
        <Card.Subtitle>Price: ${props.price}</Card.Subtitle>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
