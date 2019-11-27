import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const responsiveWidth = [768, 1200]

// For now we just check whether the width is smaller then 768px or not. In a word,
// this only supports 2 components switching.
// See ResponsiveSwitch.jsx
function getResponsiveWidth(width) {
  for (const w of responsiveWidth) {
    if (width <= w) {
      return w
    }
  }
  return 0
}

const InnerWidthWatcher = props => {
  const [w, setW] = useState(null)
  const { dispatch } = props

  useEffect(() => {
    const handleChangeWidth = () => {
      const clientWidth = Math.min(
        window.innerWidth,
        document.documentElement.clientWidth
      )
      const wi = getResponsiveWidth(clientWidth)
      setW(wi)
    }
    handleChangeWidth()
    window.addEventListener('resize', handleChangeWidth)
    return () => {
      window.removeEventListener('resize', handleChangeWidth)
    }
  }, [])
  useEffect(() => {
    if (w !== null) {
      dispatch({
        type: 'window/setWidth',
        payload: w
      })
    }
  }, [w])

  return props.children
}

function mapStateToProps({ window }) {
  return { window }
}

export default connect(mapStateToProps)(InnerWidthWatcher)
