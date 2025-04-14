import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "TXN001",
    patient: "Emily Williams",
    amount: "₦25,000",
    date: "2025-04-13",
    status: "Completed",
  },
  {
    id: "TXN002",
    patient: "Ryan Johnson",
    amount: "₦15,500",
    date: "2025-04-12",
    status: "Pending",
  },
];

const TransactionTable = ({ data }: { data: typeof transactions }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Patient</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((txn) => (
          <TableRow key={txn.id}>
            <TableCell>{txn.patient}</TableCell>
            <TableCell>{txn.amount}</TableCell>
            <TableCell>{txn.date}</TableCell>
            <TableCell>
              {/* <Badge
                variant={
                  txn.status === "Completed"
                    ? "success"
                    : txn.status === "Pending"
                    ? "secondary"
                    : "outline"
                }
              >
                {txn.status}
              </Badge> */}

              <Badge
                variant={
                  txn.status === "Completed"
                    ? "default"
                    : txn.status === "Pending"
                    ? "secondary"
                    : "outline"
                }
              >
                {txn.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
