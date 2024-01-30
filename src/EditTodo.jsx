import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/sass/AddTodo.scss'

const EditTodo = ({ editTodo, setTodos }) => {
    const [newTodo, setNewTodo] = useState({ description: editTodo.description, expiringDate: editTodo.expiringDate });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTodo((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditTodo = (e) => {
        e.preventDefault();

        if (newTodo.description.trim() === '' || newTodo.expiringDate.trim() === '') {
            alert('Please enter both todo name and expiration date.');
            return;
        }

        const todoToEdit = {
            ...editTodo,
            description: newTodo.description,
            expiringDate: newTodo.expiringDate,
        };

        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === editTodo.id ? todoToEdit : todo
            )
        );
        setNewTodo({ description: '', expiringDate: '' });
    };

    return (
        <>
            <button class="nav-btn" onClick={() => navigate("/")}>View Todos</button>
            <form className="form editForm" onSubmit={handleEditTodo}>
                <label for="edit-description">
                    Todo Name:
                </label>
                <input
                    id="edit-description"
                    type="text"
                    name="description"
                    value={newTodo.description}
                    onChange={handleInputChange}
                />
                <label for="edit-date">
                    Expiration Date:
                </label>
                <input
                    id="edit-date"
                    type="date"
                    name="expiringDate"
                    value={newTodo.expiringDate}
                    onChange={handleInputChange}
                />
                <button type="submit">Edit Todo</button>
            </form>
        </>
    );
};

export default EditTodo;
