import React from 'react'
import './Recipe.css'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const {id} = useParams();
  const url = 'http://localhost:3000/recipes/' + id
  const {error, isPending, data: recipe} = useFetch(url)
  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Take {recipe.cookingTime} to make</p>
          <ul>
            {recipe.ingredients.map(ingre => <li key={ingre}>{ingre}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe