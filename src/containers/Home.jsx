import React from 'react'
import { FormattedMessage } from 'i18n'
import HomeSectionOne from 'components/home/HomeSectionOne'
import HomeSectionTwo from 'components/home/HomeSectionTwo'

const Home = () => {
  return (
    <div>
      <h4>
        <FormattedMessage id="home_title" plain />
      </h4>
      <HomeSectionOne />
      <HomeSectionTwo />
    </div>
  )
}

export default Home
