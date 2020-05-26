import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

export default function MeArticleList({ article, user, deleted }){
  const deleteRequest = (articleId) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Success!',
          'Your article have been deleted.',
          'success'
        )
        fetch(`http://localhost:3001/me/articles/${articleId}`,{
          method: 'DELETE',
          headers:{
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(res => res.json())
          .then(data => {
            deleted();
            console.log(data);
          })
      }
    })
  }
  return(
    <div className="me-article-list-container">
      <div className="me-article-list-header">
        {/* <div className="me-article-list-header-image">
          <img src="https://miro.medium.com/fit/c/256/256/2*G5oeLMefA5QVJXJ9I68bSQ.png" alt="profile" />
        </div>
        <div className="me-article-list-header-date">
          <p>{ user.user_name }</p>
          <p>{ article.date }</p>
        </div> */}
        <div onClick={() => deleteRequest(article.id)} className="delete-icon">
          <img src="/images/delete-icon-png.png" alt="delete" />
        </div>
        <Link to={`/edit-article/${article.id}`}><div className="delete-icon">
          <img src="/images/edit.png" alt="edit" />
        </div></Link>
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