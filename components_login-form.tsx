"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { HomeIcon } from 'lucide-react'

export function LoginForm() {
  const [username, setUsername] = useState("giacomo.boggi@condomnia.it")
  const [password, setPassword] = useState("password123")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would validate the credentials here
    // For this demo, we'll just redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <HomeIcon className="h-8 w-8 text-primary mr-2" />
          <CardTitle className="text-2xl text-center">Condomnia App</CardTitle>
        </div>
        <CardDescription className="text-center">
          Accedi alla tua gestione condominiale
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Nome utente</Label>
              <Input 
                id="username" 
                placeholder="Il tuo nome utente" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="La tua password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full" onClick={handleSubmit}>
          Accedi
        </Button>
        <div className="mt-4 text-center">
          <Link href="/forgot-password" className="text-sm text-primary hover:underline">
            Password dimenticata?
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

