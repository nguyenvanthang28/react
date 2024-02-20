
import './Searchbar.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Searchbar = () => {
    const [term, setTerm] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${term}`)
    }

  return (
    <div className='searchBar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input type="text"
                id='search'
                onChange={e => setTerm(e.target.value)}
                value={term}
            />
        </form>
    </div>
  )
}

export default Searchbar