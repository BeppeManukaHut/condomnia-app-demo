"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, CreditCard, FileText, TicketIcon, Settings, LogOut, Menu, PhoneCall } from 'lucide-react'
import { useState } from "react"

interface DashboardNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardNav({ className, ...props }: DashboardNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const items = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Pagamenti",
      href: "/dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "Documenti",
      href: "/dashboard/documents",
      icon: FileText,
    },
    {
      title: "Ticket",
      href: "/dashboard/tickets",
      icon: TicketIcon,
    },
    {
      title: "Contattaci",
      href: "/contact",
      icon: PhoneCall,
    },
    {
      title: "Impostazioni",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <nav
      className={cn("flex flex-col border-r bg-muted lg:h-screen", className)}
      {...props}
    >
      <div className="flex h-14 items-center border-b px-4 lg:justify-between">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="font-bold">Gestione Condominio</span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </Button>
      </div>
      <ScrollArea className={cn("flex-1", isOpen ? "block" : "hidden lg:block")}>
        <div className="flex flex-col gap-2 p-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === item.href
                  ? "bg-primary/10 text-primary hover:bg-primary/20"
                  : "hover:bg-transparent hover:underline",
                "justify-start"
              )}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className={cn("p-4", isOpen ? "block" : "hidden lg:block")}>
        <Link href="/" passHref>
          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            Esci
          </Button>
        </Link>
      </div>
    </nav>
  )
}

