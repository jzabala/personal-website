import { graphql, useStaticQuery } from 'gatsby'

function useSiteMetadata() {
  const data = useStaticQuery(SiteMetadataQuery)
  return data.site.siteMetadata
}

const SiteMetadataQuery = graphql`
  query SiteMetadataQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

export default useSiteMetadata
