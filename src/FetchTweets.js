import React from 'react';
import { connect } from 'react-redux';
import { fetchTweets } from './actions';

const FetchTweets = ({ fetchTweets }) => {
  return (
    <button onClick={fetchTweets}>
      <div className="fetchTweetsButton">Fetch Tweets</div>
    </button>
  );
};

export default connect(null, { fetchTweets })(FetchTweets);
