import { api } from "@/lib/api";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

interface TransActionsProvider {
  children: ReactNode;
}

interface Transaction {
  id: number;
  descricao: string;
  preco: number;
  categoria: string;
  type: "entrada" | "saida";
  createdAt: string;
}

interface TransActionsContextData {
  transactions: Transaction[];
  transactionsLength: number;
  fetchTransactions(query?: string): Promise<void>;
  createNewTransaction: (data: Partial<Transaction>) => Promise<void>;
}

export const TransActionProviderContxet =
  createContext<TransActionsContextData>({} as TransActionsContextData);

export function TransActionsProvider({ children }: TransActionsProvider) {
  const [transactions, setTransactions] = useState<Transaction[]>(
    [] as Transaction[]
  );

  const transactionsLength = transactions.length;

  const fetchTransactions = useCallback(async (query?: string) => {
    await api
      .get(`/transactions`, {
        params: {
          _sort: "createdAt",
          _order: "desc",
          _limit: 10,
          q: query,
        },
      })
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finalizou");
      });
  }, []);

  const createNewTransaction = useCallback(
    async (data: Partial<Transaction>) => {
      const { categoria, descricao, preco, type } = data;

      await api
        .post("/transactions", {
          categoria,
          descricao,
          preco,
          type,
          createdAt: new Date(),
        })
        .then((response) => {
          setTransactions((state) => [response.data, ...state]);
        });
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransActionProviderContxet.Provider
      value={{
        fetchTransactions,
        createNewTransaction,
        transactions,
        transactionsLength,
      }}
    >
      {children}
    </TransActionProviderContxet.Provider>
  );
}

export function useTransActions() {
  return useContext(TransActionProviderContxet);
}
