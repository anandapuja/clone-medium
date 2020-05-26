import React, { useEffect, useState } from 'react';
import { ArticleList, HomeSidebar } from '../components';
import url from '../url';
import { useHistory } from 'react-router-dom';

export default function Home({logStatus}){
  
  const history = useHistory();
  if(!localStorage.getItem('access_token')){
    history.push('/');
  }

  const [articles, setArticles] = useState([]);
  const [popular, setPopular] = useState([]);
  
  useEffect(() => {
    fetch(`${url}/articles`, {
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
    fetch(`${url}/popular`,{
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        for(let i = 0; i < data.length; i++){
          data[i]['urutan'] = i+1
        }
        setPopular(data);
      })
  }, [])
  return (
    <div className="home-container-article">
      <div className="home-main">
        <h2>Recent on Medium</h2>
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