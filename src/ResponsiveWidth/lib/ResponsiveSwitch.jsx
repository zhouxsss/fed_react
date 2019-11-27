import React from 'react'
import PropTypes from 'prop-types'
import { InnerWidthConsumer } from './InnerWidthContext'

const ResponsiveSwitch = props => {
  const { pc, mobile, isMobileArr, ...rest } = props

  return (
    <InnerWidthConsumer>
      {({ width }) => {
        const isNeedResponsive = isMobileArr.includes(width)
        const C = isNeedResponsive ? mobile : pc
        return <C {...rest} />
      }}
    </InnerWidthConsumer>
  )
}

ResponsiveSwitch.defaultProps = {
  isMobileArr: [768]
}

ResponsiveSwitch.propTypes = {
  pc: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  mobile: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isMobileArr: PropTypes.arrayOf(PropTypes.number)
}

export default ResponsiveSwitch
