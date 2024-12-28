import { HomeIcon } from 'lucide-react'

export function AppIcon({ className }: { className?: string }) {
  return (
    <div className={`bg-primary p-2 rounded-xl ${className}`}>
      <HomeIcon className="w-full h-full text-primary-foreground" />
    </div>
  )
}

