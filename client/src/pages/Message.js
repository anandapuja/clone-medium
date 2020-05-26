import React, { useEffect, useState } from 'react';
import { RecievedList, SentList } from '../components';

const Message = () => {

  const [ messages, setMessages ] = useState({});
  const { receive } = messages;
  const { send } = messages;

  useEffect(() => {
    fetch(`http://localhost:3001/messages`,{
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setMessages(data);
      })
  }, [])

  return (
    <div className="message-container">
      <div className="message-left-right">
        <h2>Recieved Messages</h2>
        {
          receive && receive.map(rcv => (
            <RecievedList key={ rcv.id } data={ rcv } />
          ))
        }
      </div>
      <div className="message-left-right">
        <h2>Sent Messages</h2>
        {
          send && send.map(sent => (
            <SentList key={sent.id} data={ sent } />
          ))
        }
      </div>
    </div>
  )
}

export default Message;