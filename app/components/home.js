var React = require('react')
var Header = require('./header')
var styles = require('../styles')

var Home = React.createClass({
  render: function(){
    return(
        <div style={styles.home}>
          Home Component
        </div>
      )
  }
})

module.exports = Home
