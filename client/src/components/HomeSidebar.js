import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeSidebar({ data }){
  return(
    <div>
      <div className="sidebar-list">
        <div className="sidebar-number">
          <h1>{ data.urutan }</h1>
        </div>
        <div className="sidebar-title">
          <Link to={`/articles/${data.id}`}><p className="popular-title-list">{ data.title }</p></Link>
          <p>Clap: {data.clap}</p>
        </div>
      </div>
    </div>
  )
}