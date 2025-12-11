import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigateExample = () => {
  const navigate = useNavigate();  // <- call hook here

  return (
    <div>
      <button onClick={() => navigate("/hero")}>
        hero
      </button>
    </div>
  )
}

export default UseNavigateExample
