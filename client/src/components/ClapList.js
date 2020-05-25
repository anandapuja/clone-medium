import React from 'react';
import { Link } from 'react-router-dom';

const ClapList = ({ clap }) => {
  return(
    <div className="clap-container">
      <Link to={`/articles/${clap.Article.id}`}><h3>{clap.Article.title}</h3></Link>
      <div className="clap-meta">
        <p>{clap.Article.User.user_name}</p>
        <p>{clap.Article.date}</p>
      </div>
    </div>
  )
}

export default ClapList;