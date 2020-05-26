import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Header(){
  const history = useHistory();

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Logout!',
          'Please login back.',
          'success'
        )
        localStorage.removeItem('access_token');
        history.push('/login');
      }
    })
  }
  return(
    <div className="header-container">
      <Link to="/"><div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/1280px-Medium_logo_Wordmark_Black.svg.png" alt="logo" />
      </div></Link>
      <div className="right-header-container">
        <Link to="/clapped"><img src="/images/clap-a.jpg" alt="clap" /></Link>
        <Link to="/bookmark"><img src="/images/bookmark-a.png" alt="clap" /></Link>
        <Link to="/me/articles"><img src="/images/me.png" alt="me" /></Link>
        <Link to="/message"><img src="/images/message.png" alt="message" /></Link>
        <div className="create-story">
          <Link to="/add-article"><button type="button">Write a Story</button></Link>
        </div>
        <div className="create-story" onClick={ logout }>
          <button type="button">Logout</button>
        </div>
      </div>
    </div>
  )
}