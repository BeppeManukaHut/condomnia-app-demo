"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RedeemModal } from "@/components/redeem-modal"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import Link from "next/link"
import { Toaster } from "@/components/ui/toaster"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const categories = [
  { id: "gift-cards", name: "Gift Cards" },
  { id: "tecnologia", name: "Tecnologia" },
  { id: "ristoranti", name: "Ristoranti" },
  { id: "per-la-casa", name: "Per la casa" },
]

export const rewards = [
  { 
    id: 1, 
    name: "Amazon Gift Card €50", 
    points: 5000, 
    category: "gift-cards", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/Amazon.jpg",
    description: "Carta regalo Amazon del valore di €50. Utilizzabile per l'acquisto di milioni di prodotti su Amazon.it."
  },
  { 
    id: 2, 
    name: "Netflix Gift Card €25", 
    points: 2500, 
    category: "gift-cards", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/Netflix.jpg",
    description: "Carta regalo Netflix del valore di €25. Goditi film, serie TV e documentari in streaming."
  },
  { 
    id: 3, 
    name: "Cuffie Bluetooth", 
    points: 7500, 
    category: "tecnologia", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/Headphones.jpg",
    description: "Cuffie wireless con tecnologia Bluetooth 5.0, autonomia di 20 ore e cancellazione attiva del rumore."
  },
  { 
    id: 4, 
    name: "Powerbank 10000mAh", 
    points: 3000, 
    category: "tecnologia", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/Powerbank.jpg",
    description: "Caricabatterie portatile da 10000mAh con due porte USB, ricarica rapida e design compatto."
  },
  { 
    id: 5, 
    name: "Voucher Cena per Due", 
    points: 6000, 
    category: "ristoranti", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/Romantic%20Dinner.jpg",
    description: "Voucher per una cena romantica per due persone in un ristorante selezionato. Bevande incluse."
  },
  { 
    id: 6, 
    name: "Buono Pranzo €20", 
    points: 2000, 
    category: "ristoranti", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/Restaurant%20Voucher.jpg",
    description: "Buono pranzo del valore di €20 utilizzabile in una vasta selezione di ristoranti partner."
  },
  { 
    id: 7, 
    name: "Set Asciugamani", 
    points: 4000, 
    category: "per-la-casa", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/towels.jpg",
    description: "Set di 4 asciugamani in cotone egiziano: 2 asciugamani da bagno, 2 asciugamani viso. Morbidi e assorbenti."
  },
  { 
    id: 8, 
    name: "Lampada da Tavolo LED", 
    points: 3500, 
    category: "per-la-casa", 
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/4e28dd41133824ed77151484c7a20dda72665f6c/lamp.jpg",
    description: "Lampada da tavolo LED con 3 modalità di illuminazione, dimmerabile e con porta USB integrata per la ricarica dei dispositivi."
  },
]

export function RewardsCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id)
  const [selectedReward, setSelectedReward] = useState<typeof rewards[0] | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const userPoints = 7500 // This would normally be fetched from an API
  const { toast } = useToast()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleRedeemClick = (reward: typeof rewards[0]) => {
    setSelectedReward(reward)
    toast({
      title: "Riscatto premio",
      description: `Hai selezionato ${reward.name}. Conferma per procedere.`,
    })
  }

  const handleCloseModal = () => {
    setSelectedReward(null)
  }

  const RewardCard = ({ reward }: { reward: typeof rewards[0] }) => (
    <Card key={reward.id}>
      <CardHeader>
        <CardTitle className="text-lg">{reward.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={reward.image}
            alt={reward.name}
            width={200}
            height={200}
            className="rounded-md object-cover"
          />
        </div>
        <p className="mt-2 text-center font-semibold">
          {reward.points.toLocaleString()} punti
        </p>
        <Link href={`/dashboard/rewards/${reward.id}`} passHref>
          <Button className="w-full mt-4">
            Dettagli
          </Button>
        </Link>
      </CardContent>
    </Card>
  )

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Catalogo Premi</CardTitle>
          <CardDescription>Scegli il tuo premio preferito</CardDescription>
        </CardHeader>
        <CardContent>
          {isMobile ? (
            <div className="space-y-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleziona una categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="grid gap-4">
                {rewards
                  .filter((reward) => reward.category === selectedCategory)
                  .map((reward) => (
                    <RewardCard key={reward.id} reward={reward} />
                  ))}
              </div>
            </div>
          ) : (
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {rewards
                      .filter((reward) => reward.category === category.id)
                      .map((reward) => (
                        <RewardCard key={reward.id} reward={reward} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </CardContent>
      </Card>
      {selectedReward && (
        <RedeemModal
          isOpen={!!selectedReward}
          onClose={handleCloseModal}
          reward={selectedReward}
          userPoints={userPoints}
        />
      )}
      <Toaster />
    </>
  )
}

