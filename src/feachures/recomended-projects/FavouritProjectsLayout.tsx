import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import SidebarPages from "../../ui/SidebarPages";
import OptionsSidebar from "../../ui/OptionsSidebar";
import UserFavouitProjects from "../../ui/UserFavouitProjects";
import { useAddToFavourit } from "../../context/AddToFavouitContext";
import ProjectsFilter from "../../ui/ProjectsFilter";
import useUser from "../authentication/useUser";
import NotUser from "./NotUser";

function FavouritProjectsLayout() {
  const { myFavourits = [] } = useAddToFavourit();
  const { user } = useUser();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "latest";

  const sortedFavourits = useMemo(() => {
    const list = [...myFavourits];
    return list.sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return sort === "earliest"
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
  }, [myFavourits, sort]);

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 gap-6 max-w-2lg lg:max-w-screen-xl lg:grid-cols-10">
        <div className="h-20 lg:col-span-2">
          {user ? <SidebarPages /> : <NotUser />}
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ProjectsFilter numOfProjects={sortedFavourits.length} />
          <UserFavouitProjects
            myFavourits={sortedFavourits}
            smOrder="oneSm"
            mdOrder="oneMd"
          />
        </div>
        <div className="hidden md:block md:h-64 lg:col-span-3">
          <OptionsSidebar />
        </div>
      </div>
    </div>
  );
}

export default FavouritProjectsLayout;
