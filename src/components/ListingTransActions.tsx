import { Calendar, Tag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTransActions } from "@/context/transactions";
import { dateFormatter } from "@/utils/formatter";

export function ListingTransAction() {
  const { transactions } = useTransActions();
  return (
    <>
      {transactions.map((transaction) => (
        <Card className="sm:hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-normal">
              {transaction.descricao}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-primary text-xl font-bold">
              R${" "}
              {transaction.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </CardContent>
          <CardFooter>
            <div className="w-full flex items-center justify-between">
              <CardDescription className="flex items-center gap-2 text-muted-foreground">
                <Tag size={16} />
                {transaction.categoria}
              </CardDescription>

              <CardDescription className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                {transaction.createdAt}
              </CardDescription>
            </div>
          </CardFooter>
        </Card>
      ))}

      <Table className="hidden sm:block">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[25vw]">Titulo</TableHead>
            <TableHead className="w-[25vw]">Valor</TableHead>
            <TableHead className="w-[25vw]">Categoria</TableHead>
            <TableHead className="w-[25vw]">Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="text-muted-foreground">
                {transaction.descricao}
              </TableCell>
              <TableCell
                className={`${
                  transaction.type === "entrada"
                    ? "text-primary"
                    : "text-destructive"
                }`}
              >
                {transaction.type === "entrada" ? "+" : "-"}
                {transaction.preco.toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {transaction.categoria}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {dateFormatter.format(new Date(transaction.createdAt))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
