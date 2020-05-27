import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import url from '../url';

export default function AddArticle(){
  const history = useHistory();
  if(!localStorage.getItem('access_token')){
    history.push('/');
  }

  const [title, setTitle] = useState('')
  const [img_url, setImg_Url] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')

  function titleValue(e){
    setTitle(e.target.value);
  }
  function img_urlValue(e){
    setImg_Url(e.target.value);
  }
  function bodyValue(e){
    setBody(e.target.value);
  }
  function categoryValue(e){
    setCategory(e.target.value);
  }
  function submit(e){
    e.preventDefault();
    const reqBody = {
      title, img_url, body, category
    }
    fetch(`${url}/articles`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      },
      body: JSON.stringify(reqBody),
    })
    .then(response => response.json())
    .then(data => {
      if(data.message){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message,
        })
      } else {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        history.push('/');
        setTitle('');
        setImg_Url('');
        setBody('');
        setCategory('');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <div className="addform-container">
      <h1>CREATE STORY</h1>
      <form onSubmit={submit}>
        <div className="add-form-div">
          <input onChange={titleValue} type="text" placeholder="Title" />
        </div>
        <div className="add-form-div">
          <input onChange={img_urlValue} type="text" placeholder="Img-url" />
        </div>
        <div className="add-form-div">
          <textarea onChange={bodyValue} placeholder="Your Content"></textarea>
        </div>
        <div className="add-form-div">
          <input onChange={categoryValue} type="text" placeholder="Category" />
        </div>
        <div className="add-form-div">
          <button type="submit">CREATE</button>
        </div>
      </form>
    </div>
  )
}