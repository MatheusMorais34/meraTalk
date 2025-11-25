'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  BarChartHorizontal,
  FileText,
  Pause,
  Play,
  PlusCircle,
  Search,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';

const campaigns = [
  {
    title: 'Promoção Black Friday',
    createdAt: '14/01/2024',
    status: 'Ativa',
    totalCalls: 450,
    completedCalls: 320,
    successRate: 71.1,
    audioText: 'Olá! Temos uma super promoção de Black Friday especial para você...',
  },
  {
    title: 'Confirmação de Agendamento',
    createdAt: '13/01/2024',
    status: 'Ativa',
    totalCalls: 230,
    completedCalls: 195,
    successRate: 84.8,
    audioText: 'Olá, estamos ligando para confirmar seu agendamento...',
  },
  {
    title: 'Pesquisa de Satisfação',
    createdAt: '09/01/2024',
    status: 'Pausada',
    totalCalls: 570,
    completedCalls: 375,
    successRate: 65.8,
    audioText: 'Olá! Gostaríamos de saber sua opinião sobre nosso serviço...',
  },
];

type CampaignStatus = 'Ativa' | 'Pausada';

const statusStyles: Record<CampaignStatus, string> = {
    Ativa: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700',
    Pausada: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700',
};

const CampaignCard = ({ campaign }: { campaign: (typeof campaigns)[0] }) => {
    const statusDotStyle = campaign.status === 'Ativa' ? 'bg-green-500' : 'bg-yellow-500';
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{campaign.title}</CardTitle>
                    <div className="flex items-center gap-4">
                         <Badge variant="outline" className={statusStyles[campaign.status as CampaignStatus]}>
                            <span className={`mr-2 h-2 w-2 rounded-full ${statusDotStyle}`}></span>
                            {campaign.status}
                        </Badge>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                {campaign.status === 'Ativa' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                <span className="sr-only">{campaign.status === 'Ativa' ? 'Pausar' : 'Iniciar'}</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <BarChartHorizontal className="h-4 w-4" />
                                 <span className="sr-only">Ver relatórios</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                                <Trash2 className="h-4 w-4" />
                                 <span className="sr-only">Excluir</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <CardDescription>Criada em {campaign.createdAt}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-sm text-muted-foreground">Total de Chamadas</p>
                        <p className="text-2xl font-bold">{campaign.totalCalls}</p>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">Completadas</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-500">
                            {campaign.completedCalls}{' '}
                            <span className="text-sm font-normal text-muted-foreground">({campaign.successRate}%)</span>
                        </p>
                    </div>
                </div>
                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground"/>
                        <h4 className="text-sm font-semibold">Texto do Áudio (IA)</h4>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg border">
                        <p className="text-sm text-muted-foreground italic">"{campaign.audioText}"</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};


export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Minhas Campanhas</h1>
          <p className="text-muted-foreground">
            Gerencie suas campanhas de URA reversa.
          </p>
        </div>
        <div className="flex items-center gap-4">
             <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar campanhas..." className="pl-9" />
            </div>
            <Button asChild>
                <Link href="/dashboard/campaigns/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Campanha
                </Link>
            </Button>
        </div>
      </div>
      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.title} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
