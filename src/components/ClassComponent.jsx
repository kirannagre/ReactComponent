import { Component } from "react";



// class component
// class Myclass extends Component{
//     render(){
//         return <h1>kiran class Component</h1>
//     }
// }
 
class Mycollege extends Component{
    render(){
        return <h1> Adinath student Component</h1>
    }
}


//functional component

// function Calculation(){
//   let data=1;
//    if (data===1){
//       return <h1 style={{background:"lightgreen",color:"white",width:"fit-content"}}>Data send</h1>
//    }
//    else{
//      return <h1 style={{background:"gold",color:"white",width:"fit-content"}}>Data Restricted</h1>
//    }
// }
 
 function Person(){
    let Age = 12;
    if(Age === 18){
        return <h1 style={{background:"orange", color:"blueviolet", width:"fit-content"}}> you are just became to eligible </h1>
    }
    else if(Age>18){
        return<h1 style={{background:"green", color:"aqua", width:"fit-content"}}>you can eligible</h1>
    }
    else{
        return<h1 style={{background:"red", color:"AccentColor", width:"fit-content"}}>you are not eligible</h1>
    }
 }




import React from 'react'

const ClassComponent = () => {
  return (
    <div>
     <Mycollege/>
     <Person/>
      {/* <Myclass/>
      <Calculation/> */}
    </div>
  )
}

export default ClassComponent
