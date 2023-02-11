import { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import Favicon from "../components/favicon/favicon";

const _document = () => {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <Favicon />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default _document;
