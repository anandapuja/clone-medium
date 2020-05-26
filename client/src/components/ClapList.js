import React from 'react';
import { Link } from 'react-router-dom';

const ClapList = ({ clap }) => {
  return(
    <div className="clap-container">
      <Link to={`/articles/${clap.Article.id}`}><h3>{clap.Article.title}</h3></Link>
      <div className="clap-meta">
        <Link to={`/writer/${clap.UserId}`}><p>write by: {clap.Article.User.user_name}</p></Link>
        <p>on : {clap.Article.date.slice(0,10)}</p>
      </div>
    </div>
  )
}

export default ClapList;