import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PackageX } from 'lucide-react'
import Link from "next/link"

export default function NotFound() {
  return (
    <Card className="mx-auto max-w-md mt-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <PackageX className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Premio non trovato</CardTitle>
        </div>
        <CardDescription>
          Il premio che stai cercando non è disponibile o potrebbe essere stato rimosso dal catalogo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href="/dashboard/rewards">
          <Button className="w-full">
            Torna al catalogo
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

