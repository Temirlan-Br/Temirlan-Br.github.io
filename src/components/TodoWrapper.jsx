import React from 'react';
import { useState } from 'react';
import { Todo } from './Todo';

const TodoWrapper = () => {
  const [textTodo, setTextTodo] = useState('');
  const [category, setCategory] = useState('personal');
  const [id, setId] = useState(1);
  const [todos, setTodos] = useState([]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    if (textTodo !== '') {
      const newTodo = {
        id: id,
        text: textTodo,
        completed: false,
        category: category === 'personal' ? 'personal' : 'business',
      };
      setTodos([...todos, newTodo]);
      setTextTodo('');
      setId(id + 1);
      console.log(newTodo);
    }
  };
  const deleteBtn = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
  };

  const completeTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoWrapper">
      <h1 className="hello__title mb-20">
        Hello, <span>User</span>
      </h1>
      <div className="create__title">
        <h2 className="mb-20">Create your task</h2>
        <h4 className="mb-20">What's on your todo list?</h4>
      </div>
      <form className="inputForm">
        <input
          type="text"
          className="todoInput mb-20"
          placeholder="Write here your task"
          value={textTodo}
          onChange={(e) => setTextTodo(e.target.value)}
        />
        <h4 className="mb-20">Pick a category</h4>
        <div className="category__wrapper mb-20">
          <label className="category">
            <input
              type="radio"
              name="category"
              id="category"
              value="personal"
              onChange={handleCategoryChange}
              checked={category === 'personal'}
            />
            <span className="bubble personal category"></span>
            <div>Personal</div>
          </label>
          <label className="category">
            <input
              type="radio"
              name="category"
              id="category2"
              value="business"
              onChange={handleCategoryChange}
              checked={category === 'business'}
            />
            <span className="bubble business category"></span>
            <div>Business</div>
          </label>
        </div>
        <button type="submit" className="addBtn btn" onClick={addNewTodo}>
          Add todo
        </button>
      </form>
      {todos.length !== 0
        ? todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={deleteBtn}
              completeTodo={completeTodo}
            />
          ))
        : ''}
    </div>
  );
};

export default TodoWrapper;
