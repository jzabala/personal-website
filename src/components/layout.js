import React from 'react'
import PropTypes from 'prop-types'
import { I18nProvider } from './i18n-context'
import Header from './header'

const Layout = ({ pageContext: { langKey }, children }) => (
  <I18nProvider langKey={langKey}>
    <Header />
    <main className="max-w-2xl mx-auto pb-10 px-4">{children}</main>
  </I18nProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.shape({
    langKey: PropTypes.string.isRequired,
  }).isRequired,
}

export default Layout
