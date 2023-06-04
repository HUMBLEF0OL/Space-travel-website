import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div data-testid="Home">
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
          <Link to="/destination" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</Link>
        </div>
      </main>
  </div>
);



export default Home;
