// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// const Auth = ({ onLogin }) => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signIn({ email });
//       if (error) throw error;
//       alert('Check your email for the login link!');
//     } catch (error) {
//       alert(error.error_description || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         if (event === 'SIGNED_IN') {
//           onLogin(session.user);
//         }
//       }
//     );

//     return () => {
//       authListener.unsubscribe();
//     };
//   }, [onLogin]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <input
//           className="w-full p-2 mb-4 border rounded"
//           type="email"
//           placeholder="Your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           disabled={loading}
//         >
//           {loading ? 'Loading' : 'Send magic link'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Auth;

// import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.REACT_APP_SUPABASE_URL,
//   process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// const Auth = ({ onLogin }) => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signInWithOtp({ email });
//       if (error) throw error;
//       alert('Check your email for the login link!');
//     } catch (error) {
//       alert(error.error_description || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         if (event === 'SIGNED_IN') {
//           onLogin(session.user);
//         }
//       }
//     );

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [onLogin]);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <input
//           className="w-full p-2 mb-4 border rounded"
//           type="email"
//           placeholder="Your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           disabled={loading}
//         >
//           {loading ? 'Loading' : 'Send magic link'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Auth;

// import React, { useState, useEffect } from 'react';

// const Auth = ({ onLogin }) => {
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignUp, setIsSignUp] = useState(false);

//   useEffect(() => {
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         if (event === 'SIGNED_IN') {
//           onLogin(session.user);
//         }
//       }
//     );

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [onLogin]);

//   const handleMagicLinkLogin = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signInWithOtp({ email });
//       if (error) throw error;
//       alert('Check your email for the login link!');
//     } catch (error) {
//       alert(error.error_description || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEmailPasswordAuth = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       let result;
//       if (isSignUp) {
//         result = await supabase.auth.signUp({ email, password });
//       } else {
//         result = await supabase.auth.signInWithPassword({ email, password });
//       }
//       if (result.error) throw result.error;
//       if (isSignUp) {
//         alert('Check your email to confirm your account!');
//       }
//     } catch (error) {
//       alert(error.error_description || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-80">
//         <h1 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h1>
//         <form onSubmit={handleEmailPasswordAuth} className="space-y-4">
//           <input
//             className="w-full p-2 border rounded"
//             type="email"
//             placeholder="Your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             className="w-full p-2 border rounded"
//             type="password"
//             placeholder="Your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button
//             className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             disabled={loading}
//           >
//             {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Login')}
//           </button>
//         </form>
//         <div className="mt-4">
//           <button
//             onClick={() => setIsSignUp(!isSignUp)}
//             className="text-blue-500 hover:underline"
//           >
//             {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
//           </button>
//         </div>
//         <div className="mt-4">
//           <p className="text-center">Or</p>
//           <button
//             onClick={handleMagicLinkLogin}
//             className="w-full mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
//             disabled={loading}
//           >
//             {loading ? 'Loading...' : 'Sign in with Magic Link'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
 process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);


export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      alert('Check your email for the login link!')
    }
    setLoading(false)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 gap-4 ">
        <h1 className="text-2xl font-bold mb-4 text-center">Supabase + React</h1>
        <p className="text-sm text-center font-bold mb-3">Sign in via magic link with your email below</p>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              className="w-full p-2 border rounded"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={'w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}