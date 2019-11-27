import React from 'react'
import styles from './CommonPadding.module.scss'

const CommonPadding = props => {
  const containerClassName = 'container-flexible'
  return (
    <div
      className={
        props.className
          ? `${props.className} ${styles[containerClassName]}`
          : styles[containerClassName]
      }
    >
      {props.children}
    </div>
  )
}

export default CommonPadding
