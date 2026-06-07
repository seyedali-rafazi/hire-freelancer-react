import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  const isAuthenticated = Boolean(user);
  const isVerified = user ? Number(user.status) === 2 : false;

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);
  const isAuthorized =
    Object.keys(ROLES).includes(desiredRole) &&
    user?.role === ROLES[desiredRole];

  return { isAuthenticated, isAuthorized, isLoading, user, isVerified };
}
