// SEO
export interface seoProps {
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalURL: string;
    metaImage: { data: { attributes: { url: string } } };
    metaRobots: string;
    metaSocial: [];
  };
}

// Accueil mobile
interface homeMobileProps {
  h1Sun: string;
  h2Sun: string;
  h3Sun: string;
  h2Sdeux: string;
  paragrapheSdeux: string;
  imagesSun: {};
  imagesSdeux: {};
}

export interface accueilProps {
  homeMobile: homeMobileProps;
  seo: seoProps["seo"];
}
