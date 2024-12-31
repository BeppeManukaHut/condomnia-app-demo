import { Suspense } from 'react'
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OutstandingBills } from "@/components/outstanding-bills"
import { ComunicazioniImportanti } from "@/components/comunicazioni-importanti"
import { RecentTickets } from "@/components/recent-tickets"
import { UsefulArticles } from "@/components/useful-articles"
import { ProfileCompletionCard } from "@/components/profile-completion-card"
import { ErrorBoundary } from "@/components/error-boundary"
import DashboardLoading from "./loading"

// Mark as dynamic to prevent static optimization issues
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default function DashboardPage() {
  return (
    <DashboardShell>
      <Suspense fallback={<DashboardLoading />}>
        <div className="space-y-6">
          <DashboardHeader 
            heading="Ciao Giacomo!" 
            text="Benvenuto nella tua gestione del condominio" 
          />
          
          <ErrorBoundary>
            <Suspense fallback={<div className="animate-pulse h-24 bg-muted rounded-lg" />}>
              <ProfileCompletionCard />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Suspense fallback={
              <Card>
                <CardHeader>
                  <div className="animate-pulse h-6 w-48 bg-muted rounded mb-2" />
                  <div className="animate-pulse h-4 w-64 bg-muted rounded" />
                </CardHeader>
                <CardContent>
                  <div className="animate-pulse h-32 bg-muted rounded" />
                </CardContent>
              </Card>
            }>
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
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={
              <Card>
                <CardHeader>
                  <div className="animate-pulse h-6 w-48 bg-muted rounded mb-2" />
                  <div className="animate-pulse h-4 w-64 bg-muted rounded" />
                </CardHeader>
                <CardContent>
                  <div className="animate-pulse h-32 bg-muted rounded" />
                </CardContent>
              </Card>
            }>
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
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={
              <Card>
                <CardHeader>
                  <div className="animate-pulse h-4 w-64 bg-muted rounded" />
                </CardHeader>
                <CardContent>
                  <div className="animate-pulse h-32 bg-muted rounded" />
                </CardContent>
              </Card>
            }>
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
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={
              <Card>
                <CardHeader>
                  <div className="animate-pulse h-6 w-48 bg-muted rounded mb-2" />
                  <div className="animate-pulse h-4 w-64 bg-muted rounded" />
                </CardHeader>
                <CardContent>
                  <div className="animate-pulse h-32 bg-muted rounded" />
                </CardContent>
              </Card>
            }>
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
            </Suspense>
          </ErrorBoundary>
        </div>
      </Suspense>
    </DashboardShell>
  )
}

