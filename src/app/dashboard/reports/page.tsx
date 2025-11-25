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
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Phone,
  CheckCircle2,
  XCircle,
  Clock,
  Filter,
  Search,
  FileDown,
  PhoneMissed,
} from 'lucide-react';
import { Pie, PieChart, Cell } from 'recharts';

type CallStatus = 'Completada' | 'Não Atendida' | 'Falha' | 'Ocupado';

const callsData = [
  {
    number: '11987654321',
    campaign: 'Promoção Black Friday',
    dateTime: '2024-01-20 14:30:15',
    duration: '0:45',
    status: 'Completada',
    option: '# 1',
    action: 'Webhook acionado',
  },
  {
    number: '11976543210',
    campaign: 'Promoção Black Friday',
    dateTime: '2024-01-20 14:31:22',
    duration: '0:32',
    status: 'Completada',
    option: '# 2',
    action: 'Chamada desligada',
  },
  {
    number: '21987654321',
    campaign: 'Confirmação de Agendamento',
    dateTime: '2024-01-20 14:33:45',
    duration: '-',
    status: 'Não Atendida',
    option: '-',
    action: '-',
  },
  {
    number: '11965432189',
    campaign: 'Pesquisa de Satisfação',
    dateTime: '2024-01-20 14:35:12',
    duration: '0:58',
    status: 'Completada',
    option: '# 3',
    action: 'Webhook acionado',
  },
  {
    number: '11954321098',
    campaign: 'Promoção Black Friday',
    dateTime: '2024-01-20 14:36:30',
    duration: '-',
    status: 'Ocupado',
    option: '-',
    action: '-',
  },
  {
    number: '21976543210',
    campaign: 'Confirmação de Agendamento',
    dateTime: '2024-01-20 14:38:45',
    duration: '0:12',
    status: 'Falha',
    option: '-',
    action: '-',
  },
];

const statusConfig: Record<
  CallStatus,
  {
    color: string;
    bgColor: string;
    borderColor: string;
    chartColor: string;
  }
> = {
  Completada: {
    color: 'text-green-800',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-200',
    chartColor: 'hsl(142.1 76.2% 36.3%)', // green-600
  },
  'Não Atendida': {
    color: 'text-yellow-800',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-200',
    chartColor: 'hsl(47.9 95.8% 53.1%)', // yellow-500
  },
  Ocupado: {
    color: 'text-orange-800',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-200',
    chartColor: 'hsl(24.6 95% 53.1%)', // orange-500
  },
  Falha: {
    color: 'text-red-800',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-200',
    chartColor: 'hsl(0 84.2% 60.2%)', // destructive
  },
};

const chartData = [
  { status: 'Completada', count: 3, fill: statusConfig['Completada'].chartColor },
  { status: 'Não Atendida', count: 1, fill: statusConfig['Não Atendida'].chartColor },
  { status: 'Ocupado', count: 1, fill: statusConfig['Ocupado'].chartColor },
  { status: 'Falha', count: 1, fill: statusConfig['Falha'].chartColor },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Relatórios de Chamadas
          </h1>
          <p className="text-muted-foreground">
            Análise detalhada de todas as chamadas realizadas
          </p>
        </div>
        <Button>
          <FileDown className="mr-2 h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Chamadas
            </CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">no período selecionado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completadas</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">50% do total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Não Atendidas</CardTitle>
            <PhoneMissed className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">16,7% do total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Duração Média</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0:37</div>
            <p className="text-xs text-muted-foreground">
              Tempo médio de chamada
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5" />
              <CardTitle>Filtros</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="search">Buscar</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="search" placeholder="Número ou campanha..." className="pl-8" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="campaign-filter">Campanha</Label>
              <Select>
                <SelectTrigger id="campaign-filter">
                  <SelectValue placeholder="Todas as Campanhas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as Campanhas</SelectItem>
                  <SelectItem value="black-friday">
                    Promoção Black Friday
                  </SelectItem>
                  <SelectItem value="scheduling">
                    Confirmação de Agendamento
                  </SelectItem>
                   <SelectItem value="satisfaction">
                    Pesquisa de Satisfação
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
             <div className="grid gap-2">
              <Label htmlFor="status-filter">Status</Label>
              <Select>
                <SelectTrigger id="status-filter">
                  <SelectValue placeholder="Todos os Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os Status</SelectItem>
                  <SelectItem value="completed">Completada</SelectItem>
                  <SelectItem value="not-answered">Não Atendida</SelectItem>
                  <SelectItem value="busy">Ocupado</SelectItem>
                  <SelectItem value="failed">Falha</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle>Distribuição de Status</CardTitle>
                <CardDescription>Visualização do resultado das chamadas</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                 <ChartContainer config={{}} className="mx-auto aspect-square h-[200px]">
                    <PieChart>
                         <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie data={chartData} dataKey="count" nameKey="status" innerRadius={50} labelLine={false} label={({payload, ...props}) => {
                           return <text {...props} x={props.cx} y={props.cy} textAnchor="middle" dominantBaseline="central" className="fill-white font-bold text-sm">
                                {`${((payload.percent ?? 0) * 100).toFixed(0)}%`}
                            </text>
                        }}>
                             {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registro de Chamadas</CardTitle>
          <CardDescription>
            Mostrando {callsData.length} de {callsData.length} registros
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Campanha</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead>Duração</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Opção</TableHead>
                <TableHead>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {callsData.map((call, index) => {
                const statusInfo = statusConfig[call.status as CallStatus];
                return (
                  <TableRow key={index}>
                    <TableCell className="font-mono">{call.number}</TableCell>
                    <TableCell>{call.campaign}</TableCell>
                    <TableCell>{call.dateTime}</TableCell>
                    <TableCell>{call.duration}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${statusInfo.bgColor} ${statusInfo.color} ${statusInfo.borderColor}`}
                      >
                        {call.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{call.option}</TableCell>
                    <TableCell>{call.action}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
