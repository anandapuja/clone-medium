import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleList({ data }){
  return (
    <>
      <div className="article-list-container">
        <div className="article-list-content">
          <Link to={`/articles/${data.id}`}><h1>{ data.title }</h1></Link>
          <p className="article-list-p">{ data.body }</p>
          <p className="article-list-category">{ data.category }</p>
          <p className="article-list-user-name">{ data.User.user_name }</p>
          <p className="article-list-date">{ data.createdAt}</p>
        </div>
        <div className="article-list-image">
          <img src={data.img_url} alt="post-img" />
        </div>
      </div>
    </>
  )
}