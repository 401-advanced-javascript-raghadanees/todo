import React from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';
import './style.css';
function TodoList(props) {
  return (
    <>
      <ListGroup style={{ width: '26rem' }} className='ml-5'>
        {props.list.map(item => (

          <ListGroup.Item variant={item.complete ? 'success' : 'secondary'} key={item._id} onClick={() => props.handleComplete(item._id)} className='mb-2'>
            <Card style={{ width: '23.5rem' }} >
            {/* {item.complete ? <Button style={{ width: '6rem' , height: '2.2rem' }} variant="success">complete</Button> : <Button style={{ width: '6rem' , height: '2.2rem' }} variant="danger">pending</Button> } */}
            <Button style={{ width: '6rem' , height: '2.2rem' }} variant={item.complete ? 'success' : 'danger'}> complete </Button>
              <Card.Body style={{ width: '23.5rem' }}>
              <Button style={{ width: '3rem' ,padding: '0rem', margin: 0 +'rem' , float: 'left' }} variant="primary" className="float-right" onClick={() => props.handleDelete(item._id)}>  {console.log('list item._id ----->', item._id)}X</Button>

                {/* <Card.Title>{item.complete ? 'complete' : 'pending'} {console.log('list item ----->', item)} </Card.Title> */}
                <Card.Subtitle className="mb-2 bottom">{item.assignee}</Card.Subtitle>
                <Card.Text>
                 <p>{item.text}</p> 
                 <p style={{ fontSize: '0.6rem' , float: 'left' }}>Difficulty : {item.difficulty}</p> 
                </Card.Text>
              </Card.Body>
            </Card>


          </ListGroup.Item>
        ))}
      </ListGroup>
    </>



  );
}

export default TodoList;

// function TodoList(props) {
//     return (
//       <ListGroup>
//         {props.list.map(item => (
//           <ListGroup.Item style={{width: 27 + 'rem'}} variant={item.complete ? "danger" : "success"}
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     );
// }
// export default TodoList;

