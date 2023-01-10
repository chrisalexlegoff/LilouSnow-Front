import React from "react";
import Layout from "../components/layout/layout";
import SectionUne from "../components/mobile/accueil/section-1/section-1";
import SectionDeux from "../components/mobile/accueil/section-1/section-2";
import { API } from "../lib/constants/api";
import { fetchGetter } from "../lib/fetch/get";
import { accueilProps } from "../lib/interfaces/interfaces";

const Accueil = ({ homeMobile, seo }: accueilProps): JSX.Element => {
  return (
    <Layout seo={seo}>
      <div className="md:hidden">
        {/* Section une */}
        <SectionUne homeMobile={homeMobile} logoWhite={false} />
        <SectionDeux homeMobile={homeMobile} logoWhite={false} />
        <div className="md:hidden">
          <section id="section-2" className="white flex h-[700px] bg-[white]">
            <h1>section 2</h1>
          </section>
          <section id="section-3" className="flex h-[700px]  bg-[black]">
            <h1>section 3</h1>
          </section>
          <section id="section-4" className="white flex h-[700px] bg-[white]">
            <h1>section 4</h1>
          </section>
          <section id="section-5" className="flex h-[700px]  bg-[black]">
            <h1>section 5</h1>
          </section>
          <section id="section-6" className="white flex h-[700px] bg-[white]">
            <h1>section 6</h1>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const homeMobile = await fetchGetter({ path: API.HOME_MOBILE });

  return {
    props: {
      homeMobile: homeMobile.data.attributes,
      seo: homeMobile.data.attributes.seo,
    },
  };
}

export default Accueil;
