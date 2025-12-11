import React from 'react'
import './LoginPage.css'
import Button from '../components/ui/Button'
const LoginPage = () => {
  return (

     

    <div className='container'>
      <h1 style={{textAlign:"center"}}>Login Dashboard</h1>
    
      <div className1="container">
        <label >Username:</label><input type="text"/> <br/><br/>
        <label >Password:</label><input type="password"/><br/><br/>
        <input type="submit" value="login"/>
      </div>
    </div>
  
  )
}

export default LoginPage
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     login(username);

//     if (username === "admin") {
//       navigate("/admin");
//     } else {
//       navigate("/user");
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="container">
//         <h1>Login Dashboard</h1>

//         <input
//           type="text"
//           placeholder="Enter Username"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br /><br />

//         <input
//           type="password"
//           placeholder="Enter Password"
//         />
//         <br /><br />

//         <button onClick={handleLogin}>Login</button>

//         <p style={{ marginTop: "20px" }}>
//           Don't have an account? <a href="/signup">Sign Up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
