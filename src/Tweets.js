import React from 'react';
import { connect } from 'react-redux';

import Tweet from './Tweet';

const Tweets = ({ tweets = [] }) => {
  return (
    <ul class="masonry-list">
      {/* <section className="Tweets"> */}
      {tweets.map((tweet) => (
        // <li class="tile-twitter">
        <Tweet key={tweet.id} tweet={tweet} />
        // </li>
      ))}
      {/* </section> */}
    </ul>
  );
};

const mapStateToProps = ({ tweets }) => ({ tweets });

export default connect(mapStateToProps)(Tweets);
