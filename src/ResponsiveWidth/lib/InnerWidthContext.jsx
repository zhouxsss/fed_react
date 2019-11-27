import React, { useState, useEffect } from 'react'

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

const InnerWidthContext = React.createContext({
  width: 0
})

export const InnerWidthProvider = props => {
  const [w, setW] = useState(0)

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

  return (
    <InnerWidthContext.Provider value={{ width: w }}>
      {props.children}
    </InnerWidthContext.Provider>
  )
}

export const InnerWidthConsumer = InnerWidthContext.Consumer
