import React, { useState } from 'react'

export default function AddArticle(){
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
    console.log(reqBody);
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