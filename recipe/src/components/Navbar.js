import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'
import useThemeContext from '../hooks/useThemeContext'

const Navbar = () => {
  const {color, changeColor} = useThemeContext()
  return (
    <div className='navbar' style={{background: color}}>
        <nav onClick={() => changeColor('#58249c')}>
            <Link to='/' className='brand'>
                <h1>My recipes</h1>
            </Link>
            <Searchbar/>
            <Link to='/create'>Create Recipe</Link>
        </nav>
    </div>
  )
}

export default Navbar