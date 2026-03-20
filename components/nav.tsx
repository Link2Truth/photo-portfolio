"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navItems = [
  { label: "首页", href: "#home" },
  { label: "照片", href: "#portfolio" },
  { label: "关于", href: "#about" },
  { label: "联系", href: "#contact" },
];

export function PortfolioNav({ authSlot }: { authSlot: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/60 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="flex items-center gap-2 font-semibold text-lg">
          <Camera className="size-5" />
          <span>Photo Gallery</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Separator orientation="vertical" className="h-6 mx-2" />
          <ThemeSwitcher />
          {authSlot}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              <Separator className="my-2" />
              <ThemeSwitcher />
              {authSlot}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
