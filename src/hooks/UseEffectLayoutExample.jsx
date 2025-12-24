import React, { useLayoutEffect, useState } from 'react'

const UseEffectLayoutExample = () => {

    const [value,setValue]=useState("Kiran")

    useLayoutEffect(()=>{
          console.log(`UseLayout effect is working`,value)
    },[value])


    setTimeout(()=>{
         setValue("Niyaz")
    },5000)

    console.log(setValue)

  return (
    <div>
        <h1 style={{background:"black",color:"white"}}>Data Fetched:{value}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil at, neque sequi illum molestias repellat temporibus odit libero error! Culpa ea expedita at aliquam voluptates aspernatur doloribus, sed iusto odit!</p>
    </div>
  )
}

export default UseEffectLayoutExample
