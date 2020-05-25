import React from 'react';
import {Link} from 'react-router-dom';

export default function WriterList({ article, writer }){
  return(
    <div className="me-article-list-container">
      <div className="me-article-list-header">
        <div className="me-article-list-header-image">
          <img src="https://miro.medium.com/fit/c/256/256/2*G5oeLMefA5QVJXJ9I68bSQ.png" alt="profile" />
        </div>
        <div className="me-article-list-header-date">
          <p>{ writer.user_name }</p>
          <p>{ article.date }</p>
        </div>
      </div>
      <div className="me-article-list-image">
        <img src={ article.img_url } alt="profile" />
      </div>
      <div className="me-article-list-title">
        <Link to={`/articles/${article.id}`}><h3>{ article.title }</h3></Link>
      </div>
    </div>
  )
}