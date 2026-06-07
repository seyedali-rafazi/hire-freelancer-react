import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/formatNumber";

function Stats({ proposals = [] }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const pendingProposals = proposals.filter((p) => p.status === 1).length;
  const balance = acceptedProposals.reduce((acc, cur) => acc + (cur.price || 0), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <Stat
        color="primary"
        title="درخواست‌های ارسالی"
        value={numOfProposals}
        subtitle={`${pendingProposals} در انتظار پاسخ`}
        icon={<HiOutlineViewGrid className="w-8 h-8" />}
      />
      <Stat
        color="green"
        title="درخواست‌های تایید شده"
        value={acceptedProposals.length}
        subtitle="پروژه‌های پذیرفته شده"
        icon={<HiCurrencyDollar className="w-8 h-8" />}
      />
      <Stat
        color="yellow"
        title="درآمد تخمینی"
        value={toPersianNumbersWithComma(balance)}
        subtitle="تومان از پروژه‌های تایید شده"
        icon={<HiCollection className="w-8 h-8" />}
      />
    </div>
  );
}

export default Stats;
