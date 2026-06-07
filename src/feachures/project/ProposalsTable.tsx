import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./proposalRow";
import type { Proposal } from "../../types";

interface ProposalsTableProps {
  proposals?: Proposal[];
}

function ProposalsTable({ proposals = [] }: ProposalsTableProps) {
  if (!proposals?.length) return <Empty resourceName="درخواستی" />;

  return (
    <div className="proposal-card !mb-0">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
          <th></th>
        </Table.Header>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalsTable;
