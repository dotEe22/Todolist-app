// src/hooks/useTodos.js
import { useState, useEffect } from 'react';
import { fetchTodos, addTodo, updateTodoCompletion, deleteTodo } from '../service/todoApi';

const useTodos = (userId) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoading(true);
        const data = await fetchTodos(userId);
        setTodos(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, [userId]);

  const addNewTodo = async (task) => {
    try {
      const newTodo = await addTodo(task, userId);
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleTodoCompletion = async (id, isComplete) => {
    try {
      await updateTodoCompletion(id, !isComplete);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, is_complete: !isComplete } : todo))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { todos, loading, error, addNewTodo, toggleTodoCompletion, removeTodo };
};

export default useTodos;
