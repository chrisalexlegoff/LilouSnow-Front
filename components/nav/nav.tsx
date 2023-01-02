import { useEffect, useState } from "react"
import { API } from "../../lib/constants/api"
import { fetchGetter } from "../../lib/fetch/get"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import gsap from "gsap"
import Link from "next/link"
gsap.registerPlugin(ScrollTrigger)

const Nav = (): JSX.Element => {
  const [navDesktop, setNavDesktop] = useState([])
  const [navMobile, setNavMobile] = useState([])
  const [open, setOpen] = useState(false)
  const [medias, setMedias] = useState<any>()

  useEffect(() => {
    async function fetchNavDesktop(): Promise<any> {
      const navDesktopEnCours = await fetchGetter({
        path: API.NAV_MAIN_DESKTOP,
      })
      return navDesktopEnCours
    }
    fetchNavDesktop().then((res) => setNavDesktop(res))
    async function fetchNavMobile(): Promise<any> {
      const navDesktopEnCours = await fetchGetter({
        path: API.NAV_MAIN_MOBILE,
      })
      return navDesktopEnCours
    }
    fetchNavMobile().then((res) => setNavMobile(res))
    async function fetchMedias(): Promise<any> {
      const mediasEnCours = await fetchGetter({
        path: API.NAV_MEDIA,
      })
      return mediasEnCours
    }
    fetchMedias().then((res) => setMedias(res))
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sectionsEnCours = gsap.utils.toArray<HTMLElement>("section")
      const sections = sectionsEnCours.slice(1)
      const nav: any = document.querySelector("#main-nav-mobile .nav")

      sections.forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            // markers: true,
            start: `top-=${nav != null ? nav?.offsetHeight : 40}`,
            // start: "top-=40",
            end: "bottom",
            trigger: section,
            onEnter: () => section.scrollIntoView({ behavior: "smooth" }),
          },
        })
      })
      const sectionsWhite = gsap.utils.toArray<HTMLElement>(".white")

      sectionsWhite.forEach((section) => {
        gsap.to(section, {
          scrollTrigger: {
            start: `top-=${nav != null ? nav?.offsetHeight : 40}`,
            end: "bottom",
            trigger: section,
            toggleClass: {
              targets: nav,
              className: "logo-white",
            },
          },
        })
      })
    }
  }, [])

  return (
    <>
      <div
        id="main-nav-mobile"
        className="md:hidden nav fixed bg-transparent w-screen p-[30px] z-20"
      >
        <div className="nav justify-between w-full mx-auto flex flex-row">
          <Link
            className="h-full"
            href={"/"}
            dangerouslySetInnerHTML={{
              __html: medias?.data.attributes.logoMobileClose,
            }}
          />

          <button
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
            dangerouslySetInnerHTML={{
              __html: medias?.data.attributes.hamburger,
            }}
          />
        </div>
      </div>
      <div
        className={`fixed h-[90%] w-screen bg-white p-[30px] transform duration-700 z-20 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className=" justify-between w-full mx-auto flex flex-row">
          <Link className="h-full" href={"/"} onClick={() => setOpen(!open)}
          dangerouslySetInnerHTML={{
              __html: medias?.data.attributes.logoMobileOpen,
            }}>
          </Link>
          <button className="cursor-pointer" onClick={() => setOpen(!open)} dangerouslySetInnerHTML={{
              __html: medias?.data.attributes.closeButton,
            }}>
          </button>
        </div>
        <div className="h-full w-4/5 mx-auto pb-32 pt-16 flex flex-col items-center justify-around">
          {navMobile.map((nav: any) => {
            return (
              <Link className="text-center" key={nav.id} href={nav.path}>
                <h3>{nav.title}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Nav
