import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import PostPreview from '../components/post-preview'
import Icon from '../components/icon'
import useI18n from '../hooks/use-i18n'

const IndexPage = ({ data }) => {
  const { messages } = useI18n()
  return (
    <>
      <SEO />
      <section className="mb-8 text-center">
        <p
          dangerouslySetInnerHTML={{
            __html: messages['index.description1'],
          }}
        ></p>
        <div className="flex items-center justify-center">
          <p
            className="mb-0"
            dangerouslySetInnerHTML={{
              __html: messages['index.description2'],
            }}
          ></p>
          <Icon
            aria-label="javascript logo"
            className="ml-2"
            icon={['fab', 'js-square']}
          />
          <Icon
            aria-label="react logo"
            className="mx-2"
            icon={['fab', 'react']}
          />
          <Icon
            aria-label="nodejs logo"
            className="w-8"
            icon={['fab', 'node']}
          />
        </div>
      </section>
      <section className="text-center">
        <h2 className="font-black text-2xl">
          {messages['index.blogPostsTitle']}
        </h2>
        {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
          <PostPreview key={id} {...frontmatter} url={fields.url} />
        ))}
      </section>
    </>
  )
}

const query = graphql`
  query PostsQuery($langKey: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { langKey: { eq: $langKey } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          description
          date
        }
        fields {
          url
        }
      }
    }
  }
`

export default IndexPage
export { query }
