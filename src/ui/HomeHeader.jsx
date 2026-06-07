import { Link } from "react-router-dom";
import UserAvatar from "../feachures/authentication/UserAvatar";
import DarkmodeToggle from "./DarkmodeToggle";

function HomeHeader() {
  return (
    <div className="xl:max-w-screen-xl mx-auto sticky top-0 z-40 backdrop-blur-md bg-secondery-0/80">
      <header className="border-b border-primary-100">
        <ul className="flex gap-x-6 items-center justify-between p-4">
          <Link to="/" className="group">
            <h1 className="text-primary-700 font-extrabold text-xl md:text-3xl group-hover:text-primary-900 transition-colors">
              تخصص سازان
            </h1>
          </Link>
          <div className="flex gap-x-4 items-center">
            <li className="hidden md:block list-none">
              <DarkmodeToggle />
            </li>
            <li className="list-none">
              <UserAvatar />
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
}

export default HomeHeader;
