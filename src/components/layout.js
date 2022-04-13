import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="mx-auto max-w-4xl pt-2 px-8 pb-4">
        <main>{children}</main>
        <footer className="mt-6 pt-3 border-t-[1px] border-gray-100 border-solid text-center">
          © {new Date().getFullYear()} — Built with
          {` `}
          <a href="https://www.gatsbyjs.com" className="underline">
            Gatsby
          </a>{" "}
          for the{" "}
          <a href="https://phrase.com/blog/" className="underline">
            Phrase Blog
          </a>
          .
        </footer>
      </div>
    </>
  )
}

export default Layout
