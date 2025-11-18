import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
   <h1>Introduction</h1>
   <p style={{width:"45%", textAlign:'justify'}}>React is a frontend Libraray used to design standalone single page application . 
      React is a  library of javascript and it is completely based on reusable components . 
      Why this help and provide reusble code because Each particular part of react should be written inside
      function or class so it can be resuse easily.  Means We have to write only once can be call or used in multiple parts. 
   </p>
 </>
  )
}

export default App
