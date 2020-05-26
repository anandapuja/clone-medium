import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import url from '../url';

export default function DetailArticle(){
  const history = useHistory();
  if(!localStorage.getItem('access_token')){
    history.push('/');
  }
  
  const [article, setArticle] = useState({});
  const [clapThis, setClapThis] = useState(false);
  const [bookmarks, setBookmarks] = useState('');
  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [bookmarkThis, setBookmarkThis] = useState(false);

  useEffect(() => {
    fetch(`${url}/articles/${id}`,{
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
    fetch(`${url}/articles/me/bookmarked`, {
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setBookmarks(data);
      })
  }, [bookmarkThis])
  
    useEffect(() => {
      if(bookmarks.length !== 0){
        const stats = bookmarks.filter(mark => {
          return mark.ArticleId == article.id
        })
        setBookmarkStatus(stats)
      }
    },[bookmarks, article, bookmarkThis])

  const clap = () => {
    fetch(`${url}/articles/${id}/clap`,{
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

  const bookmark = () => {
    fetch(`${url}/articles/${article.id}/bookmark`,{
      method: 'PUT',
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setBookmarkThis(!bookmarkThis);
      })
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
                  { bookmarkStatus.length == 0 ? <img onClick={bookmark} src="/images/bookmark.png" alt="clap" /> : <><Link to="/bookmark"><img src="/images/bookmark-a.png" alt="clap" /></Link></> }
                  {/* <img src="/images/bookmark.jpg" alt="clap" /> */}

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