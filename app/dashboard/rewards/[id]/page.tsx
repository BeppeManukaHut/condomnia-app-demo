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
  console.log("Rendering RewardProductPage with params:", params);

  if (!params || !params.id) {
    console.error("Invalid params or missing id");
    notFound();
  }

  const productId = parseInt(params.id, 10);
  console.log("Parsed productId:", productId);

  if (isNaN(productId)) {
    console.error("Invalid productId, not a number");
    notFound();
  }

  const product = rewards.find(r => r.id === productId);
  console.log("Found product:", product);

  if (!product) {
    console.error("Product not found");
    notFound();
  }

  // This would normally be fetched from an API
  const userPoints = 7500;

  try {
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
    );
  } catch (error) {
    console.error("Error rendering RewardProductPage:", error);
    throw error; // Re-throw the error to be caught by the error boundary
  }
}

