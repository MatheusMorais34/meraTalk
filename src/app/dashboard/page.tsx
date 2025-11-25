'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Phone,
  CheckCircle2,
  XCircle,
  RadioTower,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Seu Plano</CardTitle>
          <CardDescription>Plano 10 Canais</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Canais Utilizados
            </span>
            <span className="text-sm font-medium">7 / 10</span>
          </div>
          <Progress value={70} aria-label="7 de 10 canais utilizados" />
          <p className="text-xs text-muted-foreground mt-2">
            Uso ilimitado dentro da capacidade contratada
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Chamadas
            </CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.250</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completadas</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">890</div>
            <p className="text-xs text-muted-foreground">71.2% de sucesso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Falhas</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">360</div>
            <p className="text-xs text-muted-foreground">28.8% do total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Campanhas Ativas</CardTitle>
            <RadioTower className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Em execução agora</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Infraestrutura</CardTitle>
          <CardDescription>Detalhes técnicos do serviço</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 text-sm">
           <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Rota:</span>
                <span>ITX Premium (Bina Móvel Anti-Spam)</span>
            </div>
             <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Status:</span>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span>Operacional</span>
                </div>
            </div>
             <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Servidor:</span>
                <span>BR-01 (Dedicado)</span>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
