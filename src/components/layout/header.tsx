"use client";

import { useState, useEffect } from 'react';
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from 'next/link';

const navLinks = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#automation", label: "Automação" },
  { href: "#analytics", label: "Análises" },
  { href: "#webhooks", label: "Webhooks" },
  { href: "#pricing", label: "Preços" },
];

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-background"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-bold text-xl">Meratalk AI</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Cadastre-se</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-1 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
             <div className="border-t pt-4 flex flex-col space-y-2">
                <Button variant="ghost" asChild>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>Cadastre-se</Link>
                </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
