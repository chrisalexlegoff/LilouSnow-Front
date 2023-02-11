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
  imagesSun: any;
  imagesSdeux: any;
  buttonSdeux: string;
}

export interface accueilProps {
  homeMobile: homeMobileProps;
  seo: seoProps["seo"];
  logoWhite: boolean;
}

export interface maintenanceProps {
  seo: seoProps["seo"];
  maintenanceMobile?: maintenanceMobileProps;
  maintenanceDesktop?: maintenanceDesktopProps;
}

export interface maintenanceMobileProps {
  images: any;
  h1Maintenance: string;
  h2Maintenance: string;
  h3Maintenance: string;
  h4Maintenance: string;
}
export interface maintenanceDesktopProps {
  images: any;
  h1Maintenance: string;
  h2Maintenance: string;
  h3Maintenance: string;
  h4Maintenance: string;
  titreReseau1: string;
  titreReseau2: string;
  paragraphe1Maintenance: string;
}
