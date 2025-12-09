import React from 'react'

function handleClick(){
    window.alert('Function call with defination')
}

const PassingFunctionExample = () => {

  return (
    <div>
      <button onClick={handleClick}>Using function defination</button>
      <button onClick={()=>{window.alert('Hello world')}}>Using arrow function</button>
    </div>
  )
}

export default PassingFunctionExample
