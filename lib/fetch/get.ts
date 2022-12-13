// Appel data back (Methode 'GET' par defaut)
interface fetchGetterProps {
  path: string
  params?: any
  config?: {}
}
/**
 *
 * @param path string
 * @param params any
 * @returns props
 */
export const fetchGetter = async ({
  path,
  params = null,
  config,
}: fetchGetterProps) => {
  let url
  let populate = "populate=*"
  if (params !== null) {
    url = `${process.env.NEXT_PUBLIC_API_URL}${path}?${populate}&${params}`
  } else {
    url = `${process.env.NEXT_PUBLIC_API_URL}${path}?${populate}`
  }

  const data = await fetch(`${url}`, config)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .catch((error) => console.warn("ERROR", error))
  return await data
}
