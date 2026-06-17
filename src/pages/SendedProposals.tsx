import Loading from "../ui/Loading";
import useUser from "../feachures/authentication/useUser";
import SendedProposalsLayout from "../feachures/recomended-projects/SendedProposalsLayout";

function SendedProposals() {
  const { isLoading } = useUser();
  if (isLoading) return <Loading />;

  return (
    <div className="container lg:max-w-7xl px-4 pb-12">
      <SendedProposalsLayout />
    </div>
  );
}

export default SendedProposals;
