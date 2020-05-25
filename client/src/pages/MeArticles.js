import React, {useState, useEffect} from 'react';
import { MeArticleList } from '../components'

export default function MeArticles(){
  const [articles, setArticles] = useState([]);

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
  }, []);

  return(
    <>
      <div className="me-article-container">
        <div className="me-writer-header">
          <div className="me-writer-description">
            <h3>Ananda Puja Wandra</h3>
            <p>JVG is a writer/director in New York. Learn more and connect at</p>
          </div>
          <div className="me-writer-image">
            <img src="https://miro.medium.com/fit/c/256/256/2*G5oeLMefA5QVJXJ9I68bSQ.png" alt="profilepic" />
          </div>
        </div>
        <div className="me-article-list">
          {
            articles.Articles !== undefined ? (
              articles.Articles.map(article => (
                <MeArticleList key={article.id} article={article} user={articles} />
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