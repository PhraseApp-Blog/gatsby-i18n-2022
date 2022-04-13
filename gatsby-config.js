module.exports = {
  siteMetadata: {
    title: `fslivre`,
    description: `A blog dedicated to F. Scott Fitzgerald`,
    author: `Phrase`,
    siteUrl: `https://example.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
  ],
}
