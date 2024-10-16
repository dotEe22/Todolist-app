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
