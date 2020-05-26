import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import url from '../url';

export default function PutArticle(props){
  const history = useHistory();
  if(!localStorage.getItem('access_token')){
    history.push('/');
  }

  const { id } = useParams();
  const [title, setTitle] = useState('')
  const [img_url, setImg_Url] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch(`${url}/articles/${id}`,{
      headers:{
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setImg_Url(data.img_url);
        setBody(data.body);
        setCategory(data.category);
        // console.log(data);
      })
  },[]);

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
    console.log(reqBody)
    fetch(`${url}/me/articles/${id}`, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'access_token': localStorage.getItem('access_token')
      },
      body: JSON.stringify(reqBody),
    })
    .then(response => response.json())
    .then(data => {
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      // history.push('/me/articles');
      props.history.push('/me/articles');
      setTitle('');
      setImg_Url('');
      setBody('');
      setCategory('');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <div className="addform-container">
      <h1>UPDATE STORY</h1>
      <form onSubmit={submit}>
        <div className="add-form-div">
          <input onChange={titleValue} type="text" placeholder="Title" value={title} />
        </div>
        <div className="add-form-div">
          <input onChange={img_urlValue} type="text" placeholder="Img-url" value={img_url} />
        </div>
        <div className="add-form-div">
          <textarea onChange={bodyValue} placeholder="Your Content" value={body}></textarea>
        </div>
        <div className="add-form-div">
          <input onChange={categoryValue} type="text" placeholder="Category" value={category} />
        </div>
        <div className="add-form-div">
          <button type="submit">UPDATE</button>
        </div>
      </form>
    </div>
  )
}