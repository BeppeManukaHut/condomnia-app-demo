import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'

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

export function RecentTickets() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-2xl font-bold">Ticket Recenti</h2>
        <Link href="/dashboard/tickets">
          <Button size="sm" className="w-full sm:w-auto">
            <PlusCircle className="mr-1 h-4 w-4" />
            Nuovo Ticket
          </Button>
        </Link>
      </div>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <Link key={ticket.id} href={`/dashboard/tickets/${ticket.id}`} className="block">
            <div className="flex items-center justify-between hover:bg-gray-100 p-2 rounded-md transition-colors">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{ticket.title}</p>
                <p className="text-sm text-muted-foreground">Priorità: {ticket.priority}</p>
              </div>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

