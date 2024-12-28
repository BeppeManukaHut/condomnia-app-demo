import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { SettingsForm } from "@/components/settings-form"
import { BackButton } from "@/components/back-button"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Impostazioni"
        text="Gestisci le tue informazioni personali e le preferenze dell'account."
      />
      <SettingsForm />
      <div className="mt-8">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

