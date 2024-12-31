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
    <Card className="mx-auto max-w-md mt-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <CardTitle>Qualcosa è andato storto</CardTitle>
        </div>
        <CardDescription>
          Si è verificato un errore durante il caricamento della dashboard.
          {error.digest && (
            <span className="block mt-1">
              Codice errore: {error.digest}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => reset()}
          className="w-full"
        >
          Riprova
        </Button>
      </CardContent>
    </Card>
  )
}

