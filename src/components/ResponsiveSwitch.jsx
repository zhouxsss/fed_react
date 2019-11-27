import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const ResponsiveSwitch = props => {
  const { width, pc, mobile, isMobileArr = [768], ...rest } = props
  const isNeedResponsive = isMobileArr.includes(width)
  const C = isNeedResponsive ? mobile : pc
  return <C {...rest} />
}

ResponsiveSwitch.propTypes = {
  pc: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  mobile: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

function mapStateToProps({ window }) {
  return {
    width: window.width
  }
}
export default connect(mapStateToProps)(ResponsiveSwitch)
