import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPost = ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />

      <h1 className="font-bold text-3xl mt-4">{post.frontmatter.title}</h1>
      <p className="font-light mt-2">
        Published at {post.frontmatter.published_at}
      </p>

      <GatsbyImage
        className="mt-3"
        alt={post.frontmatter.hero_image.alt}
        image={getImage(post.frontmatter.hero_image.image)}
      />

      <article className="mt-4 prose">
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostBySlug($frontmatter__slug: String, $locale: String) {
    mdx(
      frontmatter: { slug: { eq: $frontmatter__slug } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
        published_at
        hero_image {
          image {
            childImageSharp {
              gatsbyImageData(
                height: 700
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          alt
        }
      }
      body
    }
  }
`
