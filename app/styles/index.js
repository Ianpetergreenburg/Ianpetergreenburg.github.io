var background = require('../images/pattern.svg')

var styles = {
  header: {
    position: 'relative',
    background: '#3d4c96',
    height: '80px',
    boxShadow: '0px 2px 8px #544848'
  },
  headerText: {
    position: 'absolute',
    margin: 0,
    bottom: 0,
    left: 80,
    fontSize: 30,
    color: '#e5dcdc',
    fontFamily: 'Ubuntu',
    textShadow: '1px 1px 2px #a5a5a5',
    display:'inline-block'
  },
  headerBlock: {
    position: 'absolute',
    margin: 0,
    bottom: 5,
    left: '12%',
    width: '60%'
  },
  home: {
    background: '#f7f7f7',
    height: '100%'
  },
  dropdown: {
    position: 'absolute',
    right: '20%'
  }
}

module.exports = styles;
