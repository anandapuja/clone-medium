import React from 'react';
import { Link } from 'react-router-dom';

const RecievedList = ({ data }) => {
  return (
    <div className="message-list-container">
      <p>Subject: { data.title_message }</p>
      <p>{ data.date.slice(0,10) }</p>
      <p>From: { data.User.user_name }</p>
      <Link to={`/message/${data.id}`}><p>Reply</p></Link>
    </div>
  )
}

export default RecievedList;