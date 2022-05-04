import * as React from "react"
import i18next from "i18next"
import { I18nextProvider } from "react-i18next"

const wrapPageElement = ({ element, props }, options) => {
  const currentLocale = props.pageContext.locale

  const translation = require(`${global.GATSBY_THEME_I18N_I18NEXT_WRAPPER}/${currentLocale}/translation.json`)

  i18next.init({
    lng: currentLocale,
    resources: { [currentLocale]: { translation } },
    fallbackLng: "en",
    initImmediate: false,
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
  })

  return <I18nextProvider i18n={i18next}>{element}</I18nextProvider>
}

export { wrapPageElement }
