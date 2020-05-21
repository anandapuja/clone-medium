import React from 'react';

export default function DetailArticle(){
  return(
    <>
      <div className="detail-article-container">
        <h1>What is Lorem Ipsum?</h1>
        <div className="writer-profile">
          <div className="writer-profile-pic">
            <img src="https://miro.medium.com/fit/c/96/96/2*thj3wQPvoIng45VIQxuY1g.jpeg" alt="profile" />
          </div>
          <div className="writer-profile-name">
            <p>anandapujawandra</p>
            <p>14 May</p>
          </div>
        </div>
        <img src="https://miro.medium.com/max/1400/1*BRKtInlED-PiWCvDpJPxkQ.jpeg" alt="detail" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="detail-tag">
          <p>Javascript</p>
          <p>React</p>
          <p>MongoDb</p>
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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </>
  )
}