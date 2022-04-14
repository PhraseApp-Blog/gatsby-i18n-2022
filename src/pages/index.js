import { graphql } from "gatsby"
import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Teaser from "../components/teaser"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />

    <div className="flex justify-between items-baseline">
      <h2 className="font-bold text-xl mt-3">Recent writing</h2>
    </div>

    {data.allMdx.nodes.map(post => {
      const image = getImage(post.frontmatter.hero_image.image)

      return <Teaser key={post.id} post={post} image={image} />
    })}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query BlogPosts {
    allMdx {
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
        excerpt(pruneLength: 150)
      }
    }
  }
`
