import * as React from "react"
import { useTranslation } from "react-i18next"
import "./layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { t } = useTranslation()

  return (
    <>
      <Header siteTitle={t("app_name") || `Title`} />
      <div className="mx-auto max-w-4xl pt-2 px-8 pb-4">
        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
