import { Controller, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTransActions } from "@/context/transactions";

const schemaNewTransaction = z.object({
  descricao: z.string(),
  preco: z.number(),
  categoria: z.string(),
  type: z.enum(["entrada", "saida"]),
});

type NewTransaction = z.infer<typeof schemaNewTransaction>;

export function FormNewTransActions() {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransaction>({
    resolver: zodResolver(schemaNewTransaction),
    defaultValues: {
      type: "entrada",
    },
  });

  const { createNewTransaction } = useTransActions();

  async function handleCreateNewTransaction(data: NewTransaction) {
    await createNewTransaction(data)
      .then(() => {
        toast("Cadastrado com sucesso!");
      })
      .catch((error) => {
        toast(error.message);
      })
      .finally(() => {
        reset();
      });
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewTransaction)}
      className="px-4 space-y-4"
    >
      <Input
        className="text-muted-foreground"
        placeholder="Descrição"
        type="text"
        {...register("descricao")}
      />
      <Input
        className="text-muted-foreground"
        placeholder="Preço"
        type="text"
        {...register("preco", { valueAsNumber: true })}
      />
      <Input
        className="text-muted-foreground"
        placeholder="Categoria"
        type="text"
        {...register("categoria")}
      />

      <div>
        <div className="flex items-center justify-center space-x-2">
          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className={`w-[50%] text-muted-foreground hover:bg-background ${
                    value === "entrada" && "border border-primary"
                  }`}
                  onClick={() => onChange("entrada")}
                  value={value}
                >
                  <ArrowUpCircle className="mr-3" size={24} color="#00B37E" />
                  Entrada
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className={`w-[50%] text-muted-foreground hover:bg-background ${
                    value === "saida" && "border border-primary"
                  }`}
                  onClick={() => onChange("saida")}
                >
                  <ArrowDownCircle className="mr-3" size={24} color="#F75A68" />
                  Saída
                </Button>
              </>
            )}
          />
        </div>
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full text-accent font-bold"
      >
        Cadastrar
      </Button>
    </form>
  );
}

{
  /* <Button
            type="button"
            variant="outline"
            size="icon"
            className={`w-[50%] text-muted-foreground hover:bg-background ${
              type === "entrada" && "border border-primary"
            }`}
            onClick={() => setType("entrada")}
          >
            <ArrowUpCircle className="mr-3" size={24} color="#00B37E" />
            Entrada
          </Button>
          <Button
            type="button"
            variant="outline"
            className={`w-[50%] text-muted-foreground hover:bg-background ${
              type === "saida" && "border border-primary"
            }`}
            onClick={() => setType("saida")}
          >
            <ArrowDownCircle className="mr-3" size={24} color="#F75A68" />
            Saída
          </Button> */
}
