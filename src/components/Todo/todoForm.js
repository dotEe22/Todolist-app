// src/components/TodoForm.js
const TodoForm = ({ newTodoText, onInputChange, onSubmit }) => (
    <form onSubmit={onSubmit} className="mb-4">
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="New todo"
        value={newTodoText}
        onChange={onInputChange}
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
  
  export default TodoForm;
  