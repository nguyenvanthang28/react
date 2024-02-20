import React from 'react'
import './Home.css'
import useFetch from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

const Home = () => {
  const {data, error, ispending} = useFetch('http://localhost:3000/recipes')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {ispending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data}/> }
    </div>
  )
}

export default Home