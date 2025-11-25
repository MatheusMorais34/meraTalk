"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const initialWebhooks = [
    { id: 'wh_1', url: 'https://api.example.com/hooks/call-completed', event: 'Chamada Concluída' },
    { id: 'wh_2', url: 'https://api.slack.com/hooks/...', event: 'Falha na Chamada' },
    { id: 'wh_3', url: 'https://api.example.com/hooks/new-lead', event: 'Cliente Interessado' },
];

export default function WebhooksSection() {
    const [webhooks, setWebhooks] = useState(initialWebhooks);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <section id="webhooks" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Integrações</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Conecte o Meratalk AI a Suas Ferramentas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Envie notificações de eventos em tempo real para qualquer plataforma com nossos webhooks customizáveis.
            </p>
          </div>
        </div>
        <Card className="mt-12">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Gerenciador de Webhooks</CardTitle>
                    <CardDescription>Adicione e configure seus webhooks.</CardDescription>
                </div>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Adicionar Webhook
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Adicionar Novo Webhook</DialogTitle>
                        <DialogDescription>
                            Configure um novo endpoint para receber notificações de eventos.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="url" className="text-right">
                                URL
                                </Label>
                                <Input id="url" placeholder="https://api.seusistema.com/webhook" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="event" className="text-right">
                                Evento
                                </Label>
                                <Select>
                                    <SelectTrigger className="col-span-3">
                                        <SelectValue placeholder="Selecione um evento" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="completed">Chamada Concluída</SelectItem>
                                        <SelectItem value="failed">Falha na Chamada</SelectItem>
                                        <SelectItem value="voicemail">Caixa Postal Detectada</SelectItem>
                                        <SelectItem value="interested">Cliente Interessado</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={() => setIsDialogOpen(false)}>Salvar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>URL do Endpoint</TableHead>
                        <TableHead>Evento</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {webhooks.map((hook) => (
                        <TableRow key={hook.id}>
                            <TableCell className="font-medium font-code">{hook.url}</TableCell>
                            <TableCell>{hook.event}</TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Testar</DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive focus:text-destructive">Deletar</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}