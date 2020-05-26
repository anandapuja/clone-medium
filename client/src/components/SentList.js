import React from 'react';

export default function SentList({ data }){
  return(
    <div className="message-list-container">
      <p>Subject: { data.title_message }</p>
      <p>{ data.date.slice(0,10) }</p>
    </div>
  )
}