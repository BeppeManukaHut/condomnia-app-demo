"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from 'lucide-react'

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
    <div className="space-y-4">
      {bills.map((bill) => (
        <div key={bill.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
          <div className="flex-grow w-full sm:w-auto">
            <Badge 
              className="mb-2 text-[10px] px-2 py-0.5"
              variant={bill.status === "In scadenza" ? "destructive" : "secondary"}
            >
              {bill.status}
            </Badge>
            <Link href={`/dashboard/invoices/${bill.id}`}>
              <div className="space-y-1 cursor-pointer rounded w-full">
                <p className="text-sm font-medium leading-none">{bill.description}</p>
                <p className="text-sm text-muted-foreground">Scadenza: {bill.dueDate}</p>
                <p className="text-sm font-medium">{bill.amount}</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0 w-full sm:w-auto">
            <Link href={`/dashboard/invoices/${bill.id}`} passHref>
              <Button variant="outline" className="w-full sm:w-auto">
                <Eye className="w-4 h-4 mr-2" />
                Visualizza
              </Button>
            </Link>
            <Button 
              onClick={() => handlePayNow(bill.id, bill.amount)} 
              className="w-full sm:w-auto"
            >
              Paga Ora
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

