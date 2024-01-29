import React, { useState, useEffect } from 'react';
import Todo from './Todo'
import AddTodo from './AddTodo'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState("show");

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
    <div className="main">
      <h1>TODO LIST</h1>
      <button onClick={()=> setToggle(prev => prev==="show" ? "hide" : "show")}>{toggle==="show" ? "Add Todos" : "View Todos"}</button>
      {toggle === "hide" ?
        <AddTodo todos={todos} setTodos={setTodos} /> :
        <div className='todo-container'>
          {loading && (
            <p>Loading...</p>
          )}
          {todos.length > 0 && !loading && todos.map(todo => (
            <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </div>
      }
    </div>
  );
}

export default TodoApp;
