import type { AppProps } from "next/app"
import { useEffect } from "react"
import "../styles/globals.css"
import { fixMobileSize } from "./../lib/helpers/mobile-size-fix"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Mise à niveau taille pour mobile -- vh
    fixMobileSize()
  }, [])

  return <Component {...pageProps} />
}
