import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import useLocalizedDateString from '../hooks/use-localized-date-string'

function PostPreview({ title, description, date, url }) {
  const localizedDateString = useLocalizedDateString(date)
  return (
    <article>
      <header className="mb-2">
        <h1 className="font-extrabold mt-6 text-indigo-600 text-xl">
          <Link to={url}>{title}</Link>
        </h1>
        <span className="text-xs text-gray-800">{localizedDateString}</span>
      </header>
      <section>
        <p className="text-base">{description}</p>
      </section>
    </article>
  )
}

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default PostPreview
