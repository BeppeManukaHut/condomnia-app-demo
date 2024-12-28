"use client"

import { Button } from "@/components/ui/button"
import { RedeemModal } from "@/components/redeem-modal"
import { useState } from "react"
import Image from "next/image"

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

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg text-muted-foreground">{product.category}</p>
          <div>
            <h3 className="text-xl font-semibold mb-2">Descrizione del prodotto</h3>
            <p>{product.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Punti richiesti</h3>
            <p className="text-3xl font-bold">{product.points.toLocaleString()} punti</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="w-full md:w-auto">
            Riscatta
          </Button>
        </div>
      </div>
      <RedeemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        reward={product}
        userPoints={userPoints}
      />
    </div>
  )
}

