"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const bills = [
  {
    id: "1",
    description: "Riparazione ascensore",
    amount: "€1200",
    dueDate: "2023-07-15",
    status: "In scadenza",
  },
  {
    id: "2",
    description: "Manutenzione giardino",
    amount: "€450",
    dueDate: "2023-07-30",
    status: "In sospeso",
  },
  {
    id: "3",
    description: "Pulizia aree comuni",
    amount: "€300",
    dueDate: "2023-08-05",
    status: "In sospeso",
  },
]

export function OutstandingBills() {
  const router = useRouter()

  const handlePayNow = (id: string, amount: string) => {
    router.push(`/dashboard/payments?invoice=${id}&amount=${encodeURIComponent(amount)}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fatture in Sospeso</CardTitle>
        <CardDescription>
          Visualizza le fatture in sospeso e il loro stato.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bills.map((bill) => (
            <div key={bill.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex-grow w-full sm:w-auto">
                <Badge 
                  className="mb-2 text-[10px] px-2 py-0.5"
                  variant={bill.status === "In scadenza" ? "destructive" : "secondary"}
                >
                  {bill.status}
                </Badge>
                <Link href={`/dashboard/invoices/${bill.id}`}>
                  <div className="space-y-1 cursor-pointer p-2 rounded w-full">
                    <p className="text-sm font-medium leading-none">{bill.description}</p>
                    <p className="text-sm text-muted-foreground">Scadenza: {bill.dueDate}</p>
                    <p className="text-sm font-medium">{bill.amount}</p>
                  </div>
                </Link>
              </div>
              <div className="mt-2 sm:mt-0">
                <Button 
                  onClick={() => handlePayNow(bill.id, bill.amount)} 
                  className="w-full"
                >
                  Paga Ora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

