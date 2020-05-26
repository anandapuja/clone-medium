import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleList({ data }){
  return (
    <>
      <div className="article-list-container">
        <div className="article-list-content">
          <Link to={`/articles/${data.id}`}><h1>{ data.title }</h1></Link>
          <p className="article-list-p">{ data.body.split(' ').splice(0, 5).join(' ') } ...</p>
          <p className="article-list-category">category: { data.category }</p>
          <div className="article-list-meta">
            <Link to={`/writer/${data.UserId}`}><p className="article-list-user-name">{ data.user_name }</p></Link>
            <p className="article-list-date">{ data.date.slice(0, 10) }</p>
          </div>
        </div>
        <div className="article-list-image">
          <img src={data.img_url} alt="post-img" />
        </div>
      </div>
    </>
  )
}