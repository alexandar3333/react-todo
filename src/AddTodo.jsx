import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/sass/AddTodo.scss'

const AddTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({ todoName: '', expirationDate: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.todoName.trim() === '' || newTodo.expirationDate.trim() === '') {
      alert('Please enter both todo name and expiration date.');
      return;
    }

    const todoToAdd = {
      id: todos.length + 1,
      description: newTodo.todoName,
      expiringDate: newTodo.expirationDate,
      completed: false,
      creationDate: new Date().toISOString(),
    };

    setTodos((prevTodos) => [...prevTodos, todoToAdd]);
    setNewTodo({ todoName: '', expirationDate: '' });
  };

  return (
    <>
    <button onClick={()=> navigate("/")}>View Todos</button>
      <form className="addForm" onSubmit={handleAddTodo}>
        <label>
          Todo Name:
          <input
            type="text"
            name="todoName"
            value={newTodo.todoName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="date"
            name="expirationDate"
            value={newTodo.expirationDate}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
