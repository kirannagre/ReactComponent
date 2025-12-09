import React from 'react'
import AdminDashboard from './Auth/AdminDashboard'
import AuthDashboard from './Auth/AuthDashboard'

import './EventExample.css'
import { useNavigate } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
const EventExample = () => {


  return (
    <div className='event-container'>
      <button onClick={()=>alert('Kiran')}>Admin</button>
      <button onClick={()=>alert('Niyaz')}>User</button>
      <button onClick={()=>console.log('Event callback')}>Goto login</button>
    </div>
  )
}

export default EventExample
