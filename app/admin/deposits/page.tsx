"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import { useQuery } from "@tanstack/react-query";
const Deposits = () => {
  // const deposits = useQuery({queryKey: 'deposits',
  //   queryFn: async () => await fetch('local')
  // })
  const deposit = [
    {
      name: "Ayo",
      status: "Pending",
      date: "22/05/33",
      amount: 300,
    },
  ];
  return (
    <div className="px-5">
      <h1 className="text-3xl font-semibold mb-5">Incoming deposits</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
            <TableHead className="hidden sm:table-cell">Deposit date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {deposit.map((d, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="font-medium">{d.name}</div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">{d.status}</TableCell>
              <TableCell className="hidden md:table-cell">{d.date}</TableCell>
              <TableCell className="text-right">{d.amount}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-white bg-[green]"
                >
                  Confirm
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="destructive" size="sm">
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Deposits;
