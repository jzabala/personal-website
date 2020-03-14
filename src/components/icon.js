import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ className, ...rest }) => (
  <FontAwesomeIcon className={`inline-block w-6 ${className}`} {...rest} />
)

Icon.propTypes = {
  className: PropTypes.string,
}

export default Icon
