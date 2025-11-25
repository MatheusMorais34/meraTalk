"use client";

import { useState, useTransition } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Line, LineChart } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ChartConfig } from "@/components/ui/chart";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { handleSummarizeAnalytics } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Lightbulb, Loader2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const callVolumeData = [
  { month: "Jan", answered: 186, missed: 80 },
  { month: "Fev", answered: 305, missed: 200 },
  { month: "Mar", answered: 237, missed: 120 },
  { month: "Abr", answered: 273, missed: 190 },
  { month: "Mai", answered: 209, missed: 130 },
  { month: "Jun", answered: 214, missed: 140 },
];

const successRateData = [
    { date: "01/06", rate: 55 },
    { date: "02/06", rate: 62 },
    { date: "03/06", rate: 78 },
    { date: "04/06", rate: 73 },
    { date: "05/06", rate: 68 },
    { date: "06/06", rate: 81 },
    { date: "07/06", rate: 85 },
];

const chartConfig: ChartConfig = {
  answered: {
    label: "Atendidas",
    color: "hsl(var(--primary))",
  },
  missed: {
    label: "Perdidas",
    color: "hsl(var(--muted-foreground))",
  },
  rate: {
    label: "Taxa de Sucesso",
    color: "hsl(var(--primary))"
  }
};

export default function AnalyticsSection() {
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getSummary = () => {
    startTransition(async () => {
      setError(null);
      setSummary(null);
      const analyticsString = `
        Call Volume: ${JSON.stringify(callVolumeData)}.
        Success Rate: ${JSON.stringify(successRateData)}.
        Common issues: High number of missed calls in February, success rate dip on 05/06.
      `;
      const result = await handleSummarizeAnalytics(analyticsString);
      if (result.error) {
        setError(result.error);
      } else {
        setSummary(result.summary ?? null);
      }
    });
  };

  return (
    <section id="analytics" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Análise de Dados</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entenda o Desempenho de Suas Chamadas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Visualize métricas detalhadas e obtenha insights valiosos para otimizar suas campanhas de chamadas.
            </p>
          </div>
        </div>
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Painel de Análise</CardTitle>
            <CardDescription>
              Explore os dados de suas campanhas de chamada.
              <Button size="sm" variant="outline" className="ml-4" onClick={getSummary} disabled={isPending}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
                Gerar Resumo com IA
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
             {isPending && (
                <div className="space-y-2">
                    <Skeleton className="h-8 w-1/4" />
                    <Skeleton className="h-6 w-3/4" />
                </div>
            )}
            {error && <Alert variant="destructive"><AlertTitle>Erro</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>}
            {summary && (
              <Alert className="mb-6 bg-primary/10 border-primary/20">
                <Lightbulb className="h-4 w-4 text-primary" />
                <AlertTitle className="text-primary font-bold">Resumo da IA</AlertTitle>
                <AlertDescription className="text-foreground">
                  {summary}
                </AlertDescription>
              </Alert>
            )}

            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="performance">Desempenho</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Volume de Chamadas</CardTitle>
                    <CardDescription>Chamadas atendidas vs. perdidas nos últimos 6 meses.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                      <BarChart accessibilityLayer data={callVolumeData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                        />
                         <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="answered" fill="var(--color-answered)" radius={4} />
                        <Bar dataKey="missed" fill="var(--color-missed)" radius={4} />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="performance">
                 <Card>
                  <CardHeader>
                    <CardTitle>Taxa de Sucesso da Campanha</CardTitle>
                    <CardDescription>Percentual de chamadas bem-sucedidas nos últimos 7 dias.</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                      <LineChart
                        accessibilityLayer
                        data={successRateData}
                        margin={{ left: 12, right: 12 }}
                      >
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="date"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />
                        <YAxis
                            tickFormatter={(value) => `${value}%`}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="line" />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Line
                          dataKey="rate"
                          type="monotone"
                          stroke="var(--color-rate)"
                          strokeWidth={2}
                          dot={true}
                        />
                      </LineChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
