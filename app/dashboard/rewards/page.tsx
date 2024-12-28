import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { PointsTracker } from "@/components/points-tracker"
import { RewardsCatalogue } from "@/components/rewards-catalogue"
import { PuntiCondomniaExplainer } from "@/components/punti-condomnia-explainer"
import { BackButton } from "@/components/back-button"
import { Separator } from "@/components/ui/separator"

export default function RewardsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Programma Fedeltà Condomnia"
        text="Accumula punti e riscatta fantastici premi"
      />
      <div className="space-y-8">
        <PointsTracker />
        <RewardsCatalogue />
        <Separator className="my-8" />
        <PuntiCondomniaExplainer />
      </div>
      <div className="mt-8">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

