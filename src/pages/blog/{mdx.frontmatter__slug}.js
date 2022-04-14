import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useLocalization } from "gatsby-theme-i18n"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import { formatDate } from "../../services/i18n-formatting"

const BlogPost = ({ data }) => {
  const post = data.mdx
  const { t } = useTranslation()
  const { locale, config } = useLocalization()

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />

      <h1 className="font-bold text-3xl mt-4">{post.frontmatter.title}</h1>
      <p className="font-light mt-2">
        {t("published", {
          date: formatDate(post.frontmatter.published_at, locale, config),
        })}
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
