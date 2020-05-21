import React from 'react';

export default function Header(){
  return(
    <div className="header-container">
      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/1280px-Medium_logo_Wordmark_Black.svg.png" alt="logo" />
      </div>
      <div className="right-header-container">
        <img src="/images/clap.png" alt="clap" />
        <img src="/images/bookmark.jpg" alt="clap" />
        <div className="create-story">
          <button type="button">Write a Story</button>
        </div>
      </div>
    </div>
  )
}