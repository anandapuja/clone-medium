import React from 'react'

export default function MeArticleList(){
  return(
    <div className="me-article-list-container">
      <div className="me-article-list-header">
        <div className="me-article-list-header-image">
          <img src="https://miro.medium.com/fit/c/256/256/2*G5oeLMefA5QVJXJ9I68bSQ.png" alt="profile" />
        </div>
        <div className="me-article-list-header-date">
          <p>Ananda Puja Wandra</p>
          <p>16 May 2020</p>
        </div>
      </div>
      <div className="me-article-list-image">
        <img src="https://miro.medium.com/focal/1400/420/65/59/1*z8oyPf2QSzSKP_Za1_R3PQ.jpeg" alt="profile" />
      </div>
      <div className="me-article-list-title">
        <h3>Power Up Your Language to Revolutionize Your Freelance Life</h3>
      </div>
    </div>
  )
}