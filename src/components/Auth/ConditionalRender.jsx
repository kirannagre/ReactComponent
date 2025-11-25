import React from 'react'
import AdminDashboard from './AdminDashboard'
import AuthDashboard from './AuthDashboard'

const ConditionalRender = () => {
    const data={
        "user":1
    }

    // if(data.user==1){
    //     return <AdminDashboard/>
    // }
    // else{
    //     return <AuthDashboard/>
    // }

    const myscreen=data.user==0?`Admin`:`User`;
    return (
        myscreen

    )

}

export default ConditionalRender
