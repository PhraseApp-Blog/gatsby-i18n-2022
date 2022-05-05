import * as React from "react"
import { navigate } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import { TranslateIcon } from "@heroicons/react/outline"

function LanguageSwitcher() {
  const { locale, defaultLang, config } = useLocalization()

  const switchLanguage = e => {
    if (e.target.value === locale) {
      return
    }

    if (e.target.value === defaultLang) {
      navigate("/")
    } else {
      navigate(`/${e.target.value}`)
    }
  }

  return (
    <div className="flex items-center">
      <TranslateIcon className="w-5 h-5 stroke-white" />

      <select
        value={locale}
        onChange={switchLanguage}
        className="ltr:ml-1 rtl:mr-1 px-2 py-1 rounded-sm bg-white
                  text-purple-900"
      >
        {config.map(c => (
          <option key={c.code} value={c.code}>
            {c.localName} ({c.name})
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
