import { rewards } from "@/components/rewards-catalogue"
import { ProductPage } from "@/components/product-page"
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { BackButton } from "@/components/back-button"
import { notFound } from "next/navigation"

interface RewardProductPageProps {
  params: {
    id: string
  }
}

export default function RewardProductPage({ params }: RewardProductPageProps) {
  const productId = parseInt(params.id)
  const product = rewards.find(r => r.id === productId)
  const userPoints = 7500 // This would normally be fetched from an API

  if (!product || isNaN(productId)) {
    notFound()
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading={product.name}
        text={`${product.points.toLocaleString()} punti`}
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

