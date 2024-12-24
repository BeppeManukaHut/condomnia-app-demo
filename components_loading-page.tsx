import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from 'lucide-react'

export function LoadingPage() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Elaborazione del pagamento</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-40">
        <Loader2 className="h-8 w-8 animate-spin" />
      </CardContent>
    </Card>
  )
}

