import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faGithub,
//   faTwitter,
//   faLinkedin,
// } from '@fortawesome/free-brands-svg-icons'
import Icon from './icon'
import { languages } from '../utils/i18n'
import useI18n from '../hooks/use-i18n'
import Link from './link'
import Logo from './logo'
import LanguageButton from './language-button'

const Header = () => {
  const { messages } = useI18n()

  return (
    <header className="max-w-4xl mb-2 mx-auto px-3 py-4 text-right flex flex-col items-center justify-between sm:flex-row">
      <Link to="/">
        <Logo className="mb-5 sm:mb-0" />
      </Link>
      <div>
        {languages.map(lang => (
          <LanguageButton key={lang} lang={lang}>
            {messages['languages'][lang]}
          </LanguageButton>
        ))}
        <a
          aria-label="twitter account"
          href="https://twitter.com/jzabalasanchez"
        >
          <Icon icon={['fab', 'twitter']} />
        </a>
        <a
          aria-label="linkedin account"
          className="mx-4"
          href="https://www.linkedin.com/in/johnnyzabala/"
        >
          <Icon icon={['fab', 'linkedin']} />
        </a>
        <a aria-label="github account" href="https://github.com/jzabala">
          <Icon icon={['fab', 'github']} />
        </a>
      </div>
    </header>
  )
}

export default Header
