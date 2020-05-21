import React from 'react';
import { MeArticleList } from '../components'

export default function MeArticles(){
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
          <MeArticleList />
          <MeArticleList />
          <MeArticleList />
        </div>
      </div>
    </>
  )
}