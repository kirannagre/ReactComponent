import React, { useState } from 'react'

function handleClick(){
      const backgroundStyle=document.body.style;  
  if(backgroundStyle.backgroundColor==='black'){
    backgroundStyle.backgroundColor='white'
    backgroundStyle.color='black'
    
  }
  else{
    backgroundStyle.backgroundColor='black'
    backgroundStyle.color='white'
  }
}
const ThemeSelection = () => {

  const [person,setPerson]=useState({
    name:"Kiran"
  })  
  return (
    <div>
       <button onClick={handleClick}>Toggle</button>
       <h1>{person.name}</h1>      
    </div>
  )
}

export default ThemeSelection
