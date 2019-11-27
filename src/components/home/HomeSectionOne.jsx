import React from 'react'
import { ResponsiveSwitch } from 'ResponsiveWidth'

const PC = () => {
  return (
    <div>
      <p>我是PC</p>
    </div>
  )
}

const Mobile = () => {
  return (
    <div>
      <p>我是Mobile</p>
    </div>
  )
}

const HomeSectionOne = () => {
  return (
    <div style={{ background: 'coral' }}>
      <h3>HomeSectionOne</h3>
      <ResponsiveSwitch pc={PC} mobile={Mobile} />
    </div>
  )
}

export default HomeSectionOne
