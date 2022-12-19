import Link from "next/link"
import React, { useEffect } from "react"
import GetImage from "../../../../lib/fetch/get-images"
import gsap from "gsap"

interface sectionUneProps {
  homeMobile: any
}

const SectionUne = ({ homeMobile }: sectionUneProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".rotate",
        {
          scale: 0.5,
          rotate: 0,
        },
        {
          scale: 1,
          rotate: 360,
          duration: 5,
        }
      )
    }
  }, [])
  return (
    <section
      id="section-1"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${homeMobile.imagesSun.data[0].attributes.url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen w-screen py-24"
    >
      <div className="h-full w-full max-w-md mx-auto flex flex-col">
        <div className="text-center h-full w-3/4 flex flex-col items-center justify-center mx-auto">
          <GetImage
            className="rotate absolute z-0"
            image={homeMobile.imagesSun.data[1].attributes}
            loading="eager"
            priority={true}
          />
          <div className="z-10 h-[300px] flex flex-col justify-evenly">
            <GetImage
              className="w-fit mx-auto"
              image={homeMobile.imagesSun.data[2].attributes}
              loading="eager"
            />
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: homeMobile.h1Sun }}
            ></div>
            <div
              className="h2-accueil-section-1"
              dangerouslySetInnerHTML={{ __html: homeMobile.h2Sun }}
            ></div>
            <div
              className="h3-accueil-section-1"
              dangerouslySetInnerHTML={{ __html: homeMobile.h3Sun }}
            ></div>
          </div>
        </div>
        <Link href={"/#section-2"}>
          <GetImage
            className="w-fit mx-auto"
            image={homeMobile.imagesSun.data[3].attributes}
            loading="eager"
          />
        </Link>
      </div>
    </section>
  )
}

export default SectionUne
