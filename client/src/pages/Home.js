import React from 'react';
import { ArticleList, HomeSidebar } from '../components'

export default function Home(){
  return (
    <div className="home-container">
      <div className="home-main">
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
        <ArticleList />
      </div>
      <div className="home-sidebar">
        <div  className="sidebar-container">
          <h2>Popular on Medium</h2>
          <HomeSidebar />
          <HomeSidebar />
          <HomeSidebar />
          <HomeSidebar />
          <HomeSidebar />
        </div>
      </div>
    </div>
  )
}