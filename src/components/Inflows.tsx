import { ArrowUpCircle } from "lucide-react";

interface InflowsProps {
  preco: number;
}

export function Inflows({ preco }: InflowsProps) {
  return (
    <div className="rounded-xl shadow-xl p-6 bg-card w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-muted-foreground font-normal text-base">
          Entradas
        </h2>
        <ArrowUpCircle color="#00B37E" />
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-accent font-bold text-2xl sm:text-3xl ">
          R${" "}
          {preco.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}
