"use client";
import React, { Suspense } from "react";
import ProposalTable from "../feachures/proposals/ProposalTable";
import Loading from "../ui/Loading";

function Proposals() {
  return (
    <div>
      <h1 className="font-black text-secondery-700 text-xl mb-8">
        لیست پروپوزال ها
      </h1>
      <Suspense fallback={<Loading />}>
        <ProposalTable />
      </Suspense>
    </div>
  );
}

export default Proposals;
