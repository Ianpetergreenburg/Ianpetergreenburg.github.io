var React = require('react')
var styles = require('../styles')
var Logo = require('./logo')
var Dropdown = require('./dropdown')

var Header = React.createClass({
  render: function(){
    return(
        <div style={styles.header}>
          <div style={styles.headerBlock}>
            <Logo height={60}/>
            <h1 style={styles.headerText}>Ian Peter Greenburg</h1>
          </div>
          <Dropdown />
        </div>
      )
  }
})

module.exports = Header
