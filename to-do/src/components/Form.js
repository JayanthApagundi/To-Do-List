import React from 'react';

const Form = ({ Text, setText, Todos, setTodos, setStatus }) => {
  const TextHandler = (e) => {
    //console.log(e.target.value);
    setText(e.target.value);
  };

  const TodosHandler = (e) => {
    //console.log('Hey');
    e.preventDefault();
    setTodos([
      ...Todos,
      { text: Text, completed: false, id: Math.random() * 1000 },
    ]);
    setText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={Text}
        onChange={TextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={TodosHandler} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
