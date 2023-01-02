import React, { ReactNode } from "react"
import Nav from "../nav/nav"
import Reseaux from "../widgets/reseaux/reseaux"

/**---
 * @author https://christophe-le-goff.com
 */
interface LayoutProps {
  children: ReactNode
  // other props...
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <main className="select-none">{children}</main>
      <Reseaux />
    </>
  )
}

export default Layout
