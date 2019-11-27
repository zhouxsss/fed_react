import React, { useState } from 'react'

const langOptions = {
  chinese: 'zh',
  english: 'en'
}

const LangContext = React.createContext({
  lang: langOptions.chinese,
  changeLang: () => {}
})

// 实际使用的 lang Provider
export const LangProvider = props => {
  const [lang, setLang] = useState(langOptions.chinese)

  const changeLang = () => {
    const l =
      lang === langOptions.chinese ? langOptions.english : langOptions.chinese
    setLang(l)
  }

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {props.children}
    </LangContext.Provider>
  )
}

// 实际使用的 lang Consumer
export const LangConsumer = LangContext.Consumer
