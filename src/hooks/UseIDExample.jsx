import React, { useId } from 'react'

function Myuserid(){
    const userId=useId();
    const passwordId=useId()
    const emailID=useId(0)

    console.log(userId)
    console.log(passwordId)
    console.log(emailID)

    return(
        <>
        <label>Username</label>
         <input type="text" aria-describedby={userId}/>         
        <label>Password</label>
         <input type="password" aria-describedby={passwordId} />
        <label>Email</label>
         <input type="email" aria-describedby={emailID} />

         <p id={userId}>
                User     Id     passed {userId}
                password Id     passed {passwordId}
                Email    Id     passed {emailID}
          </p>
        </>
    )
}

const UseIDExample = () => {
  return (
    <div>
      <Myuserid/>
    </div>
  )
}

export default UseIDExample
