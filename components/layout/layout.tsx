import React, { ReactNode } from "react";
import { seoProps } from "../../lib/interfaces/interfaces";
import Nav from "../nav/nav";
import Seo from "../seo/seo";
import Reseaux from "../widgets/reseaux/reseaux";

/**---
 * @author https://christophe-le-goff.com
 */
export interface LayoutProps {
  children: ReactNode;
  seo: seoProps["seo"];
  // other props...
}

const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <>
      <Seo seo={seo} />
      <Nav />
      <main className="select-none">{children}</main>
      <Reseaux />
    </>
  );
};

export default Layout;
