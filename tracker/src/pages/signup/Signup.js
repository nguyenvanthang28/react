import React, { useState } from 'react'
import './Signup.css'
import UseSignup from '../../hooks/UseSignup';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('mario')
  const {signup, isPending, error} = UseSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input
          type='email' placeholder='email'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type='password' placeholder='password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          type='text'
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className='btn'>Signup</button>}
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup