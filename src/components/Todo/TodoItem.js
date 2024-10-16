// src/components/TodoItem.js
const TodoItem = ({ todo, onToggle, onDelete }) => (
    <li className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.is_complete}
          onChange={() => onToggle(todo.id, todo.is_complete)}
          className="mr-2"
        />
        <span className={todo.is_complete ? 'line-through' : ''}>{todo.task}</span>
      </div>
      <button onClick={() => onDelete(todo.id)} className="text-red-500">
        Delete
      </button>
    </li>
  );
  
  export default TodoItem; 
  