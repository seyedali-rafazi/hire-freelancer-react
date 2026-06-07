import SearchProjects from "../../ui/SearchProjects";
import OpenProject from "../../ui/OpenProject";
import type { User } from "../../types";

interface FreelancerHomeSectionProps {
  user?: User | null;
}

function FreelancerHomeSection(_props: FreelancerHomeSectionProps) {
  return (
    <div>
      <SearchProjects />
      <OpenProject />
    </div>
  );
}

export default FreelancerHomeSection;
