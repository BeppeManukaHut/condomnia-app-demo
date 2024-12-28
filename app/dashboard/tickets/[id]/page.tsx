import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { BackButton } from "@/components/back-button"

const tickets = [
  {
    id: "1",
    title: "Perdita d'acqua nel bagno",
    status: "In corso",
    priority: "Alta",
    description: "C'è una perdita d'acqua significativa nel bagno del secondo piano. L'acqua sta gocciolando dal soffitto e ha già causato danni al pavimento.",
    updates: [
      { date: "2023-06-15", content: "Segnalazione ricevuta e assegnata al team di manutenzione." },
      { date: "2023-06-16", content: "Ispezione effettuata. Identificata la fonte della perdita. Necessario intervento idraulico." },
      { date: "2023-06-17", content: "Idraulico programmato per il 2023-06-19." },
    ]
  },
  {
    id: "2",
    title: "Sostituzione lampadine scale",
    status: "In attesa",
    priority: "Bassa",
    description: "Diverse lampadine nelle scale comuni sono bruciate e necessitano di sostituzione.",
    updates: [
      { date: "2023-06-10", content: "Segnalazione ricevuta." },
      { date: "2023-06-11", content: "Ordinate nuove lampadine a basso consumo." },
    ]
  },
  {
    id: "3",
    title: "Riparazione cancello automatico",
    status: "Completato",
    priority: "Media",
    description: "Il cancello automatico del parcheggio non si chiude correttamente, causando problemi di sicurezza.",
    updates: [
      { date: "2023-06-05", content: "Segnalazione ricevuta e assegnata al tecnico." },
      { date: "2023-06-06", content: "Ispezione effettuata. Identificato problema nel motore del cancello." },
      { date: "2023-06-08", content: "Riparazione completata e cancello funzionante correttamente." },
    ]
  },
]

export default function TicketPage({ params }: { params: { id: string } }) {
  const ticket = tickets.find(t => t.id === params.id)

  if (!ticket) {
    return <div>Ticket non trovato</div>
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading={`Ticket #${ticket.id}: ${ticket.title}`}
        text={`Priorità: ${ticket.priority}`}
      >
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
      </DashboardHeader>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Descrizione</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{ticket.description}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Aggiornamenti</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {ticket.updates.map((update, index) => (
                <li key={index} className="border-b pb-2 last:border-b-0">
                  <p className="font-semibold">{update.date}</p>
                  <p>{update.content}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <BackButton href="/dashboard/tickets" label="Tutti i Ticket" />
      </div>
    </DashboardShell>
  )
}

