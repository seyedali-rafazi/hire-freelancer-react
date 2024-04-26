import React from "react";
import useUser from "../feachures/authentication/useUser";
import HomeHeader from "../ui/HomeHeader";
import FreelancerHomeSection from "../feachures/freelancer/FreelancerHomeSection";
import OwnerHomerSection from "../feachures/owner/OwnerHomerSection";

function Home() {
  const { user } = useUser();
  if (user) {
    if (user.role == "OWNER") {
      return (
        <div className="bg-secondery-0 min-h-screen">
          <HomeHeader />
          <div className="container sm:max-w-6xl">
            <OwnerHomerSection />
          </div>
        </div>
      );
    }
  }
  return (
    <div className="bg-secondery-0 min-h-screen">
      <HomeHeader />
      <div className="container sm:max-w-6xl">
        <FreelancerHomeSection user={user}/>
      </div>
    </div>
  );
}

export default Home;
