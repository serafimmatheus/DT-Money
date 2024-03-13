import { FormNewTransActions } from "./formNewTransActions";
import { Button } from "./ui/button";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-8 sm:pt-8">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <img
          className="w-[117px] h-[25px] sm:w-[172px] sm:h-[41px]"
          src="src/assets/dt-logo.png"
          alt="DT Money"
        />

        <Drawer>
          <DrawerTrigger asChild>
            <Button className="text-accent text-sm font-bold h-[35px]">
              Nova transação
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-foreground">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="text-accent text-left">
                  Nova transação
                </DrawerTitle>
              </DrawerHeader>

              <FormNewTransActions />

              <DrawerFooter>
                {/* <DrawerClose asChild>
                  <Button variant="outline">Cadastrar</Button>
                </DrawerClose> */}
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
