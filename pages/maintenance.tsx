import Head from "next/head.js";
import { useRouter } from "next/router.js";
import { useEffect } from "react";
import MaintenanceComponentDesktop from "../components/desktop/maintenance/maintenance";
import MaintenanceComponentMobile from "../components/mobile/maintenance/maintenance";
import { API } from "../lib/constants/api";
import { fetchGetter } from "../lib/fetch/get";
import { maintenanceProps } from "../lib/interfaces/interfaces";

const Maintenance = ({
  maintenanceMobile,
  maintenanceDesktop,
}: maintenanceProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.push("/maintenance", "je-reviens-tres-vite");
  }, []);
  return (
    <>
      <Head>
        <title>Lilou Snow | revient bientôt ...</title>
      </Head>
      <div className="md:hidden">
        <MaintenanceComponentMobile maintenanceMobile={maintenanceMobile} />
      </div>
      <div className="hidden md:block">
        <MaintenanceComponentDesktop maintenanceDesktop={maintenanceDesktop} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const maintenanceMobile = await fetchGetter({ path: API.MAINTENANCE_MOBILE });
  const maintenanceDesktop = await fetchGetter({
    path: API.MAINTENANCE_DESKTOP,
  });

  return {
    props: {
      maintenanceMobile: maintenanceMobile.data.attributes,
      maintenanceDesktop: maintenanceDesktop.data.attributes,
    },
  };
}

export default Maintenance;
