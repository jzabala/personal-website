module.exports = {
  siteMetadata: {
    title: 'jzabala.com',
    author: '@jzabalasanchez',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayout: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-vscode',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 672,
            },
          },
        ],
      },
    },
  ],
}
