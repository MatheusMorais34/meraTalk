import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Automatize suas chamadas com Inteligência Artificial
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Crie, gerencie e analise campanhas de URA reversa com o poder da Meratalk AI. Pague, configure e comece a usar em minutos.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <a href="#pricing">
                  Comece Agora <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                Fale com um especialista
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
             <div className="relative w-full max-w-md aspect-square rounded-full bg-primary/10 flex items-center justify-center">
                <div className="relative w-[80%] aspect-square rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-[70%] aspect-square rounded-full bg-primary/40 p-8 animate-pulse">
                         <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary"
                        >
                            <path
                                d="M4 16L10 10V22L16 16L22 22V10L28 16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
