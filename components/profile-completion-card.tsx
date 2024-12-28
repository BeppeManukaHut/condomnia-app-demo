import Link from 'next/link'
import { Card } from "@/components/ui/card"
import { ArrowRight, UserCog } from 'lucide-react'

export function ProfileCompletionCard() {
  return (
    <Link href="/dashboard/settings">
      <Card className="bg-primary hover:bg-primary/90 transition-colors cursor-pointer mb-6">
        <div className="flex items-center justify-between p-4 text-primary-foreground">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white/10 rounded-full">
              <UserCog className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider opacity-90">
                Dall'amministratore
              </p>
              <h3 className="text-lg font-semibold">
                Completa la tua anagrafica
              </h3>
            </div>
          </div>
          <ArrowRight className="h-6 w-6" />
        </div>
      </Card>
    </Link>
  )
}

