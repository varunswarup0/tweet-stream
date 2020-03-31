import React from 'react';

import Tweet from './Tweet';
import { connect } from 'react-redux';

const Tweets = ({ tweets = [] }) => {
  return (
    <section className="Tweets">
      {tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </section>
  );
};

const mapStateToProps = ({ tweets }) => ({ tweets });

export default connect(mapStateToProps)(Tweet);
