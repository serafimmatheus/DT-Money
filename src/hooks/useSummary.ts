import { useTransActions } from "@/context/transactions";
import { useMemo } from "react";

export function useSummary() {
  const { transactions } = useTransActions();

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "entrada") {
          acc.entrada += Number(transaction.preco);
          acc.total += Number(transaction.preco);
        } else {
          acc.saida += Number(transaction.preco);
          acc.total -= Number(transaction.preco);
        }

        return acc;
      },
      { entrada: 0, saida: 0, total: 0 }
    );
  }, [transactions]);

  return summary;
}
