import React, {useState, useEffect} from 'react';
import { WriterList } from '../components';
import { useParams, Link, useHistory } from 'react-router-dom';
import url from '../url';

export default function Writer(){
  const history = useHistory();
  if(!localStorage.getItem('access_token')){
    history.push('/');
  }
  
  const { id } = useParams();
  const [writer, setWriter] = useState([]);

  useEffect(() => {
    fetch(`${url}/writer/${id}`, {
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setWriter(data);
      })
      .catch(console.log)
  }, []);

  return(
    <>
      <div className="me-article-container">
        <div className="me-writer-header">
          <div className="me-writer-description">
            <div className="me-writer-description-name-message">
              <h3>{ writer.user_name }</h3>
              <Link to={`/writer/${id}/send-message`}>
                <div className="me-writer-message">
                  <img src="/images/message.png" alt="message" />
                  <p>Send Message</p>
                </div>
              </Link>
            </div>
            <p>{ writer.about_me }</p>
          </div>
          <div className="me-writer-image">
            <img src={ writer.avatar } alt="profilepic" />
          </div>
        </div>
        <div className="me-article-list">
          {
            writer.Articles !== undefined ? (
              writer.Articles.map(article => (
                <WriterList key={article.id} article={article} writer={writer} />
              ))
            ) : (
              <p>Loading ...</p>
            )
          }
        </div>
      </div>
    </>
  )
}