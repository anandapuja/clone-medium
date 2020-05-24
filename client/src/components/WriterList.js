import React from 'react';
import {Link} from 'react-router-dom';

export default function WriterList({ article, writer }){
  // const deleteRequest = (articleId) => {
  //   fetch(`http://localhost:3001/me/articles/${articleId}`,{
  //     method: 'DELETE',
  //     headers:{
  //       access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJFbWFpbCI6ImFuYW5kYXB1amFAZ21haWwuY29tIiwiaWF0IjoxNTkwMDY5MDk2fQ.xgXkAyPdTbYz4hAFN8UPnaqpZWm0G7hsYhED1_Qc3_s'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  // }
  return(
    <div className="me-article-list-container">
      <div className="me-article-list-header">
        <div className="me-article-list-header-image">
          <img src="https://miro.medium.com/fit/c/256/256/2*G5oeLMefA5QVJXJ9I68bSQ.png" alt="profile" />
        </div>
        <div className="me-article-list-header-date">
          <p>{ writer.user_name }</p>
          <p>{ article.date }</p>
        </div>
        {/* <div onClick={() => deleteRequest(article.id)} className="delete-icon">
          <img src="/images/delete-icon-png.png" alt="delete" />
        </div> */}
      </div>
      <div className="me-article-list-image">
        <img src={ article.img_url } alt="profile" />
      </div>
      <div className="me-article-list-title">
        <Link to={`/articles/${article.id}`}><h3>{ article.title }</h3></Link>
      </div>
    </div>
  )
}