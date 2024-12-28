import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Gift } from 'lucide-react'

export function PointsTracker() {
  // This would be fetched from an API in a real application
  const points = 7500
  const nextRewardThreshold = 10000

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          I tuoi Punti Condomnia
        </CardTitle>
        <Gift className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{points.toLocaleString()} punti</div>
        <p className="text-xs text-muted-foreground">
          {(nextRewardThreshold - points).toLocaleString()} punti per il prossimo premio
        </p>
        <Progress
          value={(points / nextRewardThreshold) * 100}
          className="mt-2"
        />
      </CardContent>
    </Card>
  )
}

