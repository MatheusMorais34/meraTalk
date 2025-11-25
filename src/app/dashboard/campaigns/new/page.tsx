
'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertTriangle,
  ArrowLeft,
  AudioLines,
  Contact,
  FileText,
  GitMerge,
  Plus,
  Sparkles,
  Voicemail,
} from 'lucide-react';
import Link from 'next/link';

export default function NewCampaignPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/campaigns">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nova Campanha</h1>
          <p className="text-muted-foreground">
            Configure sua campanha de URA reversa
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6" />
              <CardTitle>Informações Básicas</CardTitle>
            </div>
            <CardDescription>
              Defina o nome e identificação da campanha
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <Label htmlFor="campaign-name">Nome da Campanha *</Label>
              <Input
                id="campaign-name"
                placeholder="Ex: Promoção de Fim de Ano"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              <CardTitle>Áudio da Campanha (IA)</CardTitle>
            </div>
            <CardDescription>
              Digite o texto que será convertido em áudio por Inteligência
              Artificial. O sistema não permite upload de arquivos de áudio.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert variant="default" className="bg-yellow-50 border-yellow-200">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="font-semibold text-yellow-800">
                Políticas de Segurança
              </AlertTitle>
              <AlertDescription className="text-yellow-700">
                O sistema bloqueia automaticamente textos com palavras
                relacionadas a fraudes, golpes bancários ou conteúdo impróprio.
                Limite de 1 modelo de áudio por campanha.
              </AlertDescription>
            </Alert>
            <div className="grid gap-2">
              <Label htmlFor="audio-text">Texto do Áudio *</Label>
              <Textarea
                id="audio-text"
                placeholder="Ex: Olá! Estamos entrando em contato para informar sobre nossa promoção especial..."
                className="min-h-[120px]"
              />
              <p className="text-sm text-muted-foreground text-right">
                0 caracteres
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              <div className='grid gap-2'>
                <Label htmlFor="ai-voice">Voz da IA *</Label>
                <Select>
                  <SelectTrigger id="ai-voice">
                    <SelectValue placeholder="Selecione uma voz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="voice-1">Voz Padrão Feminina</SelectItem>
                    <SelectItem value="voice-2">Voz Padrão Masculina</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 self-end">
                <Button variant="outline">
                  <AudioLines className="mr-2 h-4 w-4" />
                  Gerar Preview do Áudio
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Contact className="h-6 w-6" />
              <CardTitle>Lista de Contatos</CardTitle>
            </div>
            <CardDescription>
              Insira os números de telefone que receberão as chamadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="manual">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="manual">Digitar Manualmente</TabsTrigger>
                <TabsTrigger value="csv">Importar CSV</TabsTrigger>
              </TabsList>
              <TabsContent value="manual" className="pt-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone-numbers">Números de Telefone *</Label>
                  <Textarea
                    id="phone-numbers"
                    placeholder="Digite um número por linha. Ex:&#10;11987654321&#10;11976543210&#10;21987654321"
                    className="min-h-[150px] font-mono text-sm"
                  />
                  <p className="text-sm text-muted-foreground text-right">
                    0 números adicionados
                  </p>
                </div>
              </TabsContent>
               <TabsContent value="csv" className="pt-4">
                <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/30 p-8 text-center">
                    <p className="text-muted-foreground">Arraste e solte um arquivo .csv aqui ou</p>
                    <Button variant="outline">Selecionar Arquivo</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex-row items-center justify-between'>
             <div className="flex items-center gap-3">
              <GitMerge className="h-6 w-6" />
              <CardTitle>Árvore de Decisão da URA</CardTitle>
            </div>
            <div className='flex items-center gap-2'>
                <Button variant="outline"><Plus className="h-4 w-4 mr-2" />Menu</Button>
                <Button variant="outline"><Plus className="h-4 w-4 mr-2" />Ação</Button>
            </div>
          </CardHeader>
           <CardDescription className="px-6 pb-2">
              Configure o fluxo de navegação e as opções que o usuário poderá
              escolher
            </CardDescription>
          <CardContent className="flex flex-col items-center justify-center text-center h-48 rounded-lg border-2 border-dashed m-6 mt-0">
                <div className="mb-4">
                    <Voicemail className="h-10 w-10 mx-auto text-muted-foreground" />
                </div>
                <p className="font-semibold">Nenhum nó criado ainda</p>
                <p className="text-sm text-muted-foreground">Adicione um menu ou ação para começar</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <Button variant="outline" asChild>
            <Link href="/dashboard/campaigns">Cancelar</Link>
        </Button>
        <Button>Criar Campanha</Button>
      </div>
    </div>
  );
}
