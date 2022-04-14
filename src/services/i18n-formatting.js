export function formatDate(date, locale, config) {
  return new Intl.DateTimeFormat(langCode(locale, config), {
    dateStyle: "long",
  }).format(Date.parse(date))
}

function langCode(locale, config) {
  return config.find(c => c.code === locale)["hrefLang"]
}
