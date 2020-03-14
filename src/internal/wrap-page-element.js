const React = require('react')
const Layout = require('../components/layout').default
require('../utils/fontawesome')

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

module.exports = wrapPageElement
