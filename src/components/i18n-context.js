import React, { useMemo, createContext } from 'react'
import translations from '../translations.json'

const I18nContext = createContext()

function I18nProvider({ langKey, children }) {
  const value = useMemo(
    () => ({
      langKey,
      messages: translations[langKey],
    }),
    [langKey]
  )
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export { I18nProvider, I18nContext }
