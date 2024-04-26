import React from "react";
import UserAvatar from "../feachures/authentication/UserAvatar";
import DarkmodeToggle from "./DarkmodeToggle";

function HomeHeader() {
  return (
    <div className="xl:max-w-screen-xl mx-auto">
      <header className="border-b-2 border-primary-200 z-1000">
        <ul className="flex gap-x-6 items-center justify-between  p-4">
          <div>
            <h1 className="text-primary-600 font-extrabold text-xl md:text-3xl">
              تخصص سازان
            </h1>
          </div>
          <div className="flex gap-x-6 items-center">
            <li className="hidden md:block">
              <DarkmodeToggle />
            </li>
            <li>
              <UserAvatar />
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default HomeHeader;
