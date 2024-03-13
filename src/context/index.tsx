import { ReactNode, createContext } from "react";
import { TransActionsProvider } from "./transactions";

const ProviderContxet = createContext({});

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ProviderContxet.Provider value={{}}>
      <TransActionsProvider>{children}</TransActionsProvider>
    </ProviderContxet.Provider>
  );
}
