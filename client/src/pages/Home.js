import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="home-container">

      <div className="home-title">
        <h1>Get smarter about what matters to you.</h1>
      </div>

      <div className="home-started">
        <p>Select what you're into. We'll help you find great things to read.</p>
        <Link to="/register"><button type="button">Get Started</button></Link>
        <p>Already have an account? <Link to="/login">Sign in.</Link></p>
      </div>

      <div className="home-adventages">
        <div className="home-adventages-item">
          <img src="/images/checklist.png" alt="checklist" />
          <p>World-class publications.</p>
        </div>
        <div className="home-adventages-item">
          <img src="/images/checklist.png" alt="checklist" />
          <p>Undiscovered voices.</p>
        </div>
        <div className="home-adventages-item">
          <img src="/images/checklist.png" alt="checklist" />
          <p>Topics you love.</p>
        </div>
        <div className="home-adventages-item">
          <p className="home-adventages-item-last">All on Medium, all for you.</p>
        </div>
      </div>

      <div className="home-ads-section">
        <div className="home-ads-section-title">
          <h1>No ads. No problems.</h1>
          <p>Your privacy stays yours. We don’t sell your data or target you with ads. Ever.</p>
        </div>
        <div className="home-ads-section-started">
          <div className="home-ads-section-started-left">
            <Link to="/register"><button>Get Started</button></Link>
          </div>
          <div className="home-ads-section-started-right">
            <h4>We do things differently.</h4>
            <p>Medium is not like any other platform on the internet. Our sole purpose is to help you find compelling ideas, knowledge, and perspectives. We don’t serve ads—we serve you, the curious reader who loves to learn new things. Medium is home to thousands of independent voices, and we combine humans and technology to find the best reading for you—and filter out the rest.</p>
          </div>
        </div>
      </div>

      <div className="home-subscription">
        <h4>One Subscription. Unlimited Ideas.</h4>
        <p>Read unlimited stories with an optional subscription of $5/month. If it's not for you, cancel anytime.</p>
      </div>

      <div className="home-footer-offer">
        <h1>Expand your reading. Expand your mind.</h1>
        <Link to="/register"><button type="button">Get Started</button></Link>
      </div>
    </div>
  )
}

export default Home;