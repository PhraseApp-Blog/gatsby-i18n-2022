import * as React from "react"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"
import PhraseInContextEditorPostProcessor from "i18next-phrase-in-context-editor-post-processor"

const wrapPageElement = ({ element, props }, options) => {
  const currentLocale = props.pageContext.locale

  const translation = require(`${global.GATSBY_THEME_I18N_I18NEXT_WRAPPER}/${currentLocale}/translation.json`)

  let instance = options.withPhraseICE
    ? i18next.use(
        new PhraseInContextEditorPostProcessor({
          phraseEnabled: true,
          projectId: process.env.GATSBY_PHRASE_PROJECT_ID,
          prefix: "{{",
          suffix: "}}",
        })
      )
    : i18next

  const postProcess = []

  if (options.withPhraseICE) {
    postProcess.push("phraseInContextEditor")
  }

  instance.init({
    lng: currentLocale,
    resources: { [currentLocale]: { translation } },
    fallbackLng: "en",
    initImmediate: false,
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    postProcess,
  })

  return <I18nextProvider i18n={instance}>{element}</I18nextProvider>
}

export { wrapPageElement }
