"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RedeemModal } from "@/components/redeem-modal"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductPageProps {
  product: {
    id: number
    name: string
    points: number
    category: string
    image: string
    description: string
  }
  userPoints: number
}

export function ProductPage({ product, userPoints }: ProductPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const canRedeem = userPoints >= product.points

  return (
    <div className="w-full space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <Badge className="mb-2">{product.category}</Badge>
                <h2 className="text-3xl font-bold">{product.name}</h2>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Descrizione</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Punti richiesti</h3>
                <p className="text-3xl font-bold">{product.points.toLocaleString()} punti</p>
                {!canRedeem && (
                  <p className="text-sm text-destructive mt-2">
                    Ti mancano {(product.points - userPoints).toLocaleString()} punti per riscattare questo premio
                  </p>
                )}
              </div>
              
              <Button 
                onClick={() => setIsModalOpen(true)} 
                className="w-full md:w-auto"
                disabled={!canRedeem}
              >
                {canRedeem ? 'Riscatta' : 'Punti insufficienti'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <RedeemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reward={product}
        userPoints={userPoints}
      />
    </div>
  )
}

