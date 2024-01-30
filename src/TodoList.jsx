import Todo from './Todo'
import { useNavigate } from 'react-router-dom';

function TodoList({todos, setTodos, loading,setEditTodo}) {
    const navigate = useNavigate();

    return (
        <>
            <button class="nav-btn" onClick={()=> navigate("/add")}>Add Todo</button>
            <div className='todo-container'>
                {loading && (
                    <p>Loading...</p>
                )}
                {todos.length > 0 && !loading ? todos.map(todo => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
                )):<div>No todos!</div>}
            </div>
        </>
    )
}

export default TodoList