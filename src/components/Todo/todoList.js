// src/components/TodoList.js
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </ul>
);

export default TodoList;
