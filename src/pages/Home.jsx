import React from "react";
import useUser from "../feachures/authentication/useUser";
import HomeHeader from "../ui/HomeHeader";
import OpenProject from "../ui/OpenProject";
import Loading from "../ui/Loading";
import SearchProjects from "../ui/SearchProjects";
import { useNavigate } from "react-router-dom";
import FreelancerHomeSection from "../feachures/freelancer/FreelancerHomeSection";
import OwnerHomerSection from "../feachures/owner/OwnerHomerSection";

function Home() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  return (
    <div className="bg-secondery-0 min-h-screen">
      <HomeHeader user={user} />
      <div className="container sm:max-w-6xl">
        {user.role == "OWNER" ? (
          <OwnerHomerSection />
        ) : (
          <FreelancerHomeSection user={user} />
        )}
      </div>
    </div>
  );
}

export default Home;
