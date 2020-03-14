import React from 'react'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'

import useI18n from '../hooks/use-i18n'
import { defaultLanguage, languages } from '../utils/i18n'

function LanguageButton({ lang, ...rest }) {
  const { langKey } = useI18n()
  const { pathname } = useLocation()

  return (
    <button
      type="button"
      className={`mr-4 focus:outline-none hover:soft-underline ${
        langKey === lang ? 'hard-underline hover:hard-underline' : ''
      }`}
      onClick={() => {
        const replaceLang = lang === defaultLanguage ? '/' : `/${lang}/`
        navigate(pathname.replace(LANG_PATH_REGEX, replaceLang))
      }}
      {...rest}
    />
  )
}

const LANG_PATH_REGEX = new RegExp(
  `${languages.map(lang => `/${lang}/`).join('|')}|/`,
  'i'
)

export default LanguageButton

// style={{
//   background: "none",
//   color: "inherit",
//   border: "none",
//   padding: 0,
//   font: "inherit",
//   cursor: "pointer",
//   outline: "inherit",
//   textDecoration: langKey === lang ? "underline" : undefined,
// }}
