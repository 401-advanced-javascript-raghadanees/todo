import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import './todo.scss';
import useAjax from '../hooks/useAjax.js';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo'; //lab Api
// const todoAPI = 'https://as-app-server.herokuapp.com/api/v1/todo';

const ToDo = () => {

  const [list, setList] = useState([]);

  const [getTask, postTask, putTask, deleteTask] = useAjax(list, setList);
  

  const _addItem = (item) => {
    item.due = new Date();
    postTask(todoAPI, item)
    // fetch(todoAPI, {
    //   method: 'post',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(item)
    // })
    //   .then(response => response.json())
    //   .then(savedItem => {
    //     setList([...list, savedItem])
    //   })
    //   .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      putTask(url, item);
    }
    //   fetch(url, {
    //     method: 'put',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(item)
    //   })
    //     .then(response => response.json())
    //     .then(savedItem => {
    //       setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
    //     })
    //     .catch(console.error);
    // }
  };

  const _getTodoItems = () => {
    getTask(todoAPI);
    // fetch(todoAPI, {
    //   method: 'get',
    //   mode: 'cors',
    // })
    //   .then(data => data.json())
    //   .then(data => setList(data.results))
    //   .catch(console.error);
  };

  useEffect(_getTodoItems, []);

  const _deleteItem = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      let url = `${todoAPI}/${id}`;
      deleteTask(url, id);
    }
  }

  return (
    <>
    <Nav variant="tabs" defaultActiveKey="/home" style={{backgroundColor: 'rgb(238, 238, 245)'}}>
  <Nav.Item>
    <Nav.Link href="/home">HOME</Nav.Link>
  </Nav.Item>
  
  
</Nav>
      <header>
        {/* <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          {console.log('list ----->', list)} 
        </h2> */}
         <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" style={{ padding: 0.5 +'rem'}}>
             {console.log('list ----->', list)} 
             
             There are {list.filter((item) => !item.complete).length }  Items To Complete
         </Navbar.Brand>
        </Navbar> 

      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
