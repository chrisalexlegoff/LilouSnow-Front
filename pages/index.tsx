import React from "react"
import Layout from "../components/layout/layout"
import { API } from "../lib/constants/api"
import { fetchGetter } from "../lib/fetch/get"

interface accueilProps {
  home: any
}

const Accueil = ({ home }: accueilProps): JSX.Element => {
  return (
    <Layout>
      <h1>{home.text}</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const home = await fetchGetter({ path: API.HOME })

  return {
    props: {
      home: home.data.attributes,
    },
  }
}

export default Accueil
