import React from 'react'
import { withInnerWidth } from 'ResponsiveWidth'
import { withLang } from 'i18n'

const HomeSectionTwo = props => {
  return (
    <div style={{ background: 'lightblue' }}>
      <h3>HomeSectionTwo</h3>
      <p>{`withInnerWidth: props.width = ${props.width}`}</p>
      <p>{`withLang: props.localText = ${JSON.stringify(props.localText)}`}</p>
    </div>
  )
}

export default withInnerWidth(withLang(HomeSectionTwo))
