import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DetailArticle(){
  const [article, setArticle] = useState({});
  const [clapThis, setClapThis] = useState(false);
  const [bookmarks, setBookmarks] = useState('');
  const [bookmarkStatus, setBookmarkStatus] = useState(false);
  const { id } = useParams();
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`,{
      headers:{
        "access_token": localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setArticle(data);
        setUser(data.User);
      });
  },[clapThis])

  useEffect(() => {
    fetch(`http://localhost:3001/articles/me/bookmarked`, {
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setBookmarks(data);
      })
  }, [])

  const clap = () => {
    fetch(`http://localhost:3001/articles/${id}/clap`,{
      method: 'PUT',
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setClapThis(!clapThis);
      })
  }

  if(bookmarks && article){
    for( let i = 0; i < bookmarks.length; i++){
      if(article.id === bookmarks[i].ArticleId){
        setBookmarkStatus(true);
        // console.log('TRUE')
      }
    }
  }

  return(
    <>
      <div className="detail-article-container">
        {
          article ? (
            <>
              <h1>{ article.title }</h1>
              <div className="writer-profile">
                <div className="writer-profile-pic">
                  <img src={ user.avatar } alt="profile" />
                </div>
                <div className="writer-profile-name">
                  <p>{ article.user_name }</p>
                  <p>{ article.date && article.date.slice(0, 10) }</p>
                </div>
              </div>
              <img src={ article.img_url } alt="detail" />
              <p className="article-body-detail">{ article.body }</p>
              <div className="detail-tag">
                <p>{ article.category }</p>
              </div>
              <div className="detail-clap">
                <div className="clapped">
                  { article.clap === 0 ? <img onClick={clap} src="/images/clap.png" alt="clap" /> : <><img onClick={clap} src="/images/clap-a.jpg" alt="clap" /> <p>{article.clap}</p></> }
                </div>
                  { bookmarkStatus === false ? <img src="/images/bookmark.jpg" alt="clap" /> : <><img src="/images/bookmark-a.png" alt="clap" /></> }
              </div>
              <div className="detail-writer">
                <div className="detail-writer-image">
                  <img src={user.avatar} alt="profpic" />
                </div>
                <div className="detail-writer-description">
                  <p>WRITTEN BY</p>
                  <Link to={`/writer/${article.UserId}`}><h3>{user.user_name}</h3></Link>
                </div>
              </div>
            </>
          ) : (
            <p>Loading ...</p>
          )
        }
      </div>
    </>
  )
}