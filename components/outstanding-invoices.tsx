import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Invoice {
  id: string
  description: string
  amount: string
  dueDate: string
  status: string
}

interface OutstandingInvoicesProps {
  invoices: Invoice[]
  onSelectInvoice: (invoice: Invoice) => void
}

export function OutstandingInvoices({ invoices, onSelectInvoice }: OutstandingInvoicesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fatture in Sospeso</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">{invoice.description}</p>
                <p className="text-sm text-muted-foreground">Scadenza: {invoice.dueDate}</p>
                <p className="text-sm font-medium">{invoice.amount}</p>
                <Badge 
                  className="mt-1"
                  variant={invoice.status === "In scadenza" ? "destructive" : "secondary"}
                >
                  {invoice.status}
                </Badge>
              </div>
              <Button onClick={() => onSelectInvoice(invoice)}>
                Seleziona
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

