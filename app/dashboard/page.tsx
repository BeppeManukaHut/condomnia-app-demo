import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OutstandingBills } from "@/components/outstanding-bills"
import { ComunicazioniImportanti } from "@/components/comunicazioni-importanti"
import { RecentTickets } from "@/components/recent-tickets"
import { UsefulArticles } from "@/components/useful-articles"
import { ProfileCompletionCard } from "@/components/profile-completion-card"

// Mark the page as dynamic to avoid static generation issues
export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Ciao Giacomo!" text="Benvenuto nella tua gestione del condominio" />
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
      <div className="mt-4">
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
      </div>
      <div className="mt-4">
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
      </div>
      <div className="mt-4">
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
    </DashboardShell>
  )
}

