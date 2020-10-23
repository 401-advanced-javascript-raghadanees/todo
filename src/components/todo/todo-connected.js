import React, { useEffect, useState, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './todo.scss';
import useAjax from '../hooks/useAjax.js';
import { SettingsContext } from '../../context/settings/context';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo'; //lab Api
// const todoAPI = 'https://as-app-server.herokuapp.com/api/v1/todo';
const todoAPI = 'https://todo-api-laith.herokuapp.com/api/v1/todos';

const ToDo = () => {
  const settingsContext = useContext(SettingsContext);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
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

  };

  const _getTodoItems = () => {
    getTask(todoAPI);
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
      <Nav variant="tabs" defaultActiveKey="/home" style={{ backgroundColor: 'rgb(238, 238, 245)' , paddingLeft: '5%' }}>
        <Nav.Item style={{ paddingLeft: 0.5 + 'rem'}}>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{  paddingLeft: 0.5 + 'rem' }}>
          <Nav.Link href="/home">SIGN UP</Nav.Link>
        </Nav.Item>
      </Nav>

      <header style={{ padding: 0.5 + 'rem', marginRight: '4%', marginLeft: '4%' }}>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            {console.log('list ------->>>>', list)}

             There are {list.filter((item) => !item.complete).length}  tasks to complete and  {list.filter((item) => item.complete).length} completed tasks
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
            page={page}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
          <div className='ml-5'>
            <button type="button" className={page === 1 && list.filter(i => settingsContext.showComplete ? true : !i.complete).length >= settingsContext.tasksPerPage ? 'd-none btn btn-secondary mr-2' : ' btn btn-secondary mr-2'} onClick={() => { setPage(page - 1) }}>previous</button>

            <button type="button" className={Math.ceil(list.filter(i => settingsContext.showComplete ? true : !i.complete).length / settingsContext.tasksPerPage) === page ? 'd-none btn btn-secondary mr-2' : ' btn btn-secondary mr-2'} onClick={() => { setPage(page + 1) }}>next
            {/* {console.log('Math.ceil(((((', (Math.ceil(list.filter(i => settingsContext.showComplete ? true : !i.complete).length / settingsContext.tasksPerPage) === page ? 'd-none btn btn-secondary mr-2' : ' btn btn-secondary mr-2'))} */}
            </button>
          </div>
        </div>
      </section>

      <footer class="page-footer font-small blue">
      <Nav variant="tabs" defaultActiveKey="/home" style={{ backgroundColor: 'rgb(210, 210, 215)' }}>
        <div class="footer-copyright text-center py-3">© 2020 Copyright ToDo </div>
        </Nav>
      </footer>
    </>
  );
};

export default ToDo;
