var React = require('react')
var styles = require('../styles')
var Link = require('react-router').Link

function DropDown (props) {
  return(
      <div className="dropdown" style={styles.dropdown}>
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={styles.dropdownButton}>More Pages <span className="caret"> </span></button>
        <ul className="dropdown-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Ian</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
        )
}

module.exports = DropDown
