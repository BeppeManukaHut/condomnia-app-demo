import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { DocumentList } from "@/components/document-list"
import { BackButton } from "@/components/back-button"

export default function DocumentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Documenti"
        text="Visualizza e scarica i documenti disponibili."
      />
      <DocumentList />
      <div className="mt-8">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

