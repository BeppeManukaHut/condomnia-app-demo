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
  console.log("Rendering RewardProductPage with params:", params); // Debug log

  const productId = parseInt(params.id)
  
  console.log("Parsed productId:", productId); // Debug log

  // Validate productId is a number
  if (isNaN(productId)) {
    console.log("Invalid productId, calling notFound()"); // Debug log
    notFound()
  }

  // Find the product
  const product = rewards.find(r => r.id === productId)
  
  console.log("Found product:", product); // Debug log

  // If product doesn't exist, show 404
  if (!product) {
    console.log("Product not found, calling notFound()"); // Debug log
    notFound()
  }

  // This would normally be fetched from an API
  const userPoints = 7500 

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

