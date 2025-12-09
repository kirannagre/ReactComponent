import React, { useEffect, useState } from 'react'
import CreateConnection from './CreateConnection.jsx'

function ChatRoom({roomId}){
    const [serverUrl,setServerurl]=useState("http://localhost:5173")

  useEffect(() => {
    const connection = CreateConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);


  return (
    <div>
      <input type="text" value= {serverUrl} onChange={(e)=>setServerurl(e.target.value)} />
      <label htmlFor="roomId">Welcome to Room ID: {roomId}</label>
    </div>
  )
}
const UseEffectExample = () => {

  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );



    
}

export default UseEffectExample
