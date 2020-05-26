import React, {useState, useEffect} from 'react';
import { MeArticleList } from '../components'

export default function MeArticles(){
  const [articles, setArticles] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/me/articles', {
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      })
      .catch(console.log)
  }, [deleted]);

  const deletedArticle = () => {
    setDeleted(!deleted);
  }

  return(
    <>
      <div className="me-article-container">
        <div className="me-writer-header">
          <div className="me-writer-description">
            <h3>{articles.user_name}</h3>
            <p>{articles.about_me}</p>
          </div>
          <div className="me-writer-image">
            <img src={articles.avatar} alt="profilepic" />
          </div>
        </div>
        <h2>My Articles</h2>
        <div className="me-article-list">
          {
            articles.Articles !== undefined ? (
              articles.Articles.map(article => (
                <MeArticleList deleted={deletedArticle} key={article.id} article={article} user={articles} />
              ))
            ) : (
              <p>Loading ...</p>
            )
          }
        </div>
      </div>
    </>
  )
}