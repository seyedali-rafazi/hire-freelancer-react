import React from "react";
import SearchProjects from "../../ui/SearchProjects";
import OpenProject from "../../ui/OpenProject";

function FreelancerHomeSection({user}) {
  return (
    <div>
      <SearchProjects />
      <OpenProject user={user} />
    </div>
  );
}

export default FreelancerHomeSection;
