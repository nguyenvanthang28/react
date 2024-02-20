import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.css'
import useFetch from '../../hooks/useFetch';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef();
  const {data, error, postData} = useFetch('http://localhost:3000/recipes', 'POST')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title, method, cookingTime: cookingTime + 'minutes', ingredients})
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  //redirect to homepage
  useEffect(() =>{
    if(data){
      navigate('/')
    }
  }, [data])

  return (
    <div className='create'>
      <h2 className='page-title'>Add a new recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe Title:</span>
          <input type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input type="text"
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">add</button>
          </div>
        </label>
        <p>current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={e => setMethod(e.target.value)}
            value={method}
            required 
          />
        </label>

        <label>
          <span>Coooking Time (minutes):</span>
          <input type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>submit</button>
      </form>
    </div>
  )
}

export default Create