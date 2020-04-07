import React from 'react';
import './style.css';

const Tweet = ({ tweet }) => {
  return (
    <li class="tile-twitter">
      <a href="https://twitter.com/chrisgrabinski">
        <div class="tile-primary-content">
          {/* <article className="Tweet"> */}
          <header>
            {/* <h2>Twitter</h2> */}
            <h2>{tweet.user.name} writes:</h2>
          </header>
          <p>{tweet.text}</p>
          {/* </article> */}
        </div>
        <div class="tile-secondary-content">
          <p>Catch him on Twitter</p>
        </div>
      </a>
    </li>
  );
};

export default Tweet;
