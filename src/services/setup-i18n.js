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

function setupI18next(currentLocale) {
  i18next
    .use(HttpApi)
    .use(initReactI18next)
    .init({
      lng: currentLocale,
      interpolation: {
        escapeValue: false,
      },
    })
}

export default setupI18next
