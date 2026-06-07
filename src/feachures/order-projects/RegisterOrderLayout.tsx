import React from "react";
import Loading from "../../ui/Loading";
import ProjectsFilter from "../../ui/ProjectsFilter";
import OptionsSidebar from "../../ui/OptionsSidebar";
import OrderSidebar from "./OrderSidebar";
import OwnerProjectCards from "../../ui/OwnerProjectCards";
import useOwnerProjects from "../projects/useOwnerProjects";
import RegisterOneOrder from "./RegisterOneOrder";


function RegisterOrderLayout() {
  const { isLoading, projects } = useOwnerProjects();



  if (isLoading) return <Loading />;
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 gap-6 max-w-2lg lg:max-w-screen-xl lg:grid-cols-10">
        <div className="h-20 lg:col-span-2">
          <OrderSidebar />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-4">
          <ProjectsFilter numOfProjects={projects.length} />
          <RegisterOneOrder />
          <OwnerProjectCards
            projects={projects}
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

export default RegisterOrderLayout;
