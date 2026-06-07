import { mockStore } from "../mocks/mockStore";

export function changeProposalStatusApi({ proposalId, ...rest }) {
  return mockStore.changeProposalStatus({ proposalId, ...rest });
}

export function getProposalsApi(qs) {
  return mockStore.getProposals(qs);
}

export function createProposalApi(data) {
  return mockStore.createProposal(data);
}
