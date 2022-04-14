import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"

function Seo({ description, meta, title }) {
  const { t } = useTranslation()
  const { locale, config } = useLocalization()

  const metaDescription = description || t("app_description")
  const defaultTitle = t("app_name")

  return (
    <Helmet
      htmlAttributes={{
        lang: config.find(c => c.code === locale).hrefLang,
        dir: config.find(c => c.code === locale).langDir,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: t("app_author"),
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
