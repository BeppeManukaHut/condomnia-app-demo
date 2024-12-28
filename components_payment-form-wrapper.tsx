"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { PaymentForm } from "@/components/payment-form"
import { LoadingPage } from "@/components/loading-page"
import { PaymentConfirmationPage } from "@/components/payment-confirmation-page"
import { processPayment, sendConfirmationEmail } from "@/app/actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from 'lucide-react'
import Link from 'next/link'

const payment = {
  id: "1",
  description: "Rata n. 4 - Esercizio Ordinario 2024",
  amount: "€1200",
  dueDate: "2024-07-15",
}

export function PaymentFormWrapper() {
  const searchParams = useSearchParams()
  const initialInvoiceId = searchParams.get('invoice')
  const initialAmount = searchParams.get('amount')

  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [paymentDetails, setPaymentDetails] = useState<{ invoiceDescription: string, amount: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setPaymentStatus('loading')
    try {
      const result = await processPayment(formData)
      if (result.success) {
        setPaymentStatus('success')
        setPaymentDetails({
          invoiceDescription: formData.get('invoiceDescription') as string,
          amount: formData.get('amount') as string
        })
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error('Payment failed:', error)
      setPaymentStatus('idle')
      alert('Pagamento fallito. Per favore, riprova.')
    }
  }

  const handleSendEmail = async (email: string) => {
    if (paymentDetails) {
      await sendConfirmationEmail(email, paymentDetails.invoiceDescription, paymentDetails.amount)
    }
  }

  if (paymentStatus === 'loading') {
    return <LoadingPage />
  }

  if (paymentStatus === 'success' && paymentDetails) {
    return (
      <PaymentConfirmationPage 
        invoiceDescription={paymentDetails.invoiceDescription} 
        amount={paymentDetails.amount}
        onSendEmail={handleSendEmail}
      />
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pagamento in Scadenza</CardTitle>
        <CardDescription>
          Hai 1 pagamento in scadenza.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg mb-4">
          <div className="flex-grow w-full sm:w-auto">
            <Link href={`/dashboard/invoices/${payment.id}`}>
              <div className="space-y-1 cursor-pointer rounded w-full">
                <p className="text-sm font-medium leading-none">{payment.description}</p>
                <p className="text-sm text-muted-foreground">Scadenza: {payment.dueDate}</p>
                <p className="text-sm font-medium">{payment.amount}</p>
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
              onClick={() => {
                const form = document.querySelector('form') as HTMLFormElement
                if (form) form.scrollIntoView({ behavior: 'smooth' })
              }} 
              className="w-full sm:w-auto"
            >
              Paga Ora
            </Button>
          </div>
        </div>
        <PaymentForm 
          prefilledInvoice={payment.description} 
          prefilledAmount={payment.amount} 
          onSubmit={handleSubmit} 
        />
      </CardContent>
    </Card>
  )
}

