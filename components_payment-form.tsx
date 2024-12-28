"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface PaymentFormProps {
  prefilledInvoice?: string
  prefilledAmount?: string | null
  onSubmit: (formData: FormData) => Promise<void>
}

export function PaymentForm({ prefilledInvoice, prefilledAmount, onSubmit }: PaymentFormProps) {
  const [invoiceDescription, setInvoiceDescription] = useState(prefilledInvoice || "")
  const [amount, setAmount] = useState(prefilledAmount ? parseFloat(prefilledAmount.replace(/[^0-9.,]/g, '').replace(',', '.')).toFixed(2) : "")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (prefilledInvoice) setInvoiceDescription(prefilledInvoice)
    if (prefilledAmount) {
      const cleanAmount = prefilledAmount.replace(/[^0-9.,]/g, '').replace(',', '.')
      setAmount(parseFloat(cleanAmount).toFixed(2))
    }
  }, [prefilledInvoice, prefilledAmount])

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.,]/g, '').replace(',', '.')
    if (value === "" || /^\d{1,}(\.\d{0,2})?$/.test(value)) {
      setAmount(value)
    }
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 16) {
      setCardNumber(value.replace(/(.{4})/g, '$1 ').trim())
    }
  }

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 4) {
      setExpiryDate(value.replace(/^(\d{2})/, '$1/'))
    }
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 4) {
      setCvv(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    await onSubmit(formData)
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Dettagli Pagamento</CardTitle>
          <CardDescription>Inserisci i dettagli della carta, la descrizione della fattura e l'importo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="invoiceDescription">Descrizione Fattura</Label>
            <Input 
              id="invoiceDescription" 
              name="invoiceDescription"
              value={invoiceDescription} 
              onChange={(e) => setInvoiceDescription(e.target.value)} 
              placeholder="Descrizione della fattura" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Importo (€)</Label>
            <Input 
              id="amount" 
              name="amount"
              value={amount ? `€${amount}` : ''} 
              onChange={handleAmountChange} 
              placeholder="€0.00" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Numero Carta</Label>
            <Input 
              id="cardNumber" 
              name="cardNumber" 
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234 5678 9012 3456" 
              required 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Data di Scadenza</Label>
              <Input 
                id="expiryDate" 
                name="expiryDate" 
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input 
                id="cvv" 
                name="cvv" 
                value={cvv}
                onChange={handleCvvChange}
                placeholder="123" 
                required 
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Elaborazione..." : "Effettua Pagamento"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

