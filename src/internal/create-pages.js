async function createPages({ actions, graphql, reporter }) {
  const { data, errors } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            url
            langKey
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panic('failed to create posts', errors)
  }

  const { createPage } = actions
  data.allMdx.nodes.forEach(({ fields: { url, langKey }, id }) => {
    createPage({
      path: url,
      component: require.resolve(`${process.cwd()}/src/templates/blog-post.js`),
      context: {
        id,
        langKey,
      },
    })
  })
}

module.exports = createPages
