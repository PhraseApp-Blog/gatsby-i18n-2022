import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { LocalizedLink } from "gatsby-theme-i18n"

export default function Teaser({ post, image }) {
  return (
    <article className="mt-5 flex space-x-4">
      <GatsbyImage
        image={image}
        alt={post.frontmatter.hero_image.alt}
        className="shrink-0"
      />

      <div>
        <h3 className="font-semibold text-lg underline">
          <LocalizedLink to={`/blog/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </LocalizedLink>
        </h3>
        <p className="font-light text-sm">
          Published {post.frontmatter.published_at}
        </p>
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
}
