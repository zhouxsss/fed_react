import React from 'react'
import { InnerWidthConsumer } from './InnerWidthContext'

export default function withInnerWidth(Comp) {
  return function WrappedComp(props) {
    return (
      <InnerWidthConsumer>
        {({ width }) => <Comp {...props} width={width} />}
      </InnerWidthConsumer>
    )
  }
}
