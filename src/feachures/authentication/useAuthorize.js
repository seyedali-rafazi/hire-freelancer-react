import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation(); // =. /owner/projects

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;

  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  //   if (pathname.includes("owner")) {
  //     if (user && user.role === "OWNER") isAuthorized = true;
  //   }

  //   if (pathname.includes("freelancer")) {
  //     if (user && user.role === "FREELANCER") isAuthorized = true;
  //   }

  //   if (pathname.includes("admin")) {
  //     if (user && user.role === "ADMIN") isAuthorized = true;
  //   }

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRols = pathname.split("/").at(1); // admin , freelancer , owner

  if (Object.keys(ROLES).includes(desiredRols)) {
    if ((user && user.role === ROLES[0]) || ROLES[desiredRols])
      isAuthorized = true;
  }

  return { isAuthenticated, isAuthorized, isLoading, user, isVerified };
}
