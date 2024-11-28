import { Button, buttonVariants } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Users = () => {
  const user = ["Ayo", "0", "0.00$", "0.00$", "0.00$", "0.00$", "0.00$"];
  return (
    <div className="px-5">
      <h1 className="text-3xl font-semibold mb-5">Users</h1>

      <div className="w-full">
        <Table className="min-w-[800px] overflow-scroll">
          <TableHeader>
            <TableRow>
              <TableHead>NAME</TableHead>
              <TableHead>INVESTMENTS</TableHead>
              <TableHead>BTC Balance</TableHead>
              <TableHead>TRON Balance</TableHead>
              <TableHead>USDT TRC20 Balance</TableHead>
              <TableHead>BNB Balance</TableHead>
              <TableHead>LiteCoin</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* {investments.map((investment) => ( */}
            <TableRow>
              <TableCell>{user[0]}</TableCell>
              <TableCell>{user[1]}</TableCell>
              <TableCell>{user[2]}</TableCell>
              <TableCell>{user[3]}</TableCell>
              <TableCell>{user[4]}</TableCell>
              <TableCell>{user[5]}</TableCell>
              <TableCell>{user[6]}</TableCell>
              <TableCell>
                <Link
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "text-white bg-[green]"
                  )}
                  href="/admin/users/2344"
                >
                  Credit User
                </Link>
              </TableCell>
              <TableCell>
                <Button variant="destructive" size="sm">
                  Delete User
                </Button>
              </TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
