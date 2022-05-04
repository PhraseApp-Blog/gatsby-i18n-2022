import i18next from "i18next"
import HttpApi from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      about: "__EN__about__EN__",
    },
  },
  ar: {
    translation: {
      about: "__AR__about__AR__",
    },
  },
}

let isSetup = false

function setupI18next(currentLocale) {
  if (isSetup) return

  isSetup = true
  i18next
    // .use(HttpApi)
    .use(initReactI18next)
    .init({
      resources,
      lng: currentLocale,
      interpolation: {
        escapeValue: false,
      },
    })
}

export default setupI18next
