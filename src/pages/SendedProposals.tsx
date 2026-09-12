"use client";
import { Suspense } from "react";
import Loading from "../ui/Loading";
import useUser from "../feachures/authentication/useUser";
import SendedProposalsLayout from "../feachures/recomended-projects/SendedProposalsLayout";

function SendedProposals() {
  const { isLoading } = useUser();
  if (isLoading) return <Loading />;

  return (
    <div className="container lg:max-w-7xl px-4 pb-12">
      <Suspense fallback={<Loading />}>
        <SendedProposalsLayout />
      </Suspense>
    </div>
  );
}

export default SendedProposals;
