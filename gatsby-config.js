module.exports = {
  siteMetadata: {
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: require.resolve("./plugins/gatsby-theme-i18n-i18next-wrapper"),
      options: {
        locales: `./i18n/l10n`,
        withPhraseICE: true,
      },
    },
  ],
}
