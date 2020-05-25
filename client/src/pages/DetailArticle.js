import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailArticle(){
  const [article, setArticle] = useState({});
  const [clapThis, setClapThis] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`,{
      headers:{
        "access_token": localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticle(data) 
      });
  },[clapThis])

  const clap = () => {
    fetch(`http://localhost:3001/articles/${id}/clap`,{
      method: 'PUT',
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setClapThis(!clapThis);
        // console.log(data)
      })
  }

  return(
    <>
      <div className="detail-article-container">
        {
          article ? (
            <>
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
                <div className="clapped">
                  { article.clap === 0 ? <img onClick={clap} src="/images/clap.png" alt="clap" /> : <><img onClick={clap} src="/images/clap-a.jpg" alt="clap" /> <p>{article.clap}</p></> }
                </div>
                <img src="/images/bookmark.jpg" alt="clap" />
              </div>
              <div className="detail-writer">
                <div className="detail-writer-image">
                  <img src="https://miro.medium.com/fit/c/96/96/2*thj3wQPvoIng45VIQxuY1g.jpeg" alt="profpic" />
                </div>
                <div className="detail-writer-description">
                  <p>WRITTEN BY</p>
                  <Link to={`/writer/${article.UserId}`}><h3>anandapujawandra</h3></Link>
                </div>
              </div>
            </>
          ) : (
            <p>Loading ...</p>
          )
        }
      </div>
    </>
  )
}