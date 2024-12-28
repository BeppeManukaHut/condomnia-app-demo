import { DashboardNav } from "@/components/dashboard-nav"
import { cn } from "@/lib/utils"

interface DashboardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <DashboardNav className="w-full lg:w-64" />
      <main className={cn("flex-1 overflow-x-hidden p-4 lg:p-8", className)} {...props}>
        {children}
      </main>
    </div>
  )
}

