// src/components/TodoListContainer.js
import React, { useState } from 'react';
import useTodos from '../../hooks/useTodos';
import TodoForm from './todoForm';
import TodoList from './todoList';

const TodoListContainer = ({ user }) => {
  const { todos, loading, error, addNewTodo, toggleTodoCompletion, removeTodo } = useTodos(user.id);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addNewTodo(newTodoText);
      setNewTodoText('');
    }
  };

  if (loading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error}</div>;

  const activeTodos = todos.filter((todo) => !todo.is_complete);
  const completedTodos = todos.filter((todo) => todo.is_complete);

  return (
    <div className="max-w-md mx-auto mt-10">
      <TodoForm
        newTodoText={newTodoText}
        onInputChange={(e) => setNewTodoText(e.target.value)}
        onSubmit={handleAddTodo}
      />
      <div>
        <h2 className="text-xl font-semibold mb-2">Active Tasks</h2>
        <TodoList todos={activeTodos} onToggle={toggleTodoCompletion} onDelete={removeTodo} />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
        <TodoList todos={completedTodos} onToggle={toggleTodoCompletion} onDelete={removeTodo} />
      </div>
    </div>
  );
};

export default TodoListContainer;
