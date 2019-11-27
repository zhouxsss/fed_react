import React from 'react'
import CommonPadding from 'components/layout/CommonPadding'
import { LangProvider } from 'i18n'
import Header from 'components/layout/Header'
import Home from './Home'

function App() {
  return (
    <LangProvider>
      <div>
        <Header />
        <CommonPadding>
          <main>
            <Home />
          </main>
        </CommonPadding>
      </div>
    </LangProvider>
  )
}

export default App
