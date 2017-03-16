var background = require('../images/pattern.svg')

var styles = {
  header: {
    position: 'relative',
    background: '#3d4c96',
    height: '150px'
  },
  headerText: {
    position: 'absolute',
    margin: 0,
    bottom: 20,
    fontSize: 50,
    color: '#e5dcdc',
    fontFamily: 'Ubuntu',
  },
  home: {
    backgroundImage: 'url(' + background + ')',
    height: '100%'
  }
}

module.exports = styles;
