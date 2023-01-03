import Link from "next/link";
import React, { useEffect } from "react";
import GetImage from "../../../../lib/fetch/get-images";
import gsap from "gsap";

interface sectionUneProps {
  homeMobile: any;
  logoWhite: boolean;
}

const SectionUne = ({ homeMobile, logoWhite }: sectionUneProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".rotate",
        {
          scale: 0.8,
          rotate: -120,
        },
        {
          scale: 1,
          rotate: 0,
          duration: 3,
        }
      );
      gsap.fromTo(
        ".text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 6,
        }
      );
    }
  }, []);
  return (
    <section
      id="section-1"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${homeMobile.imagesSun.data[0].attributes.url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`h-screen w-screen ${logoWhite ? "white" : "black"}`}
    >
      <div className="min-h-[92vh] w-full max-w-md mx-auto flex flex-col justify-around pt-32">
        <div className="text-center w-3/4 flex flex-col items-center justify-center mx-auto">
          <GetImage
            className="rotate absolute z-0"
            image={homeMobile.imagesSun.data[1].attributes}
            loading="eager"
            priority={true}
          />
          <div className="text opacity-0 z-10 h-[300px] flex flex-col justify-center">
            <GetImage
              className="w-fit mx-auto"
              image={homeMobile.imagesSun.data[2].attributes}
              loading="eager"
            />
            <div
              className="h1-accueil-section-1 mt-3 mb-1"
              dangerouslySetInnerHTML={{ __html: homeMobile.h1Sun }}
            ></div>
            <div
              className="h2-accueil-section-1"
              dangerouslySetInnerHTML={{ __html: homeMobile.h2Sun }}
            ></div>
            <div
              className="h3-accueil-section-1 mt-3"
              dangerouslySetInnerHTML={{ __html: homeMobile.h3Sun }}
            ></div>
          </div>
        </div>
        <Link href={"/#section-2"}>
          <GetImage
            className="w-fit mx-auto"
            image={homeMobile.imagesSun.data[3].attributes}
            loading="eager"
            priority
          />
        </Link>
      </div>
    </section>
  );
};

export default SectionUne;
