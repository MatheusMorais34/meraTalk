'use client';

import { AppHeader } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AppFooter } from '@/components/layout/footer';

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1 bg-secondary">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
            Finalizar Compra
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Pagamento</CardTitle>
                  <CardDescription>Selecione seu método de pagamento e insira seus dados.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup defaultValue="credit-card" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                      <Label
                        htmlFor="credit-card"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Cartão de Crédito
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="pix" id="pix" className="peer sr-only" />
                      <Label
                        htmlFor="pix"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        PIX
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="boleto" id="boleto" className="peer sr-only" />
                      <Label
                        htmlFor="boleto"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Boleto
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="space-y-4">
                     <div className="grid gap-2">
                        <Label htmlFor="card-name">Nome no Cartão</Label>
                        <Input id="card-name" placeholder="Seu nome como aparece no cartão" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="card-number">Número do Cartão</Label>
                        <Input id="card-number" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="expiry-month">Vencimento</Label>
                          <Input id="expiry-month" placeholder="MM/AA" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                         <div className="grid gap-2">
                          <Label htmlFor="installments">Parcelas</Label>
                           <Select>
                              <SelectTrigger id="installments">
                                <SelectValue placeholder="1x sem juros" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1x sem juros</SelectItem>
                                <SelectItem value="2">2x sem juros</SelectItem>
                                <SelectItem value="3">3x sem juros</SelectItem>
                              </SelectContent>
                            </Select>
                        </div>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
               <Card>
                <CardHeader>
                  <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <p className="text-muted-foreground">Plano Profissional</p>
                        <p className="font-medium">R$ 299,00</p>
                    </div>
                     <div className="flex items-center justify-between font-bold text-lg">
                        <p>Total</p>
                        <p>R$ 299,00</p>
                    </div>
                </CardContent>
                 <CardContent>
                    <Button className="w-full" size="lg">Confirmar Pagamento</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}