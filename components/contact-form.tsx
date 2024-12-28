"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Messaggio inviato con successo!")
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invia un messaggio</CardTitle>
        <CardDescription>Compila il modulo sottostante e ti risponderemo il prima possibile.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Il tuo nome" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input id="email" placeholder="La tua email" type="email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Textarea id="message" placeholder="Il tuo messaggio" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Invio in corso..." : "Invia messaggio"}
        </Button>
      </CardFooter>
    </Card>
  )
}

