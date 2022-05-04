import * as React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import Seo from "../components/seo"
import Teaser from "../components/teaser"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t("home")} />

      <div className="flex justify-between items-baseline">
        <h2 className="font-bold text-xl mt-3">{t("recent_writing")}</h2>

        <p>{t("articles_published", { count: 3 })}</p>
      </div>

      {data.allMdx.nodes.map(post => {
        const image = getImage(post.frontmatter.hero_image.image)

        return <Teaser key={post.id} post={post} image={image} />
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query BlogPosts($locale: String) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }) {
      nodes {
        frontmatter {
          hero_image {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 150
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            alt
          }
          slug
          title
          published_at
        }
        id
        excerpt(pruneLength: 150, truncate: true)
      }
    }
  }
`
