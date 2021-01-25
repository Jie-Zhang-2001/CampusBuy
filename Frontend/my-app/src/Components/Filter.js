import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/filter.css';

const Filter = () => {
    return (
      <div className="filter">
            <Form className="filterBox">
             <div className="divider">Category</div>
              <Form.Check label="Option 1" id="O1" />
              <Form.Check label="Option 2" id="O2" />
                <Form.Check label="Option 3" id="O3" />
                <Form.Check label="Option 4" id="O4" />
              <Form.Check label="Option 5" id="O5" />
              <div className="divider">Condition</div>
              <Form.Check label="Option 1" id="O1" />
              <Form.Check label="Option 2" id="O2" />
              <Form.Check label="Option 3" id="O3" />
               <div className="divider">Price Range</div>
              <Form.Check label="Option 1" id="O1" />
              <Form.Check label="Option 2" id="O2" />
                <Form.Check label="Option 3" id="O3" />
                <div className="divider">Distance</div>
              <Form.Check label="Option 1" id="O1" />
              <Form.Check label="Option 2" id="O2" />
              <Form.Check label="Option 3" id="O3" />
            </Form>

      </div>
    );
}

export default Filter;