"use client"

import { useState } from "react"
import { useSearchParams } from 'next/navigation'
import { PaymentForm } from "@/components/payment-form"
import { LoadingPage } from "@/components/loading-page"
import { PaymentConfirmationPage } from "@/components/payment-confirmation-page"
import { processPayment, sendConfirmationEmail } from "@/app/actions"

export function PaymentFormWrapper() {
  const searchParams = useSearchParams()
  const invoiceId = searchParams.get('invoice')
  const amount = searchParams.get('amount')

  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [paymentDetails, setPaymentDetails] = useState<{ invoiceNumber: string, amount: string } | null>(null)

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
    <PaymentForm 
      prefilledInvoice={invoiceId} 
      prefilledAmount={amount} 
      onSubmit={handleSubmit} 
    />
  )
}

