// // // import React, { useState, useEffect } from 'react';
// // // import { createClient } from '@supabase/supabase-js';

// // // const supabase = createClient(
// // //   process.env.REACT_APP_SUPABASE_URL,
// // //   process.env.REACT_APP_SUPABASE_ANON_KEY
// // // );

// // // const TodoList = ({ user }) => {
// // //   const [todos, setTodos] = useState([]);
// // //   const [newTodoText, setNewTodoText] = useState('');

// // //   useEffect(() => {
// // //     fetchTodos();
// // //   }, []);

// // //   const fetchTodos = async () => {
// // //     const { data, error } = await supabase
// // //       .from('todos')
// // //       .select('*')
// // //       .eq('user_id', user.id)
// // //       .order('created_at', { ascending: false });

// // //     if (error) console.log('error', error);
// // //     else setTodos(data);
// // //   };

// // //   const addTodo = async (e) => {
// // //     e.preventDefault();
// // //     if (!newTodoText) return;

// // //     const { data, error } = await supabase
// // //       .from('todos')
// // //       .insert({ task: newTodoText, user_id: user.id })
// // //       .single();

// // //     if (error) console.log('error', error);
// // //     else {
// // //       setTodos([data, ...todos]);
// // //       setNewTodoText('');
// // //     }
// // //   };

// // //   const deleteTodo = async (id) => {
// // //     const { error } = await supabase
// // //       .from('todos')
// // //       .delete()
// // //       .match({ id });

// // //     if (error) console.log('error', error);
// // //     else setTodos(todos.filter((x) => x.id !== id));
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto mt-10">
// // //       <form onSubmit={addTodo} className="mb-4">
// // //         <input
// // //           type="text"
// // //           placeholder="New todo"
// // //           value={newTodoText}
// // //           onChange={(e) => setNewTodoText(e.target.value)}
// // //           className="w-full p-2 border rounded"
// // //         />
// // //         <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
// // //           Add Todo
// // //         </button>
// // //       </form>
// // //       <ul>
// // //         {todos.map((todo) => (
// // //           <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
// // //             <span>{todo.task}</span>
// // //             <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
// // //               Delete
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // // export default TodoList;

// // import React, { useState, useEffect } from 'react';
// // import { createClient } from '@supabase/supabase-js';

// //   const supabase = createClient(
// //   process.env.REACT_APP_SUPABASE_URL,
// //   process.env.REACT_APP_SUPABASE_ANON_KEY
// //  );

// // const TodoList = ({ user }) => {
// //   const [todos, setTodos] = useState([]);
// //   const [newTodoText, setNewTodoText] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetchTodos();
// //   }, []);

// //   const fetchTodos = async () => {
// //     try {
// //       setLoading(true);
// //       const { data, error } = await supabase
// //         .from('todos')
// //         .select('*')
// //         .order('created_at', { ascending: false });

// //       if (error) throw error;

// //       setTodos(data || []);
// //     } catch (error) {
// //       console.error('Error fetching todos:', error);
// //       setError('Failed to fetch todos');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const addTodo = async (e) => {
// //     e.preventDefault();
// //     if (!newTodoText.trim()) return;

// //     try {
// //       const { data, error } = await supabase
// //         .from('todos')
// //         .insert({ task: newTodoText, user_id: user.id })
// //         .single();

// //       if (error) throw error;

// //       setTodos([data, ...todos]);
// //       setNewTodoText('');
// //     } catch (error) {
// //       console.error('Error adding todo:', error);
// //       setError('Failed to add todo');
// //     }
// //   };

// //   const deleteTodo = async (id) => {
// //     try {
// //       const { error } = await supabase
// //         .from('todos')
// //         .delete()
// //         .match({ id });

// //       if (error) throw error;

// //       setTodos(todos.filter((x) => x.id !== id));
// //     } catch (error) {
// //       console.error('Error deleting todo:', error);
// //       setError('Failed to delete todo');
// //     }
// //   };

// //   if (loading) return <div>Loading todos...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div className="max-w-md mx-auto mt-10">
// //       <form onSubmit={addTodo} className="mb-4">
// //         <input
// //           className="w-full p-2 border rounded"
// //           type="text"
// //           placeholder="New todo"
// //           value={newTodoText}
// //           onChange={(e) => setNewTodoText(e.target.value)}
// //         />
// //         <button 
// //           type="submit" 
// //           className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// //         >
// //           Add Todo
// //         </button>
// //       </form>
// //       {todos.length === 0 ? (
// //         <p>No todos yet. Add one above!</p>
// //       ) : (
// //         <ul>
// //           {todos.map((todo) => (
// //             <li key={todo?.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
// //               <span>{todo?.task}</span> 
// //               <button 
// //                 onClick={() => deleteTodo(todo.id)} 
// //                 className="text-red-500"
// //               >
// //                 Delete
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default TodoList;

// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// const TodoList = ({ user }) => {
//   const [todos, setTodos] = useState([]);
//   const [newTodoText, setNewTodoText] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTodos();
//   }, [user]);

//   const fetchTodos = async () => {
//     try {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from('todos')
//         .select('*')
//         .eq('user_id', user.id)
//         .order('created_at', { ascending: false });

//       if (error) throw error;

//       setTodos(data || []);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//       setError('Failed to fetch todos');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addTodo = async (e) => {
//     e.preventDefault();
//     if (!newTodoText.trim()) {
//       setError('Todo text cannot be empty');
//       return;
//     }

//     try {
//       const { data, error } = await supabase
//         .from('todos')
//         .insert({ task: newTodoText, user_id: user.id })
//         .single();

//       if (error) throw error;

//       setTodos([data, ...todos]);
//       setNewTodoText('');
//       setError(null); // Clear any previous error
//     } catch (error) {
//       console.error('Error adding todo:', error);
//       setError('Failed to add todo');
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       const { error } = await supabase
//         .from('todos')
//         .delete()
//         .match({ id });

//       if (error) throw error;

//       setTodos(todos.filter((x) => x.id !== id));
//       setError(null); // Clear any previous error
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//       setError('Failed to delete todo');
//     }
//   };

//   if (loading) return <div>Loading todos...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={addTodo} className="mb-4">
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           placeholder="New todo"
//           value={newTodoText}
//           onChange={(e) => setNewTodoText(e.target.value)}
//         />
//         <button 
//           type="submit" 
//           className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Add Todo
//         </button>
//       </form>
//       {todos.length === 0 ? (
//         <p>No todos yet. Add one above!</p>
//       ) : (
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo?.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
//               <span>{todo?.task}</span> 
//               <button 
//                 onClick={() => deleteTodo(todo.id)} 
//                 className="text-red-500"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoList;

// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// const TodoList = ({ user, onLogout }) => {
//   const [todos, setTodos] = useState([]);
//   const [newTodoText, setNewTodoText] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from('todos')
//         .select('*')
//         .order('created_at', { ascending: false });

//       if (error) throw error;

//       setTodos(data || []);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//       setError('Failed to fetch todos');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addTodo = async (e) => {
//     e.preventDefault();
//     if (!newTodoText.trim()) return;

//     try {
//       const { data, error } = await supabase
//         .from('todos')
//         .insert({ task: newTodoText, user_id: user.id })
//         .single();

//       if (error) throw error;

//       setTodos([data, ...todos]);
//       setNewTodoText('');
//     } catch (error) {
//       console.error('Error adding todo:', error);
//       setError('Failed to add todo');
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       const { error } = await supabase
//         .from('todos')
//         .delete()
//         .match({ id });

//       if (error) throw error;

//       setTodos(todos.filter((x) => x.id !== id));
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//       setError('Failed to delete todo');
//     }
//   };

//   if (loading) return <div>Loading todos...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Todo List</h1>
//         <button
//           onClick={onLogout}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//       <form onSubmit={addTodo} className="mb-4">
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           placeholder="New todo"
//           value={newTodoText}
//           onChange={(e) => setNewTodoText(e.target.value)}
//         />
//         <button 
//           type="submit" 
//           className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Add Todo
//         </button>
//       </form>
//       {todos.length === 0 ? (
//         <p>No todos yet. Add one above!</p>
//       ) : (
//         <ul>
//           {todos.map((todo) => (
//             <li key={todo?.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
//               <span>{todo?.task}</span>
//               <button
//                 onClick={() => deleteTodo(todo.id)}
//                 className="text-red-500"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoList;

// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// const TodoList = ({ user, onLogout }) => {
//   const [todos, setTodos] = useState([]);
//   const [newTodoText, setNewTodoText] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       setLoading(true);
//       const { data, error } = await supabase
//         .from('todos')
//         .select('*')
//         .order('created_at', { ascending: false });
  
//       if (error) throw error;
  
//       if (data) {
//         // Additional validation to ensure no null values
//         const validTodos = data.filter(todo => todo !== null && todo.id);
//         setTodos(validTodos);
//       } else {
//         console.error("No data received from Supabase");
//       }
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//       setError('Failed to fetch todos');
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const addTodo = async (e) => {
//     e.preventDefault();
//     if (!newTodoText.trim()) return;

//     try {
//       const { data, error } = await supabase
//         .from('todos')
//         .insert({ task: newTodoText, user_id: user.id })
//         .select("*")
//         .single();
  
//       if (error) {
//         console.error('Supabase Insert Error:', error);
//         throw error;
//       }
  
//       if (data) {
//         setTodos((prevTodos) => [data, ...prevTodos]);
//         setNewTodoText('');
//       } else {
//         console.error('Received null data when adding todo');
//       }
//     } catch (error) {
//       console.error('Error adding todo:', error);
//       setError('Failed to add todo');
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       const { error } = await supabase
//         .from('todos')
//         .delete()
//         .match({ id });

//       if (error) throw error;

//       setTodos((prevTodos) => prevTodos.filter((todo) => todo && todo.id !== id));
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//       setError('Failed to delete todo');
//     }
//   };

  

//   if (loading) return <div>Loading todos...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Todo List</h1>
//         {/* <button
//           onClick={onLogout}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Logout
//         </button> */}
//       </div>
//       <form onSubmit={addTodo} className="mb-4">
//         <input
//           className="w-full p-2 border rounded"
//           type="text"
//           placeholder="New todo"
//           value={newTodoText}
//           onChange={(e) => setNewTodoText(e.target.value)}
//         />
//         <button 
//           type="submit" 
//           className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Add Todo
//         </button>
//       </form>
//       {todos.length === 0 ? (
//         <p>No todos yet. Add one above!</p>
//       ) : (
//         <ul>
//           {todos.map((todo) => todo && (
//             <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
//               <span>{todo.task}</span>
//               <button
//                 onClick={() => deleteTodo(todo.id)}
//                 className="text-red-500"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TodoList;
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const TodoList = ({ user, onLogout }) => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('user_id', user.id)
        .order('inserted_at', { ascending: false }); // Ensure the correct timestamp column is used

      if (error) throw error;

      console.log('Fetched Todos:', data); // Log the data to check for null/undefined values
      setTodos(data || []); // Ensure todos is always set to an array
    } catch (error) {
      console.error('Error fetching todos:', error);
      setError('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
  
    try {
      // Add the new todo to the database and immediately return the inserted row
      const { data, error } = await supabase
        .from('todos')
        .insert({
          task: newTodoText, 
          user_id: user.id, 
          is_complete: false
        })
        .select('*')  // Explicitly return the inserted row
        .single(); // Ensures we get only the inserted row
  
      if (error) throw error;
  
      console.log('Added Todo:', data); // Check the inserted todo
  
      // Update the todos state with the new todo
      setTodos([data, ...todos]); // Prepend the new todo to the list
      setNewTodoText(''); // Clear the input field
    } catch (error) {
      console.error('Error adding todo:', error);
      setError('Failed to add todo');
    }
  };
  
  
  const toggleCompletion = async (id, is_complete) => {
    try {
      const { error } = await supabase
        .from('todos')
        .update({ is_complete: !is_complete }) // Toggle completion status
        .match({ id });

      if (error) throw error;

      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, is_complete: !is_complete } : todo
        )
      );
    } catch (error) {
      console.error('Error updating todo:', error);
      setError('Failed to update todo');
    }
  };

  const deleteTodo = async (id) => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .match({ id });

      if (error) throw error;

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError('Failed to delete todo');
    }
  };

  if (loading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error}</div>;

  // Filter todos, ensuring todo is not null or undefined
  const activeTodos = todos.filter((todo) => todo && !todo.is_complete);
  const completedTodos = todos.filter((todo) => todo && todo.is_complete);

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        {/* <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button> */}
      </div>
      <form onSubmit={addTodo} className="mb-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="New todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>

      {/* Active Tasks */}
      {activeTodos.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Active Tasks</h2>
          <ul>
            {activeTodos.map((todo) => (
              <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.is_complete}
                    onChange={() => toggleCompletion(todo.id, todo.is_complete)}
                    className="mr-2"
                  />
                  <span>{todo.task}</span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTodos.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
          <ul>
            {completedTodos.map((todo) => (
              <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.is_complete}
                    onChange={() => toggleCompletion(todo.id, todo.is_complete)}
                    className="mr-2"
                  />
                  <span className="line-through">{todo.task}</span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
