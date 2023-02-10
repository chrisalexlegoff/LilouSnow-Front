import Link from "next/link";
import React, { useEffect } from "react";
import GetImage from "../../../../lib/fetch/get-images";
import gsap from "gsap";
import { accueilProps } from "../../../../lib/interfaces/interfaces";

const SectionDeux = ({ homeMobile, logoWhite }: accueilProps) => {
  return (
    <section
      id="section-2"
      className={`h-screen w-screen bg-encre-de-chine ${
        logoWhite ? "white" : "black"
      }`}
    >
      <div className="min-h-screen max-w-md mx-auto flex flex-col justify-around items-center py-32 text-white w-10/12">
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: homeMobile.h2Sdeux }}
        ></div>
        <GetImage
          className="mx-auto w-full min-h-60 relative"
          fill={true}
          image={homeMobile.imagesSdeux.data[0].attributes}
          loading="eager"
          priority
        />
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: homeMobile.paragrapheSdeux }}
        ></div>
        <div className="w-full">
          <Link href="/a-propos" passHref>
            <button className="mx-auto group w-3/4 hover:bg-dore h-20 block border-2 border-dore text-dore">
              <span
                dangerouslySetInnerHTML={{ __html: homeMobile.buttonSdeux }}
                className="texte-button group-hover:text-blanc"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionDeux;
