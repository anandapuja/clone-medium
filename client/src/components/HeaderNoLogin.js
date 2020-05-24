import React from 'react';
import {Link} from 'react-router-dom';

export default function HeaderNoLogin(){
  return(
    <div className="header-container">
      <Link to="/"><div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/1280px-Medium_logo_Wordmark_Black.svg.png" alt="logo" />
      </div></Link>
      <div className="right-header-container">
        <p>Subscribe</p>
        <p>Write</p>
        <p>Sign In</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}