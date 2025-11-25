"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { handleGenerateScript } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FileText, Wand2, Loader2, AlertCircle, Play, PhoneForwarded, Voicemail, CheckCircle, XCircle } from "lucide-react";

const initialState = {
  message: "",
  script: "",
  errors: { prompt: [] },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Gerar Roteiro
    </Button>
  );
}

const FlowStep = ({ icon, title, description, color }: { icon: React.ElementType, title: string, description: string, color: string }) => {
  const Icon = icon;
  return (
    <div className="flex items-start space-x-4">
      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
};

export default function AutomationSection() {
  const [state, formAction] = useFormState(handleGenerateScript, initialState);

  return (
    <section id="automation" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Automação com IA</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crie Roteiros de Chamada Inteligentes</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Use nossa IA para gerar roteiros de URA reversa dinâmicos e eficazes. Basta descrever seu objetivo e deixar a IA fazer o resto.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Gerador de Roteiro</CardTitle>
              <CardDescription>Descreva o que você quer alcançar com a sua chamada.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <Textarea
                  name="prompt"
                  placeholder="Ex: Criar um roteiro para uma campanha de cobrança amigável para clientes com faturas vencidas há 15 dias, oferecendo um link para pagamento."
                  className="min-h-[120px]"
                  required
                />
                {state.errors?.prompt && <p className="text-sm font-medium text-destructive">{state.errors.prompt.join(', ')}</p>}
                
                <SubmitButton />

                {state.message === 'error' && state.error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erro</AlertTitle>
                    <AlertDescription>{state.error}</AlertDescription>
                  </Alert>
                )}
              </form>

              {state.script && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><FileText size={20} /> Roteiro Gerado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg whitespace-pre-wrap font-code text-sm">{state.script}</pre>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">Construtor Visual de Fluxo</h3>
            <p className="text-muted-foreground">
                Desenhe fluxos de chamada complexos com nosso editor no-code.
            </p>
            <div className="relative space-y-8 py-4">
                <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-border -z-10"></div>
                <FlowStep icon={Play} title="Iniciar Chamada" description="A chamada é iniciada para o contato." color="bg-green-500" />
                <FlowStep icon={PhoneForwarded} title="Condição: Atendida" description="Se o cliente atender a ligação." color="bg-blue-500" />
                <div className="pl-16 relative">
                  <div className="absolute left-6 top-[-2rem] bottom-[5.5rem] w-0.5 bg-border -z-10"></div>
                  <div className="absolute left-6 top-[-2rem] h-0.5 w-10 bg-border -z-10"></div>
                   <FlowStep icon={CheckCircle} title="Tocar Mensagem de Sucesso" description="Reproduz a mensagem principal da campanha." color="bg-green-500" />
                </div>
                 <FlowStep icon={Voicemail} title="Condição: Caixa Postal" description="Se a chamada cair na caixa postal." color="bg-orange-500" />
                 <div className="pl-16 relative">
                    <div className="absolute left-6 top-[-2rem] h-0.5 w-10 bg-border -z-10"></div>
                   <FlowStep icon={XCircle} title="Finalizar Chamada" description="Encerra a chamada para tentar novamente mais tarde." color="bg-red-500" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
