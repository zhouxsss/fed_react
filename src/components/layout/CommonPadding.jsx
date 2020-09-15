import React from 'react'
import styles from './CommonPadding.module.scss'

const CommonPadding = props => {
  const containerClassName = 'container-flexible'
  const { className, style, children } = props
  return (
    <div
      className={
        className
          ? `${className} ${styles[containerClassName]}`
          : styles[containerClassName]
      }
      style={style}
    >
      {children}
    </div>
  )
}

export default CommonPadding
