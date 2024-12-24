import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { OutstandingBills } from "@/components/outstanding-bills"
import { RecentDocuments } from "@/components/recent-documents"
import { RecentTickets } from "@/components/recent-tickets"
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Benvenuto nel tuo dashboard di gestione condominio.">
        <Link href="/dashboard/tickets" passHref>
          <Button className="bg-[#bb78ff] text-white hover:bg-[#a35ff0]">
            Crea Nuovo Ticket
          </Button>
        </Link>
      </DashboardHeader>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Totale</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€45.231,89</div>
            <p className="text-xs text-muted-foreground">+20,1% rispetto al mese scorso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pagamenti in Sospeso</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">-2 rispetto alla settimana scorsa</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Aperti</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 rispetto al mese scorso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nuovi Documenti</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+2 rispetto alla settimana scorsa</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 mt-4 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Panoramica</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Fatture in Sospeso</CardTitle>
            <CardDescription>
              Hai 3 fatture in sospeso questo mese.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OutstandingBills />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 mt-4 grid-cols-1 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Documenti Recenti</CardTitle>
            <CardDescription>
              5 nuovi documenti sono stati aggiunti questo mese.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentDocuments />
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Ticket Recenti</CardTitle>
            <CardDescription>
              Hai 12 ticket aperti.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTickets />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

