import * as React from "react"
import { Trans } from "react-i18next"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="mt-6 pt-3 border-t-[1px]
              border-gray-100 border-solid text-center"
    >
      <Trans i18nKey="footer">
        © {{ year }} | Built with
        {` `}
        <a href="https://www.gatsbyjs.com" className="underline">
          Gatsby
        </a>{" "}
        for the{" "}
        <a href="https://phrase.com/blog/" className="underline">
          Phrase Blog
        </a>{" "}
        | Content from{" "}
        <a
          href="https://en.wikipedia.org/wiki/F._Scott_Fitzgerald_bibliography"
          className="underline"
        >
          Wikipedia
        </a>
      </Trans>
    </footer>
  )
}

export default Footer
