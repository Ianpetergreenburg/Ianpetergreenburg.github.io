var React = require('react')
var styles = require('../styles')

var Header = React.createClass({
  render: function(){
    return(
        <div style={styles.header}>
          <h1 style={styles.headerText}>Ian Peter Greenburg</h1>
        </div>
      )
  }
})

module.exports = Header
