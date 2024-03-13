import { DollarSign } from "lucide-react";

interface TotalMoneyProps {
  total: number;
}

export function TotalMoney({ total }: TotalMoneyProps) {
  return (
    <div
      className={`rounded-xl shadow-xl p-6 w-full ${
        total < 0 ? "bg-destructive-foreground" : "bg-primary-foreground"
      }`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-muted-foreground font-normal text-base">Total</h2>
        <DollarSign color="#ffffff" />
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-accent font-bold text-2xl sm:text-3xl ">
          R${" "}
          {total.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
}
