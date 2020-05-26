import React, { useEffect, useState } from 'react';
import { ArticleList, HomeSidebar } from '../components'

export default function Home(){
  const [articles, setArticles] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/articles', {
      headers: {
        'Content-Type': 'application/json',
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticles(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/popular`,{
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        // let dataPopuler;
        for(let i = 0; i < data.length; i++){
          data[i]['urutan'] = i+1
        }
        setPopular(data);
      })
  }, [])
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
          {
            popular.map(pop => (
              <HomeSidebar key={pop.id} data={pop} />
            ))
          }
        </div>
      </div>
    </div>
  )
}