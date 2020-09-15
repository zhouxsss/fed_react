import React from 'react'
import CommonPadding from './CommonPadding'
import { LangConsumer } from 'i18n'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <CommonPadding>
        <div className={styles.headerCont}>
          <img
            src={require('assets/images/logo.png')}
            alt="logo"
            className={styles.logo}
          />
          <LangConsumer>
            {({ changeLang }) => {
              return <div onClick={changeLang}>{'点我切换语言'}</div>
            }}
          </LangConsumer>
        </div>
      </CommonPadding>
    </div>
  )
}

export default Header
