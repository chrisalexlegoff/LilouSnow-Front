import React, { useState, useEffect } from "react";
import { API } from "../../../lib/constants/api";
import { fetchGetter } from "./../../../lib/fetch/get";

interface slugProps {
  slug: string[];
  classname: string;
}

const Reseaux = ({ slug, classname }: slugProps) => {
  const [reseaux, setReseaux] = useState<any>();

  useEffect(() => {
    async function fetchReseaux(): Promise<any> {
      const reseauxEnCours = await fetchGetter({
        path: API.RESEAUX,
      });
      return reseauxEnCours;
    }
    fetchReseaux().then((res) => setReseaux(res));
  }, []);

  return (
    <div className={classname}>
      {reseaux &&
        reseaux.data.attributes.reseau.map((val: any) => {
          return slug.map((valSlug: string) => {
            if (val.slug == valSlug) {
              return (
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={val.lien}
                  className="svg-reseaux-mobile z-20"
                  key={val.id}
                  dangerouslySetInnerHTML={{ __html: val.svg }}
                />
              );
            }
          });
        })}
    </div>
  );
};

export default Reseaux;
