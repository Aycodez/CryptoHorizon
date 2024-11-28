import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Investments = () => {
  const investments = [
    "Deposit",
    "3000",
    "+100",
    "22/07/2024",
    "25,000",
    "Pending",
  ];
  return (
    <div className="px-5 text-white mt-10 pt-14">
      <h1 className="text-3xl font-semibold mb-5">My investments</h1>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PAYMENT METHOD</TableHead>
              <TableHead>EARNINGS</TableHead>
              <TableHead>TOTAL PROFIT</TableHead>
              <TableHead>ACTIVATION DATE</TableHead>

              <TableHead>AMOUNT INVESTED</TableHead>
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
              <TableCell>{investments[4]}$</TableCell>
              <TableCell>{investments[5]}</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Investments;
