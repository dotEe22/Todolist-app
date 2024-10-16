// import React, { useState } from 'react';
// import Auth from './components/auth';
// import TodoList from './components/todoList';

// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <div className="App">
//       {user ? (
//         <TodoList user={user} />
//       ) : (
//         <Auth onLogin={setUser} />
//       )}
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import Auth from './components/auth';
// import TodoList from './components/todoList';

// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const session = supabase.auth.getSession();
//     setUser(session?.user || null);

//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         setUser(session?.user || null);
//       }
//     );

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     setUser(null);
//   };

//   return (
//     <div className="App">
//       {user ? (
//         <TodoList user={user} onLogout={handleLogout} />
//       ) : (
//         <Auth onLogin={setUser} />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import supabase from './components/client';
import Auth from './components/auth';
import  Navbar  from './components/NavBar';
import TodoListContainer from './components/Todo/TodoListContainer'; // Import refactored component



 
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="App">
      {/* Conditional Navbar */}
      <Navbar user={user} onLogout={handleLogout} />

      {user ? (
        <TodoListContainer user={user} />  
      ) : (
        <Auth onLogin={setUser} />
      )}
    </div>
  );
}

export default App;
