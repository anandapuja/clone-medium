import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import url from '../url';

const PostMessage = () => {
  const history = useHistory();
  if(!localStorage.getItem('access_token')){
    history.push('/');
  }
  
  const { id } = useParams();
  const [title_message, setTitle_Message] = useState('');
  const [body_message, setBody_Message] = useState('');

  function titleMessage(e){
    setTitle_Message(e.target.value);
  }
  function titleBody(e){
    setBody_Message(e.target.value);
  }
  function submit(e){
    e.preventDefault();
    const reqBody = {
      title_message, body_message
    }
    fetch(`${url}/writer/${id}/message`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      },
      body: JSON.stringify(reqBody),
    })
    .then(response => response.json())
    .then(data => {
      setTitle_Message('');
      setBody_Message('');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <div className="addform-container">
      <h1>CREATE MESSAGE</h1>
      <form onSubmit={submit}>
        <div className="add-form-div">
          <input onChange={titleMessage} type="text" placeholder="Subject" />
        </div>
        <div className="add-form-div">
          <textarea onChange={titleBody} placeholder="Message"></textarea>
        </div>
        <div className="add-form-div">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  )
}

export default PostMessage;