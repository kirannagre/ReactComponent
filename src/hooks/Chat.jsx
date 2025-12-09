import React from 'react'

const Chat = (serverUrl,roomId) => {
  return {
   connect(){
   console.log(`Connected roomId : ${roomId} , from ServerUrl: ${serverUrl}`)
  
   },
   disconnect()
   {
     console.log(`Disconnected roomId : ${roomId} , from ServerUrl: ${serverUrl}`)
   }

}
}

export default Chat;
