var React = require('react')
var styles = require('../styles')
var Logo = require('./logo')
var Dropdown = require('./dropdown')

var Header = React.createClass({
  render: function(){
    return(
          <div style={styles.header}>
            <div style={styles.headerBlock}>
              <Logo height={40}/>
              <h1 style={styles.headerText}>IPG</h1>
              <Dropdown />
            </div>
          </div>
      )
  }
})

module.exports = Header
