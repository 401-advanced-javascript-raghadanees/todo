import React, { useContext } from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';
import './style.css';
import { SettingsContext } from '../../context/settings/context';


function TodoList(props) {
  // in function components you can use useContext(context) 
  // you can use any number of contexts here using useContext
  const settingsContext = useContext(SettingsContext);
  console.log('from list ---->', settingsContext.tasksPerPage, 'list ---->', props.page - 1);
  console.log('list2 ---->', (props.page) * settingsContext.tasksPerPage);

  function compare(a, b) {
    a = a[settingsContext.sort];
    b = b[settingsContext.sort];
    // console.log('settingsContext.sort', settingsContext.sort)
    // console.log('aaaaa', a)
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
    // return ((a > b) ? 1 :(a < b) ? -1 : 0);
  }
  let tasksFilter = props.list.filter((i => settingsContext.showComplete ? i.complete : !i.complete) )
  console.log('tasksFilter--------------------',tasksFilter);

let tasks = tasksFilter
.sort(compare)
.slice((props.page - 1) * settingsContext.tasksPerPage, (props.page) * settingsContext.tasksPerPage)

  return (
    <>
   <Button class="d-inline" style={{ width: '5.5rem', fontSize: '0.7rem', margin: 0.5 + 'rem', float: 'right' }} variant='dark' onClick={() => (settingsContext.showComplete ? settingsContext.setShowComplete(false) : settingsContext.setShowComplete(true))}> Other tasks</Button>
      <ListGroup style={{ width: '26rem' }} className='ml-5'>
     
        {tasks.map(item => (

            <ListGroup.Item variant={item.complete ? 'success' : 'secondary'} key={item._id} onClick={() => props.handleComplete(item._id)} className='mb-2'>
              <Card style={{ width: '23.5rem' }} >
                {/* {item.complete ? <Button style={{ width: '6rem' , height: '2.2rem' }} variant="success">complete</Button> : <Button style={{ width: '6rem' , height: '2.2rem' }} variant="danger">pending</Button> } */}
                <div>
                  <Button class="d-inline" style={{ width: '6rem' }} variant={item.complete ? 'success' : 'danger'}> {item.complete ? 'complete' : 'pending'} </Button>
                  <Button class="d-inline" style={{ width: '2rem' }} variant="light" className="float-right" onClick={() => props.handleDelete(item._id)}>  {console.log('list item._id ----->', item._id)}X</Button>
                </div>

                <Card.Body style={{ padding: '0.4rem' }}>

                  {/* <Card.Title>{item.complete ? 'complete' : 'pending'} {console.log('list item ----->', item)} </Card.Title> */}
                  <Card.Subtitle className="mb-2 bottom">{item.assignee}</Card.Subtitle>
                  <Card.Text>
                    <p>{item.text}</p>
                    <p style={{ fontSize: '0.6rem', float: 'left' }}>Difficulty : {item.difficulty}</p>
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

// <button type="button" className={Math.ceil(list.filter(i => settingsContext.showComplete ? true : !i.complete).length / settingsContext.tasksPerPage) == page ? 'd-none btn btn-secondary mr-2' : ' btn btn-secondary mr-2'} onClick={() => { setPage(page + 1) }}>next</button>

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

