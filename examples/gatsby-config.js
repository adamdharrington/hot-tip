module.exports = {
  siteMetadata: {
    title: 'Hot Tip',
    author: 'Adam Harrington',
    description: `The stress-free tooltip solution.`,
    lang: 'en-ie',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['node_modules', '../node_modules'],
      },
    },
  ],
  pathPrefix: `/hot-tip`,
}
