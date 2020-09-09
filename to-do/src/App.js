import React, { useState, useEffect } from 'react';
import './App.css';

//Components
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [Text, setText] = useState('');
  const [Todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [Todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilter(Todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilter(Todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilter(Todos);
        break;
    }
  };

  const saveLocal = () => {
    localStorage.setItem('Todos', JSON.stringify(Todos));
  };

  const getLocal = () => {
    if (localStorage.getItem('Todos') === null) {
      localStorage.setItem('Todos', JSON.stringify([]));
    } else {
      let store = JSON.parse(localStorage.getItem('Todos'));
      setTodos(store);
    }
  };

  return (
    <div className='App'>
      <header>
        <h1> Jay's To-Do List </h1>
      </header>

      <Form
        Text={Text}
        Todos={Todos}
        setTodos={setTodos}
        setText={setText}
        setStatus={setStatus}
      />

      <Todolist filter={filter} setTodos={setTodos} Todos={Todos} />
    </div>
  );
}

export default App;
