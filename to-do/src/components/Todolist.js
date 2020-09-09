import React from 'react';

//components
import Todo from './Todo';

const Todolist = ({ Todos, setTodos, filter }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filter.map((todo) => (
          <Todo
            setTodos={setTodos}
            Todos={Todos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
