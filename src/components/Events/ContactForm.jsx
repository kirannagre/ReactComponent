import React, { useState } from 'react'

const ContactForm = () => {

  return (
    <div>
      <form style={{margin:"18px", border:"2px solid black", padding:"48px",width:"fit-content"}}>
        <label htmlFor="Name">Name: </label><input type="text" required/><br /><br />
        <label htmlFor="email">Email: </label><input type="email" required /> <br /><br />
        <label htmlFor="Message">Message: </label><br />
        <textarea name="message" id="message" rows="5" cols="50"></textarea><br /><br />
   <button onClick={()=>{alert('form submiited')}} style={{padding:"5px",marginLeft:"120px",backgroundColor:"blueviolet", color:"white"}}>Send</button>
    <footer>Contact form end here</footer>
      </form>
    </div>
  )
}

export default ContactForm
