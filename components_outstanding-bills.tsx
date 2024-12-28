"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Eye } from 'lucide-react'

export function OutstandingBills() {
  const router = useRouter()

  const payment = {
    id: "1",
    description: "Rata n. 4 - Esercizio Ordinario 2024",
    amount: "€1200",
    dueDate: "2024-07-15",
    timestamp: "2024-06-15T10:30:00Z"
  }

  const handlePayNow = (id: string, amount: string) => {
    router.push(`/dashboard/payments?invoice=${id}&amount=${encodeURIComponent(amount)}`)
  }

  const formattedDate = new Date(payment.timestamp).toLocaleString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4">
        <div className="flex-grow w-full sm:w-auto">
          <Link href={`/dashboard/invoices/${payment.id}`}>
            <div className="space-y-1 cursor-pointer rounded w-full">
              <p className="text-sm font-medium leading-none">{payment.description}</p>
              <p className="text-sm text-muted-foreground">Scadenza: {payment.dueDate}</p>
              <p className="text-sm font-medium">{payment.amount}</p>
              <p className="text-xs text-muted-foreground">Emesso il: {formattedDate}</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0 w-full sm:w-auto">
          <Link href={`/dashboard/invoices/${payment.id}`} passHref>
            <Button variant="outline" className="w-full sm:w-auto">
              <Eye className="w-4 h-4 mr-2" />
              Visualizza
            </Button>
          </Link>
          <Button 
            onClick={() => handlePayNow(payment.id, payment.amount)} 
            className="w-full sm:w-auto"
          >
            Paga Ora
          </Button>
        </div>
      </div>
    </div>
  )
}

