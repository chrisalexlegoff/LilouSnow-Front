import React, { useState, useEffect } from "react"
import { API } from "../../../lib/constants/api"
import { fetchGetter } from "./../../../lib/fetch/get"

const Reseaux = () => {
  const [reseaux, setReseaux] = useState<any>()

  useEffect(() => {
    async function fetchReseaux(): Promise<any> {
      const reseauxEnCours = await fetchGetter({
        path: API.RESEAUX,
      })
      return reseauxEnCours
    }
    fetchReseaux().then((res) => setReseaux(res))
  }, [])

  return (
    <div className="md:hidden fixed bottom-0 flex w-full justify-around items-center h-[8vh] bg-blanc opacity-80 z-10">
      {reseaux &&
        reseaux.data.attributes.reseau.map((val: any) => {
          return (
            <a
              rel="noreferrer"
              target="_blank"
              href={val.lien}
              className="svg-reseaux-mobile z-20"
              key={val.id}
              dangerouslySetInnerHTML={{ __html: val.svg }}
            />
          )
        })}
    </div>
  )
}

export default Reseaux
