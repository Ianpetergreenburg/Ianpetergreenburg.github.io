var React = require('react')
var Header = require('./header');
var styles = require('../styles')

var Main = React.createClass({
  render: function(){
    return(
      <div className='main-container' style={styles.home}>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
