'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Dashboard Error:', error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <CardTitle>Si è verificato un errore</CardTitle>
          </div>
          <CardDescription>
            Si è verificato un errore durante il caricamento della dashboard.
            {error.digest && (
              <span className="block mt-1 font-mono text-xs">
                Codice errore: {error.digest}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Stiamo lavorando per risolvere il problema. Riprova tra qualche istante.
          </p>
          <Button
            onClick={() => reset()}
            className="w-full"
          >
            Riprova
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

