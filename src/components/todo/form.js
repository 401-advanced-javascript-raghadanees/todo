import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
function TodoForm(props) {
  const [item, setItem] = useState({});
  const handleInputChange = e => {
    setItem( {...item, [e.target.name]: e.target.value } );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const item1 = {};
    setItem(item1);
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
          <Button variant="primary" size="lg" active >Add Item</Button>
        </form>
      </Form>
      </Card>
    );
}
export default TodoForm;