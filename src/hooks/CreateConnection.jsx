import React from 'react'

const CreateConnection = (username,tokenId) => {
  return {
    connect() {
      console.log('Connecting to "' + tokenId + '"  Username' + username+ '...');
    },
    disconnect() {
      console.log(' Disconnected from "' + tokenId + '" username : ' + username);
    }
  };
}

export default CreateConnection
