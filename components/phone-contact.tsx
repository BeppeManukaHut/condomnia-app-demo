import { Phone, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PhoneContact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contatto Telefonico</CardTitle>
        <CardDescription>Chiamaci per assistenza immediata.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-lg font-semibold">+39 02 1234 5678</span>
        </div>
        <div className="flex items-start space-x-2">
          <Clock className="h-5 w-5 text-primary mt-1" />
          <div>
            <p className="font-medium">Orari di apertura:</p>
            <p>Lunedì - Venerdì: 9:00 - 18:00</p>
            <p>Sabato: 9:00 - 12:00</p>
            <p>Domenica: Chiuso</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

