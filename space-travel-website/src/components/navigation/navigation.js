import React from 'react';
import logo from '../../assets/shared/logo.svg';
import { Link } from 'react-router-dom';


const Navigation = () => (
  <div data-testid="Navigation">
    <div className='navigation'>
    <a className="skip-to-content" href="#main">Skip to content</a>
      <header className="primary-header flex">
        {/* <!-- logo --> */}
        <div>
          <a href="index.html"><img src={logo} alt="space tourism logo" className="logo" /></a>
        </div>

        {/* <!-- hamburger menu button --> */}
        <button className="mobile-nav-toggle" aria-controls="primary-navigation">
          <span className="sr-only" aria-expanded="false">Menu</span>
        </button>

        {/* <!-- navbar --> */}
        <nav>
          <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
            <li className="active"><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/"><span
              aria-hidden="true">00</span>Home</Link></li>
            <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/destination"><span
              aria-hidden="true">01</span>Destination</Link></li>
            <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/crew"><span
              aria-hidden="true">02</span>Crew</Link></li>
            <li><Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/technology"><span
              aria-hidden="true">03</span>Technology</Link></li>
          </ul>
        </nav>

        {/* <!-- my ::after goes here --> */}
      </header>
    </div>
  </div>
);


export default Navigation;
