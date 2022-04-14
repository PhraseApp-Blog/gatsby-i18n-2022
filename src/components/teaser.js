import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { formatDate } from "../services/i18n-formatting"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"

export default function Teaser({ post, image }) {
  const { t } = useTranslation()
  const { locale, config } = useLocalization()
  return (
    <article className="mt-5 flex">
      <GatsbyImage
        image={image}
        alt={post.frontmatter.hero_image.alt}
        className="shrink-0"
      />

      <div className="ltr:ml-4 rtl:mr-4">
        <h3 className="font-semibold text-lg underline">
          <LocalizedLink to={`/blog/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </LocalizedLink>
        </h3>
        <p className="font-light text-sm">
          {t("published", {
            date: formatDate(post.frontmatter.published_at, locale, config),
          })}
        </p>
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
}
