import { Link } from "gatsby"
import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About" />

    <h2 className="font-bold text-xl mt-3">About</h2>

    <p className="mt-1">
      This is a demo app created for a{" "}
      <Link to="https://phrase.com/blog/" className="font-semibold underline">
        Phrase blog
      </Link>{" "}
      article using{" "}
      <Link to="https://www.gatsbyjs.com/" className="font-semibold underline">
        Gatsby
      </Link>
      . Enjoy :)
    </p>
  </Layout>
)

export default AboutPage
