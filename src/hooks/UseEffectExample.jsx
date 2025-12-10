import React, { useEffect, useState } from 'react'
import CreateConnection from './CreateConnection.jsx'




//Chatbox
function ChatRoom({tokenId}){
    const [username,setUsername]=useState("Kiran")

  useEffect(() => {
    const connection = CreateConnection(username, tokenId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [tokenId, username]);


  return (
    <div>
      <input type="text" value= {username} onChange={(e)=>setUsername(e.target.value)} />
      <label htmlFor="tokenId">Token ID passed:{tokenId}</label>
    </div>
  )
}





const UseEffectExample = () => {

  const [tokenId, setTokenId] = useState('Auth');
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={tokenId}
          onChange={(e) => setTokenId(e.target.value)}
        >
          <option value="Auth">Auth</option>
          <option value="Qauth">Q -Auth</option>
          <option value="Bearer">Bearer</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom tokenId={tokenId} />}
    </>
  );



    
}

export default UseEffectExample
