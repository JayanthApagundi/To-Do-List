import React from 'react';

const Todo = ({ text, todo, Todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(Todos.filter((e) => e.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      Todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
