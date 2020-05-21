import React, { useEffect, useState } from 'react';
import { ArticleList, HomeSidebar } from '../components'

export default function Home(){
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/articles', {
      headers: {
        'Content-Type': 'application/json',
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJFbWFpbCI6ImFuYW5kYXB1amFAZ21haWwuY29tIiwiaWF0IjoxNTkwMDY5MDk2fQ.xgXkAyPdTbYz4hAFN8UPnaqpZWm0G7hsYhED1_Qc3_s"
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      });
  }, []);
  return (
    <div className="home-container">
      <div className="home-main">
        {
          articles.map(article =>(
            <ArticleList key={article.id} data={article}/>
          ))
        }
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