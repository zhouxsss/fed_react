import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CommonPadding from 'components/layout/CommonPadding'
import { InnerWidthProvider } from 'ResponsiveWidth'
import { LangProvider } from 'i18n'
import Header from 'components/layout/Header'
import SideMenu from 'components/layout/SideMenu'

import { menus } from 'utils/menus'

function App() {
  return (
    <InnerWidthProvider>
      <LangProvider>
        <div>
          <Header />
          <CommonPadding style={{ display: 'flex' }}>
            <SideMenu />
            <div style={{ flex: 1 }}>
              <Switch>
                {menus.map(menu =>
                  menu.path ? (
                    <Route
                      exact
                      path={menu.path}
                      component={menu.component}
                      childMenus={menu.child}
                    />
                  ) : (
                    menu.children.map(subMenu => (
                      <Route
                        exact
                        path={subMenu.path}
                        component={subMenu.component}
                        childMenus={subMenu.child}
                      />
                    ))
                  )
                )}
                <Redirect to="/" />
              </Switch>
            </div>
          </CommonPadding>
        </div>
      </LangProvider>
    </InnerWidthProvider>
  )
}

export default App
