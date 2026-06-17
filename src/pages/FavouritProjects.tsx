import FavouritProjectsLayout from "../feachures/recomended-projects/FavouritProjectsLayout";
import Loading from "../ui/Loading";
import useUser from "../feachures/authentication/useUser";

function FavouritProjects() {
  const { isLoading } = useUser();
  if (isLoading) return <Loading />;

  return (
    <div className="container lg:max-w-7xl px-4 pb-12">
      <FavouritProjectsLayout />
    </div>
  );
}

export default FavouritProjects;
