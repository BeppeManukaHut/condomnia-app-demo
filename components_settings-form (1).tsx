"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Impostazioni aggiornate con successo!")
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Impostazioni Account</CardTitle>
          <CardDescription>Gestisci le tue informazioni personali e le preferenze.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Personale</TabsTrigger>
              <TabsTrigger value="billing">Fatturazione</TabsTrigger>
              <TabsTrigger value="notifications">Notifiche</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" defaultValue="Mario Rossi" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="mario.rossi@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefono</Label>
                <Input id="phone" type="tel" defaultValue="+39 123 456 7890" />
              </div>
            </TabsContent>
            <TabsContent value="billing" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address">Indirizzo di Fatturazione</Label>
                <Input id="address" defaultValue="Via Roma 123, 00100 Roma" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Metodo di Pagamento</Label>
                <Input id="paymentMethod" defaultValue="Visa **** 1234" required />
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input id="emailNotifications" type="checkbox" className="w-4 h-4" defaultChecked />
                <Label htmlFor="emailNotifications">Ricevi notifiche via email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input id="smsNotifications" type="checkbox" className="w-4 h-4" />
                <Label htmlFor="smsNotifications">Ricevi notifiche via SMS</Label>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Salvataggio..." : "Salva Modifiche"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

