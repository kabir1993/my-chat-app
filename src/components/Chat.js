// src/components/Chat.js
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      // You can add logic to send the message to the server or perform other actions.
      setNewMessage('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
            <strong>{message.sender}: </strong>{message.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '8px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
