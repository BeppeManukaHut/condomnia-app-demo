"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { PaymentForm } from "@/components/payment-form"
import { LoadingPage } from "@/components/loading-page"
import { PaymentConfirmationPage } from "@/components/payment-confirmation-page"
import { OutstandingInvoices } from "@/components/outstanding-invoices"
import { processPayment, sendConfirmationEmail } from "@/app/actions"

const outstandingInvoices = [
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

export function PaymentFormWrapper() {
  const searchParams = useSearchParams()
  const initialInvoiceId = searchParams.get('invoice')
  const initialAmount = searchParams.get('amount')

  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [paymentDetails, setPaymentDetails] = useState<{ invoiceNumber: string, amount: string } | null>(null)
  const [selectedInvoice, setSelectedInvoice] = useState<typeof outstandingInvoices[0] | null>(
    initialInvoiceId ? outstandingInvoices.find(inv => inv.id === initialInvoiceId) || null : null
  )

  const handleSubmit = async (formData: FormData) => {
    setPaymentStatus('loading')
    try {
      const result = await processPayment(formData)
      if (result.success) {
        setPaymentStatus('success')
        setPaymentDetails({
          invoiceNumber: formData.get('invoiceNumber') as string,
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
      await sendConfirmationEmail(email, paymentDetails.invoiceNumber, paymentDetails.amount)
    }
  }

  const handleSelectInvoice = (invoice: typeof outstandingInvoices[0]) => {
    setSelectedInvoice(invoice)
  }

  if (paymentStatus === 'loading') {
    return <LoadingPage />
  }

  if (paymentStatus === 'success' && paymentDetails) {
    return (
      <PaymentConfirmationPage 
        invoiceNumber={paymentDetails.invoiceNumber} 
        amount={paymentDetails.amount}
        onSendEmail={handleSendEmail}
      />
    )
  }

  return (
    <div className="space-y-8">
      <PaymentForm 
        prefilledInvoice={selectedInvoice?.id || initialInvoiceId} 
        prefilledAmount={selectedInvoice?.amount || initialAmount} 
        onSubmit={handleSubmit} 
      />
      <OutstandingInvoices 
        invoices={outstandingInvoices}
        onSelectInvoice={handleSelectInvoice}
      />
    </div>
  )
}

