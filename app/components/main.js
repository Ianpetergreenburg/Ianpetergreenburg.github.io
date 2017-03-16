var React = require('react')
var Header = require('./header');

var Main = React.createClass({
  render: function(){
    return(
      <div className='main-container'>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
