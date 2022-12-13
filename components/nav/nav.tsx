import { useEffect, useState } from "react"
import { API } from "../../lib/constants/api"
import { fetchGetter } from "../../lib/fetch/get"

const Nav = (): JSX.Element => {
  const [navDesktop, setNavDesktop] = useState([])

  // Recup Back navigations (Desktop, mobile etc.)
  useEffect(() => {
    async function fetchNavDesktop(): Promise<any> {
      const navDesktopEnCours = await fetchGetter({
        path: API.NAV_MAIN_DESKTOP_MOBILE,
      })
      return navDesktopEnCours
    }
    fetchNavDesktop().then((res) => setNavDesktop(res))
  }, [])

  return (
    <>
      {navDesktop.map((val: any) => {
        return val.parent === null && <h3 key={val.id}>{val.title}</h3>
      })}
    </>
  )
}

export default Nav
