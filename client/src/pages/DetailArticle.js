import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function DetailArticle(){
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`,{
      headers:{
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJFbWFpbCI6ImFuYW5kYXB1amFAZ21haWwuY29tIiwiaWF0IjoxNTkwMDY5MDk2fQ.xgXkAyPdTbYz4hAFN8UPnaqpZWm0G7hsYhED1_Qc3_s"
      }
    })
      .then(res => res.json())
      .then(data => setArticle(data));
  },[])

  return(
    <>
      <div className="detail-article-container">
        <h1>{ article.title }</h1>
        <div className="writer-profile">
          <div className="writer-profile-pic">
            <img src={ article.img_url } alt="profile" />
          </div>
          <div className="writer-profile-name">
            <p>{ article.user_name }</p>
            <p>{ article.createdAt }</p>
          </div>
        </div>
        <img src={ article.img_url } alt="detail" />
        <p>{ article.body }</p>
        <div className="detail-tag">
          <p>{ article.category }</p>
        </div>
        <div className="detail-clap">
          <img src="/images/clap.png" alt="clap" />
          <img src="/images/bookmark.jpg" alt="clap" />
        </div>
        <div className="detail-writer">
          <div className="detail-writer-image">
            <img src="https://miro.medium.com/fit/c/96/96/2*thj3wQPvoIng45VIQxuY1g.jpeg" alt="profpic" />
          </div>
          <div className="detail-writer-description">
            <p>WRITTEN BY</p>
            <h3>anandapujawandra</h3>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          </div>
        </div>
      </div>
    </>
  )
}