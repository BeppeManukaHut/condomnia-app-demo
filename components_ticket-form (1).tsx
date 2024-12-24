"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function TicketForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Ticket inviato con successo!")
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Nuovo Ticket</CardTitle>
          <CardDescription>Compila il modulo per inviare un nuovo ticket.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">Titolo</label>
            <Input id="title" placeholder="Inserisci il titolo del ticket" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">Categoria</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona una categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maintenance">Manutenzione</SelectItem>
                <SelectItem value="repair">Riparazione</SelectItem>
                <SelectItem value="complaint">Reclamo</SelectItem>
                <SelectItem value="other">Altro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="priority" className="text-sm font-medium">Priorità</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Seleziona la priorità" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Bassa</SelectItem>
                <SelectItem value="medium">Media</SelectItem>
                <SelectItem value="high">Alta</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Descrizione</label>
            <Textarea id="description" placeholder="Descrivi il problema in dettaglio" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Invio in corso..." : "Invia Ticket"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

