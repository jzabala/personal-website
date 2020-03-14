import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import SEO from '../components/seo'
import useLocalizedDateString from '../hooks/use-localized-date-string'

function BlogPostTemplate({ data: { mdx: post } }) {
  const { title, description, date } = post.frontmatter
  const localizedDateString = useLocalizedDateString(date)
  return (
    <>
      <SEO title={title} description={description} />
      <section className="post">
        <header className="mb-6 text-center">
          <h1 className="font-bold text-3xl text-indigo-600">{title}</h1>
          <span className="text-sm text-gray-800">{localizedDateString}</span>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
      </section>
    </>
  )
}

const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        description
        date
      }
      body
    }
  }
`

export default BlogPostTemplate
export { query }
