import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

interface RedeemModalProps {
  isOpen: boolean
  onClose: () => void
  reward: {
    name: string
    points: number
    image: string
  }
  userPoints: number
}

export function RedeemModal({ isOpen, onClose, reward, userPoints }: RedeemModalProps) {
  const [isRedeeming, setIsRedeeming] = useState(false)
  const { toast } = useToast()

  const handleRedeem = async () => {
    setIsRedeeming(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsRedeeming(false)
    onClose()
    toast({
      title: "Premio riscattato con successo!",
      description: `Hai riscattato ${reward.name} per ${reward.points} punti.`,
    })
  }

  const canRedeem = userPoints >= reward.points

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Conferma Riscatto Premio</DialogTitle>
          <DialogDescription>
            Sei sicuro di voler riscattare questo premio?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <img
              src={reward.image}
              alt={reward.name}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <h4 className="font-semibold">{reward.name}</h4>
              <p className="text-sm text-muted-foreground">{reward.points} punti</p>
            </div>
          </div>
          <div className="text-sm">
            {canRedeem ? (
              <p className="text-green-600">
                Hai abbastanza punti per riscattare questo premio.
              </p>
            ) : (
              <p className="text-red-600">
                Non hai abbastanza punti per riscattare questo premio.
                Ti mancano {reward.points - userPoints} punti.
              </p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Annulla
          </Button>
          <Button onClick={handleRedeem} disabled={!canRedeem || isRedeeming}>
            {isRedeeming ? "Riscatto in corso..." : "Conferma Riscatto"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

