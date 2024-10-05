
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
