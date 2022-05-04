const path = require(`path`)

let didRunAlready = false
let absoluteLocalesDirectory

exports.onPreInit = ({ store }, { locales }) => {
  // locales must be defined, no default option will be defined
  if (!locales) {
    throw new Error(`
      Please define the 'locales' option of gatsby-theme-i18n-i18next-wrapper
    `)
  }

  if (didRunAlready) {
    throw new Error(
      `You can only have single instance of gatsby-theme-i18n-i18next-wrapper in your gatsby-config.js`
    )
  }

  didRunAlready = true
  absoluteLocalesDirectory = path.join(
    store.getState().program.directory,
    locales
  )
}

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  console.log({ absoluteLocalesDirectory })
  console.log("define", plugins.define)
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        global: {
          GATSBY_THEME_I18N_I18NEXT_WRAPPER: JSON.stringify(
            absoluteLocalesDirectory
          ),
        },
      }),
    ],
  })
}
