import React, { useEffect, useState } from 'react'
import CreateConnection from './CreateConnection.jsx'
import { IoTimer } from 'react-icons/io5';



// function Counter(){

//   const [count,setCount]=useState(0);
//   const[calculation, setCalculation]=useState(0);


//   useEffect(()=>{
//     setCalculation(()=>count * 5);

//     },[count]);

//     return(
//       <>
//       <p>Count: {count}</p>
//       <button
//       onClick={()=> setCount((c)=> c + 5)}>+</button>
//       <p> Calculation:{calculation}</p>
//       </>
//     );
// }

// export default Counter


// import { useState, useEffect } from "react";
// import App from './../App';

// function OtpTimer() {
//   const [time, setTime] = useState(30);

//   useEffect(() => {
//     if (time === 0) return;

//     const timer = setInterval(() => {
//       setTime(prev => prev - 1);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [time]);

//   return (
//     <div>
//       <h1>Resend OTP in {time} sec</h1>

//       <button 
//         onClick={() => setTime(30)} 
//         disabled={time !== 0}
//       >
//         Resend OTP
//       </button>
//     </div>
//   );
// }

// export default OtpTimer;

  

//Chatbox
// function ChatRoom({tokenId}){
//     const [username,setUsername]=useState("Kiran")

//   useEffect(() => {
//     const connection = CreateConnection(username, tokenId);
//     connection.connect();
//     return () => {
//       connection.disconnect();
//     };
//   }, [tokenId, username]);


//   return (
//     <div>
//       <input type="text" value= {username} onChange={(e)=>setUsername(e.target.value)} />
//       <label htmlFor="tokenId">Token ID passed:{tokenId}</label>
//     </div>
//   )
// }





// const UseEffectExample = () => {

//   const [tokenId, setTokenId] = useState('Auth');
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={tokenId}
//           onChange={(e) => setTokenId(e.target.value)}
//         >
//           <option value="Auth">Auth</option>
//           <option value="Qauth">Q -Auth</option>
//           <option value="Bearer">Bearer</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom tokenId={tokenId} />}
//     </>
//   );



    
// }


