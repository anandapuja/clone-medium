import React from 'react';
import { Link } from 'react-router-dom';

const FooterNoLogin = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <img src="/images/icon-logo.jpg" alt="footer logo" />
        <nav className="footer-nav">
          <p>Get started</p>
          <p>Subscribe</p>
          <p>Have an account? <Link to="/login">Sign in</Link></p>
        </nav>
        <nav className="footer-nav">
          <p>About Medium</p>
          <p>Write</p>
          <p>Gift</p>
          <p>Help</p>
          <p>Press Contacts</p>
          <p>Careers</p>
          <p>Legal</p>
        </nav>
        <p>© 2020 A Medium Corporation</p>
      </div>
      <div className="footer-right">
        <p>Get the Medium app</p>
        <img src="/images/appstore.png" alt="appstore" />
        <img src="/images/playstore.png" alt="playstore" />
      </div>
    </div>
  )
}

export default FooterNoLogin;