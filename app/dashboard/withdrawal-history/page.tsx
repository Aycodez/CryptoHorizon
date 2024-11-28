import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const WithdrawalHistory = () => {
  const investments = ["Withdrawal", "3000", "22/07/2024", "Pending"];
  return (
    <div className="text-white mt-10 pt-14">
      <h1 className="text-3xl font-semibold mb-5">Withdrawal history</h1>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PAYMENT METHOD</TableHead>
              <TableHead>AMOUNT</TableHead>

              <TableHead> DATE</TableHead>

              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* {investments.map((investment) => ( */}
            <TableRow>
              <TableCell>{investments[0]}</TableCell>
              <TableCell>{investments[1]}</TableCell>
              <TableCell>{investments[2]}$</TableCell>
              <TableCell>{investments[3]}</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
