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
import { createClient } from '@supabase/supabase-js';
import Auth from './components/auth';
import TodoList from './components/todoList';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

function Navbar({ user, onLogout }) {
  if (!onLogout) {
    throw new Error('onLogout callback is required');
  }

  return (
    <li className='list-none  bg-stone-500 relative  '>
      <div className=' flex h-16 text-center items-center ml-24 text-sm p-8 gap-10
                   sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12'>
        <h1 className=' text-2xl italic text-lime-300 
                     sm:text-3xl md:text-3xl lg:text-2xl xl:text-xl 2xl:text-lg  '>TodoList 📝📝</h1>
        <div className='ml-auto'>
        {user && (
        <button className={"px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 italic"} aria-label="Logout" onClick={onLogout}>
          Logout
        </button>
      )}
        </div>
      </div>
    </li>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

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
      <Navbar  user={user} onLogout={handleLogout} />
      
      {user ? (
        <TodoList user={user} onLogout={handleLogout} />
      ) : (
        <Auth onLogin={setUser} />
      )}
    </div>
  );
}

export default App;
