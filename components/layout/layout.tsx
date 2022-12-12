import React, { ReactNode } from "react"

// Typescrypt
/**---
 * @author https://christophe-le-goff.com
 */
interface LayoutProps {
  children: ReactNode
  // other props...
}

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <>
      <main className="select-none">{children}</main>
    </>
  )
}

export default Layout
