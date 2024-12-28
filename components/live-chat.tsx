"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function LiveChat() {
  const [messages, setMessages] = useState<string[]>([])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, inputMessage])
      setInputMessage("")
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, "Grazie per il tuo messaggio. Un operatore ti risponderà a breve."])
      }, 1000)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Chat</CardTitle>
        <CardDescription>Chatta in tempo reale con un nostro operatore.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] overflow-y-auto border rounded p-2 mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded ${index % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                {msg}
              </span>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Scrivi un messaggio..."
          />
          <Button onClick={handleSendMessage}>Invia</Button>
        </div>
      </CardContent>
    </Card>
  )
}

