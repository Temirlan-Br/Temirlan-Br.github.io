import React, { useState } from 'react';

export const Todo = ({ todo, deleteTodo, completeTodo }) => {
  // const [editableText, setEditableText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const btnCompleted = () => {
    completeTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  // const handleTextChange = (e) => {
  //   setEditableText(e.target.value);
  // };

  const editText = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="Todo jcsb">
      <div className="todo__item-wrapper category">
        <div className="todo-item">
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={btnCompleted}
            />
            <span
              className={`bubble category ${
                todo.category === 'personal' ? 'personal' : 'business'
              }`}
            ></span>
          </label>
        </div>
        <p className={`${todo.completed ? 'completed' : ''}`}>{todo.text}</p>
      </div>
      <div>
        <button className="btn-edit btn" onClick={editText}>
          Edit
        </button>
        <button className="btn-delete btn" onClick={() => deleteTodo(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};
