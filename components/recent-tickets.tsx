import { Badge } from "@/components/ui/badge"
import Link from "next/link"

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
  )
}

