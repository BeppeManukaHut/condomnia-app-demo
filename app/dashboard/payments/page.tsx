import { Suspense } from 'react'
import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { PaymentFormWrapper } from "@/components/payment-form-wrapper"
import { BackButton } from "@/components/back-button"

export default function PaymentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Pagamenti"
        text="Effettua un nuovo pagamento o visualizza lo storico dei pagamenti."
      />
      <div className="grid gap-8">
        <Suspense fallback={<div>Caricamento...</div>}>
          <PaymentFormWrapper />
        </Suspense>
      </div>
      <div className="mt-8">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

