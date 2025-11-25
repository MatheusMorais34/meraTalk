'use client';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Phone,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';

const dashboardNavLinks = [
  { href: '/dashboard', label: 'Visão Geral', icon: LayoutGrid },
  { href: '#', label: 'Campanhas', icon: Phone },
  { href: '#', label: 'Relatórios', icon: BarChart3 },
  { href: '#', label: 'Configurações', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-bold text-lg hidden md:block">MERATALK</span>
        </Link>

        <div className="flex-1">
          <nav className="hidden md:flex md:items-center md:gap-2 text-sm font-medium">
            {dashboardNavLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                className="text-muted-foreground"
                asChild
              >
                <Link href={link.href}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            cliente@email.com
          </span>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Sair</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
}
