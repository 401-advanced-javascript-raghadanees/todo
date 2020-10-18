import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
function TodoList(props) {
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item variant={item.complete ? "danger" : "success"}
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
}
export default TodoList;


// // {console.log('props',props)}

//   props.list.map(itemList => (
//     <ul>
//       {itemList.map(item => (
//         <li
//           className={`complete-${item.complete.toString()}`}
//           key={item._id}
//         >
//           <span onClick={() => props.handleComplete(item._id)}>
//             {item.text}
//           </span>
//         </li>
//       ))}
//     </ul>
//   ))


// return (
//   <ul>

//     {props.list.map(item => (
//       <li
//         className={`complete-${item.complete}`}
//         // className={`complete-${item.complete.toString()}`}
//         key={item._id}
//       >
//         <span onClick={() => props.handleComplete(item._id)}>
//           {item.text}
//         </span>
//       </li>
//     ))}
//   </ul>
// );
// }


// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default TodoList;
