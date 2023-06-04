import './App.css';
import logo from './assets/shared/logo.svg';

function App() {
  return (
    <div className="home">
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
            <li className="active"><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="index.html"><span
              aria-hidden="true">00</span>Home</a></li>
            <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="./html/destination.html"><span
              aria-hidden="true">01</span>Destination</a></li>
            <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="./html/crew.html"><span
              aria-hidden="true">02</span>Crew</a></li>
            <li><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="./html/technology.html"><span
              aria-hidden="true">03</span>Technology</a></li>
          </ul>
        </nav>

        {/* <!-- my ::after goes here --> */}
      </header>

      {/* <!-- intro text --> */}
      <main id="main" className="grid-container grid-container--home">
        {/* <!-- intro text --> */}
        <div>
          <h1 className="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
            <span className="d-block fs-900 ff-serif text-white">Space</span>
          </h1>
          <p className="text-light">
            Let's face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we'll give you a truly out of this world experience!
          </p>
        </div>

        {/* <!-- explore button --> */}
        <div>
          <a href="./html/destination.html" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
        </div>
      </main>
    </div>
  );
}

export default App;
