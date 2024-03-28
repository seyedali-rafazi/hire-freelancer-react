import React from "react";
import UserAvatar from "../feachures/authentication/UserAvatar";
import { HiOutlineUser } from "react-icons/hi";
import DarkmodeToggle from "./DarkmodeToggle";
import Logout from "../feachures/authentication/Logout";
import Login from "../feachures/authentication/Login";
import { Link } from "react-router-dom";

function HomeHeader({ user }) {
  return (
    <div className="xl:max-w-screen-xl mx-auto">
      <header className="border-b-2 border-primary-200 z-1000">
        <ul className="flex gap-x-6 items-center justify-between  p-4">
          <div>
            <h1 className="text-primary-600 font-extrabold text-3xl">
              تخصص سازان
            </h1>
          </div>
          <div className="flex gap-x-6 items-center">
            <li>
              <DarkmodeToggle />
            </li>
            <li>{user ? <UserAvatar /> : <Login />}</li>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default HomeHeader;
