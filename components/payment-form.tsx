"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface PaymentFormProps {
  prefilledInvoice?: string | null
  prefilledAmount?: string | null
  onSubmit: (formData: FormData) => Promise<void>
}

export function PaymentForm({ prefilledInvoice, prefilledAmount, onSubmit }: PaymentFormProps) {
  const [invoiceNumber, setInvoiceNumber] = useState(prefilledInvoice || "")
  const [amount, setAmount] = useState(prefilledAmount?.replace(/[^0-9.,]/g, '') || "")

  return (
    <form action={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Dettagli Pagamento</CardTitle>
          <CardDescription>Inserisci i dettagli della carta, il numero di fattura e l'importo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="invoiceNumber">Numero Fattura</Label>
            <Input 
              id="invoiceNumber" 
              name="invoiceNumber"
              value={invoiceNumber} 
              onChange={(e) => setInvoiceNumber(e.target.value)} 
              placeholder="INV-0001" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Importo (€)</Label>
            <Input 
              id="amount" 
              name="amount"
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="0.00" 
              type="number" 
              step="0.01" 
              min="0" 
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Numero Carta</Label>
            <Input id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Data di Scadenza</Label>
              <Input id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" name="cvv" placeholder="123" required />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Effettua Pagamento</Button>
        </CardFooter>
      </Card>
    </form>
  )
}

