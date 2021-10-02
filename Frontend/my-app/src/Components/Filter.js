import React from "react";
import { Form } from "react-bootstrap";
import classes from "../css/Filter.module.css";

const Filter = (props) => {


  const handlePriceMinChange = (event) => {
    if(event.target.value.length > 0){
      props.setMinPrice(event.target.value);
    }
    else{
      props.setMinPrice('');
      event.target.value = '';
    }
      
    
  };

  const handlePriceMaxChange = (event) => {
    if(event.target.value.length >0){
      props.setMaxPrice(event.target.value);
    }
    else{
      props.setMaxPrice('');
      event.target.value = '';
    } 
    
  };

  

  const categories = [
    {
      label: 'Eletronic',
      id: '01'
    },
    {
      label: 'Food',
      id: '02'
    },
    {
      label: 'Liquid',
      id: '03'
    },
    {
      label: 'Game',
      id: '04'
    },
    {
      label: 'Book',
      id: '05'
    },
    {
      label: 'Pharmacy',
      id: '06'
    },
    {
      label: 'Appliance',
      id: '07'
    },
    {
      label: 'Account',
      id: '08'
    },
    {
      label: 'Cloth',
      id: '09'
    },
    {
      label: 'House',
      id: '10'
    },
    {
      label: 'Other',
      id: '11'
    }
  ];


  const handleCheckboxChange = (event)=>{
    if(event.target.checked){
      props.selectCategory(event.target.labels[0].innerHTML);
    }
    else{
      props.deselectCategory(event.target.labels[0].innerHTML);
    }
   
    
  };

  return (
    <div className={classes.filterBox}>
      <div className={classes.divider}>Category</div>
      <div>
      {categories.map((category, index)=> <Form.Check key={index} onChange={handleCheckboxChange} label={category.label} id={category.id} /> )}
      </div>
     
      <div className={classes.divider}>Price Range</div>
      <Form.Label> Min: </Form.Label><Form.Control value={props.minPrice} type='number' onChange={handlePriceMinChange} /> 
      <Form.Label> Max: </Form.Label><Form.Control  value={props.maxPrice} type='number'  onChange={handlePriceMaxChange}/> 
     
      
    </div>
  );
};

export default Filter;
