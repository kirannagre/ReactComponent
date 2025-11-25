import React from 'react'
import './LoginPage.css'
import Button from '../components/ui/Button'
const LoginPage = () => {
  return (
    <div className='container'>
      <h1 style={{textAlign:"center"}}>Login Dashboard</h1>
      <Button/>
      <div className="container">
        <label >Username:</label><input type="text"/> <br/><br/>
        <label >Password:</label><input type="password"/><br/><br/>
        <input type="submit" value="login"/>
      </div>
    </div>
  )
}

export default LoginPage
