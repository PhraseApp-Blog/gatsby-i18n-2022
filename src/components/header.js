import * as React from "react"
import { Link } from "gatsby"
import { BookOpenIcon } from "@heroicons/react/outline"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-800 mb-1">
    <div className="flex mx-auto px-8 py-4 max-w-4xl">
      <h1>
        <Link
          to="/"
          className="flex items-center space-x-0.5 font-black text-white"
        >
          <BookOpenIcon className="stroke-white h-5 w-5" />
          <span>{siteTitle}</span>
        </Link>
      </h1>

      <nav>
        <ul className="flex ml-5 space-x-4">
          <li>
            <Link to="/" className="text-white text-sm">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-sm">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
