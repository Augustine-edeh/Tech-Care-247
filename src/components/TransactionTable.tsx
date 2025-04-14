import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { transactions } from "@/data/transactions";
import { getStatusColor } from "@/lib/utils";

const TransactionTable = ({ data }: { data: typeof transactions }) => {
  const tableHeaderElements = [
    "ID",
    "Patient",
    "Date",
    "Service",
    "Amount",
    "Status",
  ];
  return (
    <div className="border rounded-md overflow-hidden">
      <Table className="w-full table-fixed">
        <TableHeader className="bg-gray-100 sticky top-0 z-10">
          <TableRow className="font-bold">
            {tableHeaderElements.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>

      <ScrollArea className="h-full pr-5">
        <Table className="w-full table-fixed">
          <TableBody>
            {data.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.id}</TableCell>
                <TableCell>{txn.patient}</TableCell>
                <TableCell>
                  {format(new Date(txn.date), "MMM d, yyyy")}
                </TableCell>
                <TableCell>{txn.service}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(txn.status)}>
                    {txn.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default TransactionTable;
