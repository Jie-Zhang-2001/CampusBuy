import { Fragment } from "react";
import classes from '../css/AdsThumbnail.module.css'
import {Card} from 'react-bootstrap'

const AdsThumbnail = (props) => {
  return (
    <Fragment>
      <Card className={classes.card} />
      <Card.Body>
        <Card.Img className={classes.cardImg} variant="top" src={props.img} />
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Fragment>
  );
};

export default AdsThumbnail;
