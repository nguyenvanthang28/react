import React, { useState } from 'react'
import './Login.css'
import useLogin from '../../hooks/useLogin'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("isPending in useLogin:", isPending);
    login(email, password)
  }

  return (
      <form onSubmit={handleSubmit} className='login-form'>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            type="email" placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="password" placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && <button className='btn'>Login</button>}
        {isPending && <button className='btn' disabled>Loading</button>}
        { error && <p>{error}</p> }
      </form>
  )
}

export default Login