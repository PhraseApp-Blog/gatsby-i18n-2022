import * as React from "react"

function Footer() {
  return (
    <footer
      className="mt-6 pt-3 border-t-[1px]
              border-gray-100 border-solid text-center"
    >
      © {new Date().getFullYear()} | Built with
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
    </footer>
  )
}

export default Footer
