import React, { useState } from 'react'

const OnclickExample = () => {
  const [count,setCount]=useState(0);  

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
         <h1>{count}</h1>
    </div>
  )
}

export default OnclickExample
   