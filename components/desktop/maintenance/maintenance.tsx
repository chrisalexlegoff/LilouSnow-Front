import gsap from "gsap";
import React, { useEffect } from "react";
import GetImage from "../../../lib/fetch/get-images";
import { maintenanceProps } from "../../../lib/interfaces/interfaces";
import Reseaux from "../../widgets/reseaux/reseaux";

const MaintenanceComponentDesktop = ({
  maintenanceDesktop,
}: maintenanceProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hiddens: NodeListOf<HTMLElement> =
        document.querySelectorAll(".appear");
      hiddens.forEach((hidden) => {
        hidden.style.visibility = "hidden";
      });
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appears = gsap.utils.toArray<HTMLElement>(".appear");
      var tl = gsap.timeline({ delay: 1 });

      appears.forEach((appear) => {
        appear.style.scale = "0";
        tl.to(appear, {
          visibility: "visible",
          scale: 1,
          duration: 0.5,
        });
      });

      gsap.fromTo(
        ".open",
        {
          transform: "translateX(-100%)",
        },
        {
          transform: "translateX(0)",
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ".show > img",
        {
          scale: 0.5,
          visibility: "hidden",
          rotate: -60,
        },
        {
          visibility: "visible",
          rotate: 0,
          scale: 1,
          delay: 2,
          duration: 2,
        }
      );
      gsap.fromTo(
        ".demiFlocon",
        {
          transformOrigin: "left",
          scale: 0.2,
        },
        {
          scale: 1,
          delay: 0.5,
          duration: 2,
        }
      );
    }
  }, []);
  return (
    <div
      id="maintenance"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${maintenanceDesktop?.images.data[0].attributes.url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen w-screen"
    >
      <div className="open bg-gris-transparent w-1/2 min-w-[600px] text-center px-4">
        <div className="flex flex-col min-h-screen justify-around py-16 items-center">
          <div className="flex flex-col items-center">
            <div className="appear">
              <GetImage
                className=""
                image={maintenanceDesktop?.images.data[1].attributes}
                loading="eager"
                priority={true}
              />
              <div className="">
                <div
                  className="h1-maintenance"
                  dangerouslySetInnerHTML={{
                    __html: maintenanceDesktop
                      ? maintenanceDesktop.h1Maintenance
                      : "",
                  }}
                />
                <div
                  className="h2-maintenance"
                  dangerouslySetInnerHTML={{
                    __html: maintenanceDesktop
                      ? maintenanceDesktop.h2Maintenance
                      : "",
                  }}
                />
              </div>
            </div>
          </div>

          <GetImage
            className="appear"
            image={maintenanceDesktop?.images.data[2].attributes}
            loading="eager"
            priority={true}
          />
          <div className="appear">
            <div className="">
              <div
                className="h3-maintenance mb-10"
                dangerouslySetInnerHTML={{
                  __html: maintenanceDesktop
                    ? maintenanceDesktop.h3Maintenance
                    : "",
                }}
              />
              <div
                className="paragraphe-1-maintenance mb-10"
                dangerouslySetInnerHTML={{
                  __html: maintenanceDesktop
                    ? maintenanceDesktop.paragraphe1Maintenance
                    : "",
                }}
              />
            </div>

            <div className="flex justify-between mb-16">
              <div className="flex flex-col w-fit">
                <div
                  className="titre-reseau mb-6"
                  dangerouslySetInnerHTML={{
                    __html: maintenanceDesktop
                      ? maintenanceDesktop.titreReseau1
                      : "",
                  }}
                ></div>
                <Reseaux
                  slug={["facebook", "instagram"]}
                  classname={"flex w-full justify-between"}
                />
              </div>

              <div className="flex flex-col w-fit">
                <div
                  className="titre-reseau mb-6"
                  dangerouslySetInnerHTML={{
                    __html: maintenanceDesktop
                      ? maintenanceDesktop.titreReseau2
                      : "",
                  }}
                ></div>
                <Reseaux
                  slug={["mail", "messenger"]}
                  classname={"flex w-full justify-between"}
                />
              </div>
            </div>
            <div
              className="h4-maintenance"
              dangerouslySetInnerHTML={{
                __html: maintenanceDesktop
                  ? maintenanceDesktop.h4Maintenance
                  : "",
              }}
            />
          </div>
        </div>

        <GetImage
          className="demiFlocon absolute left-full w-[160px] top-24"
          image={maintenanceDesktop?.images.data[4].attributes}
          height="280"
          width="160"
          loading="eager"
          priority={true}
        />
        <GetImage
          className="show absolute left-full -translate-x-[57%] bottom-32 mix-blend-exclusion w-[252px]"
          image={maintenanceDesktop?.images.data[3].attributes}
          height="221"
          width="252"
          loading="eager"
          priority={true}
        />
        <GetImage
          className="show absolute left-full translate-x-2/3 bottom-16 w-[134px]"
          image={maintenanceDesktop?.images.data[3].attributes}
          height="118"
          width="134"
          loading="eager"
          priority={true}
        />
      </div>
    </div>
  );
};

export default MaintenanceComponentDesktop;
