import React from "react";

function OwnerHome() {
  return (
    <div className="bg-secondery-0 min-h-screen">
      <HomeHeader />
      <div className="container sm:max-w-6xl">
        <OwnerHomerSection />
      </div>
    </div>
  );
}

export default OwnerHome;
