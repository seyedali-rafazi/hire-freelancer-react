import { mockStore } from "../mocks/mockStore";
import type { CreateProposalData } from "../types";

export function changeProposalStatusApi({
  proposalId,
  status,
  ...rest
}: {
  proposalId: string;
  status: number;
  [key: string]: unknown;
}) {
  return mockStore.changeProposalStatus({ proposalId, status, ...rest });
}

export function getProposalsApi(qs?: string) {
  return mockStore.getProposals(qs);
}

export function createProposalApi(data: CreateProposalData) {
  return mockStore.createProposal(data);
}
