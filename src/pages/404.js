import React from 'react'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <>
    <SEO title="404: NOT FOUND" description="PAGE NOT FOUND" />
    <h1 className="font-bold mb-2 mt-10 text-xl text-center">NOT FOUND</h1>
    <p className="text-center">
      You just hit a route that doesn&#39;t exist{' '}
      <span aria-label="crying face" role="img">
        😢
      </span>
    </p>
  </>
)

export default NotFoundPage
