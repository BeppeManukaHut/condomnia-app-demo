"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from 'lucide-react'

interface PaymentConfirmationPageProps {
  invoiceNumber: string
  amount: string
  onSendEmail: (email: string) => Promise<void>
}

export function PaymentConfirmationPage({ invoiceNumber, amount, onSendEmail }: PaymentConfirmationPageProps) {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)

  const handleSendEmail = async () => {
    await onSendEmail(email)
    setEmailSent(true)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CheckCircle2 className="mr-2 h-6 w-6 text-green-500" />
          Pagamento Confermato
        </CardTitle>
        <CardDescription>Il tuo pagamento è stato elaborato con successo.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p><strong>Numero Fattura:</strong> {invoiceNumber}</p>
          <p><strong>Importo Pagato:</strong> €{amount}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Invia conferma via email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="La tua email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSendEmail} disabled={emailSent}>
          {emailSent ? "Email Inviata" : "Invia Conferma"}
        </Button>
      </CardFooter>
    </Card>
  )
}

