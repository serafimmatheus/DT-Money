import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransActions } from "@/context/transactions";

const schemaSearchForm = z.object({
  query: z.string(),
});

type schemaSearchForm = z.infer<typeof schemaSearchForm>;

export function SearchForm() {
  const { fetchTransactions } = useTransActions();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<schemaSearchForm>({
    resolver: zodResolver(schemaSearchForm),
  });

  async function handleSearch(data: schemaSearchForm) {
    const newData = {
      ...data,
    };

    await fetchTransactions(newData.query);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="flex justify-between items-center gap-1"
    >
      <Input
        type="text"
        placeholder="Busque uma transação"
        className="flex flex-1 h-[54px] placeholder:text-muted-foreground text-accent"
        {...register("query")}
      />

      <Button
        variant="outline"
        size="icon"
        className="border-primary w-[54px] h-[54px]"
        type="submit"
        disabled={isSubmitting}
      >
        <Search color="#00B37E" />
      </Button>
    </form>
  );
}
