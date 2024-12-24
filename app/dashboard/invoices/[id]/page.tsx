import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BackButton } from "@/components/back-button"

const bills = [
  {
    id: "1",
    description: "Riparazione ascensore",
    amount: "€1200",
    dueDate: "2023-07-15",
    status: "In scadenza",
    details: "Riparazione del motore dell'ascensore e sostituzione dei cavi di trazione."
  },
  {
    id: "2",
    description: "Manutenzione giardino",
    amount: "€450",
    dueDate: "2023-07-30",
    status: "In sospeso",
    details: "Potatura degli alberi, taglio del prato e manutenzione del sistema di irrigazione."
  },
  {
    id: "3",
    description: "Pulizia aree comuni",
    amount: "€300",
    dueDate: "2023-08-05",
    status: "In sospeso",
    details: "Pulizia approfondita di tutte le aree comuni, inclusi corridoi, scale e ascensore."
  },
]

export default function InvoicePage({ params }: { params: { id: string } }) {
  const invoice = bills.find(b => b.id === params.id)

  if (!invoice) {
    return <div>Fattura non trovata</div>
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading={`Fattura #${invoice.id}: ${invoice.description}`}
        text={`Importo: ${invoice.amount}`}
      >
        <Badge 
          variant={invoice.status === "In scadenza" ? "destructive" : "secondary"}
        >
          {invoice.status}
        </Badge>
      </DashboardHeader>
      <Card>
        <CardHeader>
          <CardTitle>Dettagli Fattura</CardTitle>
          <CardDescription>Scadenza: {invoice.dueDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{invoice.details}</p>
          <Link href={`/dashboard/payments?invoice=${invoice.id}&amount=${encodeURIComponent(invoice.amount)}`} passHref>
            <Button>Paga Ora</Button>
          </Link>
        </CardContent>
      </Card>
      <div className="mt-4">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

