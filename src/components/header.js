import * as React from "react"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import { BookOpenIcon } from "@heroicons/react/outline"
import LanguageSwitcher from "./language-switcher"

const Header = ({ siteTitle }) => {
  const { t } = useTranslation()

  return (
    <header className="bg-purple-800 mb-1">
      <div className="flex justify-between mx-auto px-8 py-4 max-w-4xl">
        <div className="flex">
          <h1>
            <LocalizedLink
              to="/"
              className="flex items-center font-black text-white"
            >
              <BookOpenIcon className="stroke-white h-5 w-5" />
              <span className="inline-block ltr:ml-1 rtl:ml-0 rtl:mr-1">
                {siteTitle}
              </span>
            </LocalizedLink>
          </h1>
          <nav>
            <ul className="flex ltr:ml-5 rtl:mr-5">
              <li>
                <LocalizedLink to="/" className="text-white text-sm">
                  {t("articles")}
                </LocalizedLink>
              </li>
              <li className="ltr:ml-4 rtl:mr-4">
                <LocalizedLink to="/about" className="text-white text-sm">
                  {t("about")}
                </LocalizedLink>
              </li>
            </ul>
          </nav>
        </div>

        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default Header
