import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, PiggyBank, Gift } from 'lucide-react'

const steps = [
  {
    icon: CreditCard,
    title: "Paga le spese condominiali con Condomnia",
    description: "Utilizza Condomnia per effettuare i tuoi pagamenti condominiali in modo semplice e sicuro."
  },
  {
    icon: PiggyBank,
    title: "Accumula il tuo saldo punti",
    description: "Guadagna 1 punto per ogni euro speso. I punti si accumulano automaticamente nel tuo saldo Punti Condomnia."
  },
  {
    icon: Gift,
    title: "Riscatta fantastici premi",
    description: "Usa i tuoi punti per ottenere gratuitamente incredibili ricompense dal nostro catalogo."
  }
]

export function PuntiCondomniaExplainer() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <Card key={index} className="flex flex-col items-center text-center p-6">
          <CardContent className="pt-6">
            <div className="mb-4 rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mx-auto">
              <step.icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

