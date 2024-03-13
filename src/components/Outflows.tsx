import { ArrowDownCircle } from "lucide-react";

interface InflowsProps {
  preco: number;
}

export function Outflows({ preco }: InflowsProps) {
  return (
    <div className="rounded-xl shadow-xl p-6 bg-card w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-muted-foreground font-normal text-base">Saidas</h2>
        <ArrowDownCircle color="#F75A68" />
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
