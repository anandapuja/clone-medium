import React from 'react';

export default function ArticleList(){
  return (
    <>
      <div className="article-list-container">
        <div className="article-list-content">
          <h1>Why Svelte won’t kill React</h1>
          <p className="article-list-p">After several years using React Slingshot and other boilerplates for my applications.</p>
          <p className="article-list-category">Science</p>
          <p className="article-list-user-name">John Au-Yeung</p>
          <p className="article-list-date">May 16</p>
        </div>
        <div className="article-list-image">
          <img src="https://javascript-conference.com/wp-content/uploads/2020/02/iJS_LDN20_Blog_56509_v1.jpg" alt="post-img" />
        </div>
      </div>
    </>
  )
}