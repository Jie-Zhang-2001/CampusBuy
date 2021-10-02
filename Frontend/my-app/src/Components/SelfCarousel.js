import { Carousel } from "react-bootstrap";
import classes from "../css/SelfCarousel.module.css";


const SelfCarousel = (props) => {
  return (
    <Carousel as="div" className={ `carousel  ${props.className} ${classes.selfCarousel}` } controls={props.controls}>
      {props.carouselItems.map((carouselItem, index) => (
        <Carousel.Item key={index} className={classes.carouselItem}>
          <img className="d-block w-100" src={carouselItem.img} alt={carouselItem.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SelfCarousel;
