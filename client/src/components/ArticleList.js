import React from 'react';

export default function ArticleList(){
  return (
    <>
      <div className="article-list-container">
        <div className="article-list-content">
          <h1>Why Svelte won’t kill React</h1>
          <p className="article-list-p">After several years using React Slingshot and other boilerplates for my applications, I decided to create a configuration</p>
          <p className="article-list-category">Science</p>
          <p className="article-list-user-name">John Au-Yeung</p>
          <p className="article-list-date">May 16</p>
        </div>
        <div className="article-list-image">
          <img src="https://miro.medium.com/max/1160/1*w4uLFcsyeLWeVetzq0VgqQ.jpeg" alt="post-img" />
        </div>
      </div>
    </>
  )
}