import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BarChart2, Webhook, FileText } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Automação de Chamadas com IA",
    description: "Crie campanhas de URA reversa inteligentes que se adaptam a diferentes cenários de chamada sem intervenção humana.",
  },
  {
    icon: BarChart2,
    title: "Análise de Dados Detalhada",
    description: "Acesse relatórios completos com métricas detalhadas de cada chamada para otimizar suas estratégias.",
  },
  {
    icon: Webhook,
    title: "Webhooks Integrados",
    description: "Receba notificações de eventos em tempo real e integre com suas plataformas favoritas para automatizar fluxos de trabalho.",
  },
  {
    icon: FileText,
    title: "Construtor de Roteiros",
    description: "Desenhe fluxos de chamada e crie roteiros personalizados com nosso editor intuitivo e sem código.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Uma Plataforma Completa para Automação de Voz</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Do roteiro da chamada à análise pós-campanha, o Meratalk AI oferece todas as ferramentas que você precisa para se comunicar de forma eficaz e em escala.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="h-full text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
