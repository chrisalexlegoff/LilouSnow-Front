import Head from "next/head";
import React from "react";
import { seoProps } from "../../lib/interfaces/interfaces";

const Seo = (seo: seoProps): JSX.Element => {
  const socialTag = {
    description: seo["seo"].metaDescription,
    title: seo["seo"].metaTitle,
    imageUrl:
      process.env.NEXT_PUBLIC_URL + seo["seo"].metaImage.data.attributes.url,
  };
  const socialTagTwitter = { description: "", title: "", imageUrl: "" };

  seo["seo"].metaSocial.map(
    (val: {
      socialNetwork: string;
      description: string;
      title: string;
      image: { data: { attributes: { url: string } } };
    }) => {
      if (val.socialNetwork == "Facebook") {
        socialTag.description = val.description;
        socialTag.title = val.title;
        socialTag.imageUrl =
          process.env.NEXT_PUBLIC_URL + val.image.data.attributes.url;
      }
      if (val.socialNetwork == "Twitter") {
        socialTagTwitter.description = val.description;
        socialTagTwitter.title = val.title;
        socialTagTwitter.imageUrl =
          process.env.NEXT_PUBLIC_URL + val.image.data.attributes.url;
      }
    }
  );

  return (
    <Head>
      <title>{`${seo["seo"].metaTitle} | Lilou Snow`}</title>
      <meta
        name="description"
        content={seo["seo"].metaDescription}
        key="description"
      />
      <meta name="keywords" content={seo["seo"].keywords} />
      <meta property="og:type" content="website" />
      <meta name="twitter:site" content="@chrisalexlegoff"></meta>
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      {Object.keys(socialTagTwitter).length > 0 && (
        <>
          <meta name="twitter:title" content={socialTagTwitter.title} />
          <meta
            name="twitter:description"
            content={socialTagTwitter.description}
          />
          <meta name="twitter:image" content={socialTagTwitter.imageUrl} />
        </>
      )}
      <meta property="og:url" content={seo["seo"].canonicalURL} key="og:url" />
      <meta property="og:title" content={socialTag.title} key="og:title" />
      <meta
        property="og:description"
        content={socialTag.description}
        key="og:description"
      />
      <meta property="og:image" content={socialTag.imageUrl} key="og:image" />
      <link rel="canonical" href={seo["seo"].canonicalURL} />
      {seo["seo"].metaRobots != null && (
        <>
          <meta name="robots" content={seo["seo"].metaRobots}></meta>
          <meta name="googlebot" content={seo["seo"].metaRobots}></meta>
        </>
      )}
    </Head>
  );
};

export default Seo;
