import React from 'react'
import AdminDashboard from './AdminDashboard'
import AuthDashboard from './AuthDashboard'

const ConditionalRender = () => {
    const data={
        "user":1,
        "user1":1
    }

    // if(data.user==1){
    //     return <AdminDashboard/>
    // }
    // else{
    //     return <AuthDashboard/>
    // }

    const myscreen=data.user==1?`Admin`:`User`;
        const mydisplay=data.user1==1?`login`:`singup`;

    return (
       myscreen, mydisplay 
     
    )

}

export default ConditionalRender
