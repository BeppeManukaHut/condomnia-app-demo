import { Suspense } from 'react'
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OutstandingBills } from "@/components/outstanding-bills"
import { ComunicazioniImportanti } from "@/components/comunicazioni-importanti"
import { RecentTickets } from "@/components/recent-tickets"
import { UsefulArticles } from "@/components/useful-articles"
import { ProfileCompletionCard } from "@/components/profile-completion-card"
import DashboardLoading from "./loading"

// Set proper caching and revalidation
export const revalidate = 3600 // Revalidate every hour

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Ciao Giacomo!" 
        text="Benvenuto nella tua gestione del condominio" 
      />
      
      <Suspense fallback={<DashboardLoading />}>
        <div className="space-y-6">
          <ProfileCompletionCard />
          
          <Card>
            <CardHeader>
              <CardTitle>Pagamenti in Scadenza</CardTitle>
              <CardDescription>
                Hai 1 pagamento in scadenza.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <OutstandingBills />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comunicazioni Importanti</CardTitle>
              <CardDescription>
                Documenti e comunicazioni recenti dal tuo amministratore.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ComunicazioniImportanti />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>
                Gestisci i tuoi ticket e creane di nuovi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RecentTickets />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Articoli Utili</CardTitle>
              <CardDescription>
                Informazioni e consigli per una migliore gestione del tuo condominio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UsefulArticles />
            </CardContent>
          </Card>
        </div>
      </Suspense>
    </DashboardShell>
  )
}

