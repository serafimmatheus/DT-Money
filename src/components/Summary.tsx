import { Inflows } from "./Inflows";
import { Outflows } from "./Outflows";
import { TotalMoney } from "./TotalMoney";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useSummary } from "@/hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <>
      <Carousel className="p-4 md:hidden">
        <CarouselContent>
          <CarouselItem>
            <Inflows preco={summary.entrada} />
          </CarouselItem>

          <CarouselItem>
            <Outflows preco={summary.saida} />
          </CarouselItem>

          <CarouselItem>
            <TotalMoney total={summary.total} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="p-4 hidden md:flex justify-between gap-4 max-w-7xl mx-auto">
        <Inflows preco={summary.entrada} />
        <Outflows preco={summary.saida} />
        <TotalMoney total={summary.total} />
      </div>
    </>
  );
}
