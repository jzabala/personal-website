import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

import useI18n from '../hooks/use-i18n'
import { defaultLanguage } from '../utils/i18n'

const Link = ({ to, ...rest }) => {
  const { langKey } = useI18n()
  const path = langKey !== defaultLanguage ? `/${langKey}${to}` : to

  return <GatsbyLink to={path} {...rest} />
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
}

export default Link
