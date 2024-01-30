import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import EditTodo from './EditTodo'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editTodo,setEditTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../todos.json');
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching todos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div className="main">
        <h1>TODO LIST</h1>
        <Routes>
          <Route path="/" element={<TodoList todos={todos} setTodos={setTodos} loading={loading} setEditTodo={setEditTodo}/>} />
          <Route path="/add" element={<AddTodo todos={todos} setTodos={setTodos} />} />
          <Route path="/edit" element={<EditTodo todos={todos} setTodos={setTodos} editTodo={editTodo}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default TodoApp;
