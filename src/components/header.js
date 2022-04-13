import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-800 mb-1">
    <div className="mx-auto px-5 py-4 max-w-4xl">
      <h1>
        <Link to="/" className="text-white">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
