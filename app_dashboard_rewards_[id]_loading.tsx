import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"

export default function ProductLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading={<Skeleton className="h-8 w-[200px]" />}
        text={<Skeleton className="h-4 w-[100px]" />}
      />
      <div className="mt-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Skeleton className="w-full aspect-square rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-24 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-8 w-1/4" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

