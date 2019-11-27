import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'i18n'

import styles from './About.module.scss'

const About = props => {
  const addOne = () => {
    props.dispatch({
      type: 'count/increment'
    })
  }

  const minusOne = () => {
    props.dispatch({
      type: 'count/decrement'
    })
  }

  const asyncDecrementOne = () => {
    props.dispatch({
      type: 'count/asyncDecrement'
    })
  }

  return (
    <div className={styles.about}>
      <h4>
        <FormattedMessage id="about_title" plain />
      </h4>
      <p>{`count: ${props.count}`}</p>
      <div>
        <button onClick={addOne}>click +1</button>
        <button onClick={minusOne}>click -1</button>
        <button onClick={asyncDecrementOne}>click -1 after 2s</button>
      </div>
    </div>
  )
}

export default connect(({ count: { count } }) => ({ count }))(About)
