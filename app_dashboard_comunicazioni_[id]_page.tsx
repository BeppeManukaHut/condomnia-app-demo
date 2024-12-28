import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, AlertCircle, FileText, Bell } from 'lucide-react'
import { BackButton } from "@/components/back-button"

// This is dummy data. In a real application, you would fetch this data based on the ID.
const comunicazione = {
  id: "1",
  category: "URGENTE",
  title: "Interruzione servizio acqua per manutenzione straordinaria",
  date: "2 Gennaio 2024",
  priority: true,
  description: "Intervento programmato dalle 9:00 alle 14:00",
  content: "Gentili condomini, si comunica che il giorno 5 Gennaio 2024 sarà necessario interrompere l'erogazione dell'acqua per effettuare lavori di manutenzione straordinaria all'impianto idrico del condominio. L'interruzione è prevista dalle ore 9:00 alle ore 14:00. Si prega di prendere le necessarie precauzioni e di limitare l'uso dell'acqua nelle ore precedenti l'intervento. Ci scusiamo per il disagio e ringraziamo per la collaborazione.",
}

const categoryIcons = {
  CONDOMINIO: FileText,
  AMMINISTRAZIONE: FileText,
  URGENTE: AlertCircle,
  ASSEMBLEA: Bell
}

const categoryColors = {
  CONDOMINIO: "text-primary",
  AMMINISTRAZIONE: "text-blue-500",
  URGENTE: "text-red-500",
  ASSEMBLEA: "text-orange-500"
}

export default function ComunicazionePage({ params }: { params: { id: string } }) {
  const IconComponent = categoryIcons[comunicazione.category as keyof typeof categoryIcons]
  const categoryColor = categoryColors[comunicazione.category as keyof typeof categoryColors]

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dettaglio Comunicazione"
        text="Visualizza i dettagli completi della comunicazione."
      />
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <IconComponent className={`h-5 w-5 ${categoryColor}`} />
            <span className={`text-sm font-medium ${categoryColor}`}>
              {comunicazione.category}
            </span>
            {comunicazione.priority && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                Priorità alta
              </span>
            )}
          </div>
          <CardTitle>{comunicazione.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              {comunicazione.date}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {comunicazione.description && (
            <p className="text-muted-foreground mb-4">{comunicazione.description}</p>
          )}
          <div className="prose max-w-none">
            <p>{comunicazione.content}</p>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

