var background = require('../images/pattern.svg')

var styles = {
  header: {
    position: 'relative',
    background: '#3d4c96',
    height: '60px',
    boxShadow: '0px 2px 8px #544848'
  },
  headerText: {
    position: 'absolute',
    margin: 0,
    bottom: 8,
    left: 55,
    fontSize: 30,
    color: 'white',
    fontFamily: 'Ubuntu',
    textShadow: '1px 1px 2px #a5a5a5',
    display:'inline-block'
  },
  headerBlock: {
    position: 'absolute',
    margin: 0,
    bottom: 5,
    left: '12%',
    width: '80%'
  },
  home: {
    background: '#f7f7f7',
    height: '100%'
  },
  dropdown: {
    top: 0,
    position: 'absolute',
    right: '20%'
  },
  dropdownButton: {
    backgroundColor: '#3d4c96',
    border: '0px'
  },
  textBlock: {
     position: 'relative',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     color: 'white'
  }
}

module.exports = styles;
