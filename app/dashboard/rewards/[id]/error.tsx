'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Product page error:', error)
  }, [error])

  return (
    <Card className="mx-auto max-w-md mt-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <CardTitle>Si è verificato un errore</CardTitle>
        </div>
        <CardDescription>
          Non è stato possibile caricare i dettagli del premio.
          {error.digest && (
            <span className="block mt-1 font-mono text-xs text-muted-foreground">
              Codice errore: {error.digest}
            </span>
          )}
          <span className="block mt-1 font-mono text-xs text-muted-foreground">
            Messaggio errore: {error.message}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button onClick={reset} className="w-full">
          Riprova
        </Button>
        <Link href="/dashboard/rewards">
          <Button variant="outline" className="w-full">
            Torna al catalogo
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

