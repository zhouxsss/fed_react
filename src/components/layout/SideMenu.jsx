import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'i18n'
import { menus } from 'utils/menus'
import styles from './SideMenu.module.scss'

const SideMenu = () => {
  return (
    <div className={styles.sides}>
      {menus.map(menu => (
        <>
          {menu.path ? (
            <Link to={menu.path} className={styles.menu}>
              <FormattedMessage id={`nav_${menu.id}`} plain />
            </Link>
          ) : (
            <>
              <FormattedMessage id={`nav_${menu.id}`} plain />
              {menu.children &&
                menu.children.map(subMenu => (
                  <li key={subMenu.id}>
                    <Link to={subMenu.path}>
                      <FormattedMessage id={`nav_${subMenu.id}`} plain />
                    </Link>
                  </li>
                ))}
            </>
          )}
        </>
      ))}
    </div>
  )
}

export default SideMenu
