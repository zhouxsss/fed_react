import React from 'react'
import { Link } from 'react-router-dom'
import CommonPadding from './CommonPadding'
import { LangConsumer, FormattedMessage } from 'i18n'
import { headerNavMenu } from 'utils/menus'
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
          <ul className={styles.nav}>
            {headerNavMenu.map(n => (
              <li key={n.id}>
                <Link to={n.path}>
                  <FormattedMessage id={`nav_${n.id}`} plain />
                </Link>
              </li>
            ))}
            <li>
              <LangConsumer>
                {({ changeLang }) => {
                  return <div onClick={changeLang}>{'点我切换语言'}</div>
                }}
              </LangConsumer>
            </li>
          </ul>
        </div>
      </CommonPadding>
    </div>
  )
}

export default Header
