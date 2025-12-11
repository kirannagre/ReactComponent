import React, { createContext, useContext, useState } from 'react'
import './global.css'

const ThemeContext=createContext('light');

function Form({children}){
    return(
        <Panel title="Welcome">
             <Button>Sign Up</Button>
              <Button>Login</Button>
        </Panel>
    )
}

function Panel({title,children}){
    const theme=useContext(ThemeContext);
    const className='Panel- ' + theme;

    return(
        <section className={className}>
             <h1>{title}</h1>
             {children}
        </section>
    )
}

function Button ({children,onClick}){
    const theme=useContext(ThemeContext)
    const className='button-' +  theme;
    return (
        <button className={className} onClick={onClick}>
       {children}
        </button>
    )
}


const UseContextExample = () => {

  const [theme,setTheme]=useState('light')  
  return (
    <>
    <ThemeContext value={theme}><Form/></ThemeContext>

    <Button onclick={()=>{setTheme(theme==='dark'?'light':'dark')}}>
        Theme
    </Button>
    </>

  )
}

export default UseContextExample
