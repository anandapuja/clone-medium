import React, {useState, useEffect} from 'react';
import { WriterList } from '../components';
import { useParams } from 'react-router-dom';

export default function Writer(){
  const { id } = useParams();
  const [writer, setWriter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/writer/${id}`, {
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
            <h3>Ananda Puja Wandra</h3>
            <p>JVG is a writer/director in New York. Learn more and connect at</p>
          </div>
          <div className="me-writer-image">
            <img src="https://miro.medium.com/fit/c/256/256/2*G5oeLMefA5QVJXJ9I68bSQ.png" alt="profilepic" />
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