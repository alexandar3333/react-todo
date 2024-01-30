import { useNavigate } from 'react-router-dom';
import "./assets/sass/Todo.scss"

function Todo({ todo, setTodos, setEditTodo }) {
    const navigate = useNavigate();
    function toggleCompleted() {
        setTodos(prevTodos => prevTodos.map(t => (t.id === todo.id ? { ...t, completed: !t.completed } : t)));
    }

    return (
        <div className="todo" >
            <div>
                <input type="checkbox" checked={todo.completed && true} onChange={toggleCompleted} />
                <label for="myCheckbox" class="checkbox-container">
                    <div class="checkmark"></div>
                </label>
                <div className={todo.completed && "completed-todo"}>{todo.description}</div>
            </div>
            <div>
                <button onClick={handleEdit}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" /></svg></button>
                <button onClick={handleRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                </button>
            </div>
        </div>
    )

    function handleEdit() {
        setEditTodo({ ...todo });
        navigate('/edit')
    }
    function handleRemove() {
        setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    }
}


export default Todo
