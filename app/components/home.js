var React = require('react')
var Header = require('./header')
var styles = require('../styles')
var background = require('../images/ian-thingvellir.jpg')

var backgroundImage = {
  backgroundImage: 'url(' + background + ')',
  height: '100%',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundPosition:'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontFamily: 'Helvetica'
}

var Home = React.createClass({

  render: function(){
    return(
        <div style={backgroundImage}>
          <div style={styles.textBlock}>
            <h1 style={{marginTop: 0}}>Ian Peter Greenburg</h1>
            <h3>Full-Stack Web Developer</h3>
          </div>
        </div>
      )
  }
})

module.exports = Home
