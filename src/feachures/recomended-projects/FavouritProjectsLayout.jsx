import React from "react";
import SidebarPages from "../../ui/SidebarPages";
import OptionsSidebar from "../../ui/OptionsSidebar";

import UserFavouitProjects from "../../ui/UserFavouitProjects";
import { useAddToFavourit } from "../../context/AddToFavouitContext";
import ProjectsFilter from "../../ui/ProjectsFilter";

function FavouritProjectsLayout() {
  const { myFavourits } = useAddToFavourit();
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 gap-6 max-w-2lg lg:max-w-screen-xl lg:grid-cols-10">
        <div className="h-20 lg:col-span-2 ">
          <SidebarPages />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ProjectsFilter numOfProjects={myFavourits.length} />
          <UserFavouitProjects
            myFavourits={myFavourits}
            smOrder="oneSm"
            mdOrder="oneMd"
          />
        </div>
        <div className="hidden md:block md:h-64  lg:col-span-3 ">
          <OptionsSidebar />
        </div>
      </div>
    </div>
  );
}

export default FavouritProjectsLayout;
