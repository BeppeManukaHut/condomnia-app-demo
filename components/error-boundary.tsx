'use client'

import { Component, ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error) {
    console.error('Error caught by error boundary:', error)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <CardTitle>Si è verificato un errore</CardTitle>
            </div>
            <CardDescription>
              Si è verificato un errore durante il caricamento di questa sezione.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button
              onClick={() => this.setState({ hasError: false })}
              className="w-full"
            >
              Riprova
            </Button>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}

