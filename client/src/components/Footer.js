import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container-login">

      <div className="footer-top">
        <div className="footer-top-item">
          <h4>Discover Medium</h4>
          <p>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight.</p>
        </div>
        <div className="footer-top-item">
          <h4>Make Medium yours</h4>
          <p>Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox.</p>
        </div>
        <div className="footer-top-item">
          <h4>Become a member</h4>
          <p>Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just $5/month.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <img src="/images/logo-white.jpg" alt="logo white" />
        <nav className="footer-bottom-nav">
          <p>About</p>
          <p>Help</p>
          <p>Legal</p>
        </nav>
      </div>

    </div>
  )
}

export default Footer;