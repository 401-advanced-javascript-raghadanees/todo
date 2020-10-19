import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';


function TodoForm(props) {
  // const [item, setItem] = useState({}); // text: value, complete: True...

  // const [handleSubmit, handleInputChange, values] = useForm(handelUseForm);
  // const [handleSubmit, handleInputChange] = useForm((item)=>{props.handleSubmit(item)});
  const [handleSubmit, handleInputChange ] = useForm(handelUseForm);
 
  function handelUseForm(item){ // JS hoisting 
    console.log('handelUseForm,,,,,');
    props.handleSubmit(item);
  };

 
    return (
      <Card style={{marginRight: 8 + 'em', marginLeft: 8 + 'em'}}>
      <Form style={{padding: 2 + 'em'}}>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <Button onClick={handleSubmit} variant="primary" size="lg" active >Add Item</Button>
        </form>
      </Form>
      </Card>
    );
}
export default TodoForm;