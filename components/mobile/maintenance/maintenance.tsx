import gsap from "gsap";
import React, { useEffect } from "react";
import GetImage from "../../../lib/fetch/get-images";
import { maintenanceProps } from "../../../lib/interfaces/interfaces";
import Reseaux from "../../widgets/reseaux/reseaux";

const MaintenanceComponentMobile = ({
  maintenanceMobile,
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
        ".circle",
        {
          rotate: "360",
        },
        {
          rotate: "0",
          delay: 1,
          duration: 5,
        }
      );
    }
  }, []);
  return (
    <>
      <div
        id="maintenance"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${maintenanceMobile?.images.data[4].attributes.url})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="min-h-screen w-screen md:hidden"
      >
        <div
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${maintenanceMobile?.images.data[0].attributes.url})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="min-h-[92vh] w-full mx-auto flex flex-col items-center justify-center text-center px-4"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center justify-center mb-[3vh]">
              <GetImage
                className="circle"
                image={maintenanceMobile?.images.data[1].attributes}
                loading="eager"
                priority={true}
              />
              <GetImage
                className="block -mt-2"
                image={maintenanceMobile?.images.data[2].attributes}
                loading="eager"
                priority={true}
              />
            </div>
            <div className="appear mb-[3vh]">
              <div
                className="h1-maintenance"
                dangerouslySetInnerHTML={{
                  __html: maintenanceMobile
                    ? maintenanceMobile.h1Maintenance
                    : "",
                }}
              />
              <div
                className="h2-maintenance"
                dangerouslySetInnerHTML={{
                  __html: maintenanceMobile
                    ? maintenanceMobile.h2Maintenance
                    : "",
                }}
              />
            </div>
          </div>
          <div
            className="h3-maintenance appear mb-[3vh]"
            dangerouslySetInnerHTML={{
              __html: maintenanceMobile ? maintenanceMobile.h3Maintenance : "",
            }}
          />
          <div
            className="h4-maintenance appear mb-[3vh]"
            dangerouslySetInnerHTML={{
              __html: maintenanceMobile ? maintenanceMobile.h4Maintenance : "",
            }}
          />
          <GetImage
            className="appear"
            image={maintenanceMobile?.images.data[3].attributes}
            loading="eager"
            priority={true}
          />
        </div>
        <Reseaux
          slug={["facebook", "messenger", "instagram", "mail"]}
          classname={
            "md:hidden fixed bottom-0 flex w-full justify-around items-center h-[8vh] bg-blanc opacity-80 z-10"
          }
        />
      </div>
    </>
  );
};

export default MaintenanceComponentMobile;
