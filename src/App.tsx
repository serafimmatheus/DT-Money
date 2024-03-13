import "@/globals.css";
import { Header } from "./components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Summary } from "./components/Summary";
import { ListingTransAction } from "./components/ListingTransActions";
import { SearchForm } from "./components/searchForm";
import { useTransActions } from "./context/transactions";

export function App() {
  const { transactionsLength } = useTransActions();
  return (
    <>
      <Toaster className="text-muted-foreground" />
      <Header />

      <Summary />

      <div className="bg-foreground">
        <div className="px-4 max-w-7xl mx-auto flex flex-col h-screen gap-4">
          <div className="flex justify-between items-center py-4">
            <h2 className="text-muted-foreground text-lg">Transações</h2>
            <span className="text-muted-foreground text-base">
              {transactionsLength} itens
            </span>
          </div>

          <SearchForm />

          <ListingTransAction />
        </div>
      </div>
    </>
  );
}
