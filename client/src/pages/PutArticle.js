import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PutArticle(props){
  const { id } = useParams();

  const [title, setTitle] = useState('')
  const [img_url, setImg_Url] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/articles/${id}`,{
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
    fetch(`http://localhost:3001/me/articles/${id}`, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        'access_token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsInVzZXJFbWFpbCI6ImFuYW5kYXB1amFAZ21haWwuY29tIiwiaWF0IjoxNTkwMDY5MDk2fQ.xgXkAyPdTbYz4hAFN8UPnaqpZWm0G7hsYhED1_Qc3_s`
      },
      body: JSON.stringify(reqBody),
    })
    .then(response => response.json())
    .then(data => {
      props.history.push('/articles');
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