import React, { useState } from 'react'

const UseStateExample = () => {
  const [count,setCount]=useState(0);  
console.log(typeof count)
console.log(count)


  return (
    <div>
         <button onClick={()=>setCount(count+1)} style={{marginLeft:"450px", padding:"15px"}}>+</button>      
         <button onClick={()=>setCount(count-1)} style={{marginLeft:"50px", padding:"15px"}}>-</button>      
     
         <h1>{count}</h1>
    </div>
  )
}

export default UseStateExample
