import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CommonPadding from 'components/layout/CommonPadding'
import { LangProvider } from 'i18n'
import Header from 'components/layout/Header'
import Home from './Home'

import r from 'constants/routes'
import About from './About'

function App() {
  return (
    <LangProvider>
      <div>
        <Header />
        <CommonPadding>
          <Switch>
            <Route exact path={r.home} component={Home} />
            <Route exact path={r.about} component={About} />
            <Redirect to="/" />
          </Switch>
        </CommonPadding>
      </div>
    </LangProvider>
  )
}

export default App
