import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { BookOpenIcon } from "@heroicons/react/outline"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-800 mb-1">
    <div className="flex mx-auto px-8 py-4 max-w-4xl">
      <h1>
        <LocalizedLink
          to="/"
          className="flex items-center space-x-0.5 font-black text-white"
        >
          <BookOpenIcon className="stroke-white h-5 w-5" />
          <span>{siteTitle}</span>
        </LocalizedLink>
      </h1>

      <nav>
        <ul className="flex ml-5 space-x-4">
          <li>
            <LocalizedLink to="/" className="text-white text-sm">
              Articles
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink to="/about" className="text-white text-sm">
              About
            </LocalizedLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
