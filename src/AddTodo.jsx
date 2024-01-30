import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/sass/AddTodo.scss'

const AddTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState({ description: '', expiringDate: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.description.trim() === '' || newTodo.expiringDate.trim() === '') {
      alert('Please enter both todo name and expiration date.');
      return;
    }

    const todoToAdd = {
      id: todos.length + 1,
      description: newTodo.description,
      expiringDate: newTodo.expiringDate,
      completed: false,
      creationDate: new Date()
    };

    setTodos((prevTodos) => [...prevTodos, todoToAdd]);
    setNewTodo({ description: '', expiringDate: '' });
  };

  return (
    <>
    <button class="nav-btn" onClick={()=> navigate("/")}>View Todos</button>
      <form className="form addForm" onSubmit={handleAddTodo}>
        <label for="add-description">
          Todo Name:
        </label>
          <input
            id="add-description"
            type="text"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
          />
        <label for="add-date">
          Expiration Date:
        </label>
        <input
            id="add-date"
            type="date"
            name="expiringDate"
            value={newTodo.expiringDate}
            onChange={handleInputChange}
          />
          
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
