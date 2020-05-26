import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ResponseMessage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState({});
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3001/messages/${id}`,{
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data);
        console.log(data);
      })
  }, [])

  const responseHandler = (e) => {
    setResponse(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/messages/${id}/response`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      },
      body: response,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return(
    <div className="addform-container">
      <div className="message-detail-container">
        <p>Subject: { message.title_message }</p>
        <p>Date: { message.date }</p>
        <p>Body: { message.body_message }</p>
        <div className="response-message-detail">
          <h4>Reponse</h4>
          {
            message.Responses && message.Responses.map(res => (
              <p key={res.id}>{res.response}</p>
            ))
          }
        </div>
      </div>
      <h3>SEND YOUR RESPONSE</h3>
      <form onSubmit={submit}>
        <div className="add-form-div">
          <textarea onChange={responseHandler} placeholder="Response"></textarea>
        </div>
        <div className="add-form-div">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  )
}

export default ResponseMessage;