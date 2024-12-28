import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TicketForm } from "@/components/ticket-form"
import { BackButton } from "@/components/back-button"

const tickets = [
  {
    id: "1",
    title: "Perdita d'acqua nel bagno",
    status: "In corso",
    priority: "Alta",
  },
  {
    id: "2",
    title: "Sostituzione lampadine scale",
    status: "In attesa",
    priority: "Bassa",
  },
  {
    id: "3",
    title: "Riparazione cancello automatico",
    status: "Completato",
    priority: "Media",
  },
]

export default function TicketsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Tickets"
        text="Invia un nuovo ticket o visualizza quelli esistenti."
      />
      <div className="grid gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuovo Ticket</h2>
          <TicketForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Tickets Esistenti</h2>
          <div className="grid gap-4">
            {tickets.map((ticket) => (
              <Link key={ticket.id} href={`/dashboard/tickets/${ticket.id}`}>
                <Card className="hover:bg-gray-100 transition-colors">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Ticket #{ticket.id}: {ticket.title}
                    </CardTitle>
                    <Badge 
                      variant={
                        ticket.status === "Completato" 
                          ? "default" 
                          : ticket.status === "In corso" 
                            ? "secondary" 
                            : "outline"
                      }
                    >
                      {ticket.status}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Priorità: {ticket.priority}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

