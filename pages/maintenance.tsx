import MaintenanceComponentDesktop from "../components/desktop/maintenance/maintenance";
import Layout from "../components/layout/layout";
import MaintenanceComponentMobile from "../components/mobile/maintenance/maintenance";
import { API } from "../lib/constants/api";
import { fetchGetter } from "../lib/fetch/get";
import { maintenanceProps } from "../lib/interfaces/interfaces";

const Maintenance = ({
  seo,
  maintenanceMobile,
  maintenanceDesktop,
}: maintenanceProps): JSX.Element => {
  // const router = useRouter();
  // useEffect(() => {
  //   router.push("/maintenance", "je-reviens-tres-vite");
  // }, []);
  return (
    <Layout nav={false} seo={seo}>
      <div className="md:hidden">
        <MaintenanceComponentMobile
          seo={seo}
          maintenanceMobile={maintenanceMobile}
        />
      </div>
      <div className="hidden md:block">
        <MaintenanceComponentDesktop
          seo={seo}
          maintenanceDesktop={maintenanceDesktop}
        />
      </div>
    </Layout>
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
      seo: maintenanceDesktop.data.attributes.seo,
    },
  };
}

export default Maintenance;
