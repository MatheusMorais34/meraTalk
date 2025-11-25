import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Básico",
    price: "R$ 99",
    period: "/mês",
    description: "Ideal para pequenos negócios e startups.",
    features: [
      "1,000 chamadas/mês",
      "Gerador de Roteiro IA",
      "Análises básicas",
      "Suporte por e-mail",
    ],
    isPopular: false,
    checkoutUrl: "/checkout",
  },
  {
    name: "Profissional",
    price: "R$ 299",
    period: "/mês",
    description: "Perfeito para empresas em crescimento.",
    features: [
      "5,000 chamadas/mês",
      "Tudo do plano Básico",
      "Análises avançadas",
      "Integração com Webhooks",
      "Suporte prioritário",
    ],
    isPopular: true,
    checkoutUrl: "/checkout",
  },
  {
    name: "Empresa",
    price: "Customizado",
    period: "",
    description: "Para grandes volumes e necessidades específicas.",
    features: [
      "Chamadas ilimitadas",
      "Tudo do plano Profissional",
      "Construtor de Fluxo Visual",
      "Gerente de conta dedicado",
      "SLA personalizado",
    ],
    isPopular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Planos & Preços</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Escolha o plano certo para você</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Planos flexíveis que crescem com o seu negócio. Comece a automatizar suas chamadas hoje mesmo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-3 lg:gap-8 mt-12">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.isPopular ? 'border-primary ring-2 ring-primary' : ''}`}>
              {plan.isPopular && <div className="bg-primary text-primary-foreground text-center text-sm font-semibold py-1 rounded-t-lg">Mais Popular</div>}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-xl font-semibold text-muted-foreground">{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {plan.checkoutUrl ? (
                   <Button className="w-full" asChild variant={plan.isPopular ? "default" : "outline"}>
                      <Link href={plan.checkoutUrl}>{plan.name === 'Empresa' ? 'Entre em Contato' : 'Selecionar Plano'}</Link>
                   </Button>
                ) : (
                    <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                        {plan.name === 'Empresa' ? 'Entre em Contato' : 'Selecionar Plano'}
                    </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
