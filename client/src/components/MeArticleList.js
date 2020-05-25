import React from 'react';
import {Link} from 'react-router-dom';

export default function MeArticleList({ article, user }){
  const deleteRequest = (articleId) => {
    fetch(`http://localhost:3001/me/articles/${articleId}`,{
      method: 'DELETE',
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }
  return(
    <div className="me-article-list-container">
      <div className="me-article-list-header">
        <div className="me-article-list-header-image">
          <img src="https://miro.medium.com/fit/c/256/256/2*G5oeLMefA5QVJXJ9I68bSQ.png" alt="profile" />
        </div>
        <div className="me-article-list-header-date">
          <p>{ user.user_name }</p>
          <p>{ article.date }</p>
        </div>
        <div onClick={() => deleteRequest(article.id)} className="delete-icon">
          <img src="/images/delete-icon-png.png" alt="delete" />
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