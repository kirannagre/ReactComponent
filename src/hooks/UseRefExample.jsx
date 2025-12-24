import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
  const [inputfield,SetInputField]=useState(" ")  
  const  counter=useRef(0);

  useEffect(()=>{
    counter.current=counter.current + 1
  });

const [count, setCount] = useState(0);

useEffect(() => {
  setCount((prev) => prev + 1);
});


  return (
    <div>
        <input type="text" value={inputfield} onChange={(e)=>{SetInputField(e.target.value)}}/>
        <p>{counter.current}</p>
    </div>
  )
}

export default UseRefExample
