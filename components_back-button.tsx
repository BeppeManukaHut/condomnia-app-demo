import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'

interface BackButtonProps {
  href: string
  label: string
}

export function BackButton({ href, label }: BackButtonProps) {
  return (
    <Link href={href}>
      <Button variant="outline" size="sm">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {label}
      </Button>
    </Link>
  )
}

