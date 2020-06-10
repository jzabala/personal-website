import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import useSiteMetadata from '../hooks/use-sitemetadata'
import useI18n from '../hooks/use-i18n'

function SEO({ description, meta, title }) {
  const site = useSiteMetadata()
  const { langKey } = useI18n()

  return (
    <Helmet
      htmlAttributes={{
        lang: langKey,
      }}
      title={title || site.title}
      titleTemplate={title ? `%s | ${site.title}` : undefined}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
