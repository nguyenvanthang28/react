import React from 'react'
import './Navbar.css'

import {Link} from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import useAuthContext from '../../hooks/useAuthContext'

const Navbar = () => {
  const {user} = useAuthContext()
  const {logout} = useLogout()
  
  return (
    <div className='navbar'> 
    <ul>
        <li className='title'>My Money</li>
        {!user && (
          <>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </>
        )}
        {user && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
          </>
        )}

    </ul>
    </div>
  )
}

export default Navbar