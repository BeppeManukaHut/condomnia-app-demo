import { rewards } from "@/components/rewards-catalogue"
import { ProductPage } from "@/components/product-page"
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { BackButton } from "@/components/back-button"

export default function RewardProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id)
  const product = rewards.find(r => r.id === productId)
  const userPoints = 7500 // This would normally be fetched from an API

  if (!product) {
    return <div>Prodotto non trovato</div>
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading={product.name}
        text={`Categoria: ${product.category}`}
      />
      <div className="mt-6">
        <ProductPage product={product} userPoints={userPoints} />
      </div>
      <div className="mt-8">
        <BackButton href="/dashboard/rewards" label="Torna al catalogo" />
      </div>
    </DashboardShell>
  )
}

