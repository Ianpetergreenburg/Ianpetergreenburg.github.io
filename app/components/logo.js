var React = require('react')

function Logo (props) {

  var height = props.height

  var styles =   {
        imgBG: {
        margin: '0 auto',
        background: 'white',
        borderRadius: (height*1.25) + 'px',
        height: (height*1.25) + 'px',
        width: (height*1.25) + 'px',
        display: 'inline-block',
        boxShadow: '2px 2px 2px #474747'
      },
      logo: {
        height: height + 'px',
        marginLeft: -(height*.2) + 'px',
        marginTop: (height*.08) + 'px'
      }
    }

  return(
    <div style={styles.imgBG}>
      <img src='./app/images/logo-final.png' style={styles.logo} />
    </div>
    )
}

module.exports = Logo
