import React, { useReducer } from 'react'





//Array collection to store players data
// const initialScore = [
//   {
//     id: 1,
//     score: 0,
//     name: "Niyaz",
//   },
//   {
//     id: 2,
//     score: 0,
//     name: "Kiran",
//   },
  
//   {
//     id: 3,
//     score: 0,
//     name: "Hariom",
//   },
  
// ];



// //function to perform case on score incrament using type =  INCREASE    
// const reducer=(state,action)=>{
//     switch(action.type){
//         case 'INCREASE':
//             return state.map((p)=>{
//                 if(p.id===action.id){
//                     return {...p,score:p.score + 1}//if id match player score will increase
//                        console.log(player.id)

//                 }
//                 else{
//                     return p;//current state
//                 }
//             })
//         default:
//             return state;//current state    
//     }
// }


// const UseReducerExample = () => {


//   //intial score means current score  
//   const [score,dispatch]=useReducer(reducer,initialScore);
  


//   //call console onlick of handle increase to check which player score will increse now
//   const handleIncrease=(player)=>{
//     dispatch({type:"INCREASE",id:player.id})
//     console.log(player.id)
//     console.log(player.name)
//   };




//   return (
//       <>
//       {score.map((player) => (
//         <div key={player.id}>
//           <label>
//             <input
//               type="button"
//               onClick={() => handleIncrease(player)}
//               value={player.name}
//             />
//             {player.score}
//           </label>
//         </div>
//       ))}
//     </>
//   )
// }

// export default UseReducerExample
