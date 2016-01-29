var React = require('react');
var Router = require('react-router');
var jQuery = require('jquery');

var Home = React.createClass({
  getInitialState: function() {
    return { tweets: [] }
  },
  componentWillMount: function() {
    jQuery.ajax({
      url: 'http://localhost:3001/tweets',
      method: 'GET',
      success: (resp) => {
        resp.map((obj) => {
          var tweets = [...this.state.tweets, obj]
          this.setState({tweets: tweets})
        })
      },
      error: (resp) => {
        console.log('error: ' + resp)
      }
    })
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },
  render: function() {
    return (
      <div className="text-left">
        {
          this.state.tweets.map((tweet) => {
            return <p><a href={tweet.entities.urls[0] ? tweet.entities.urls[0].expanded_url : null}>{tweet.entities.urls[0].expanded_url}</a> - @{tweet.user.screen_name}</p>
          })
        }
      </div>
    )
  }
});

module.exports = Home;