import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, AlertCircle, FileText, Bell } from 'lucide-react'
import Link from 'next/link'

interface CommunicationPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  communication: {
    id: string
    category: 'CONDOMINIO' | 'AMMINISTRAZIONE' | 'URGENTE' | 'ASSEMBLEA'
    title: string
    date: string
    priority?: boolean
    description?: string
    content: string
  }
}

const categoryIcons = {
  CONDOMINIO: FileText,
  AMMINISTRAZIONE: FileText,
  URGENTE: AlertCircle,
  ASSEMBLEA: Bell
}

const categoryColors = {
  CONDOMINIO: "text-primary",
  AMMINISTRAZIONE: "text-blue-500",
  URGENTE: "text-red-500",
  ASSEMBLEA: "text-orange-500"
}

export function CommunicationPreviewModal({ isOpen, onClose, communication }: CommunicationPreviewModalProps) {
  const IconComponent = categoryIcons[communication.category]
  const categoryColor = categoryColors[communication.category]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <IconComponent className={`h-5 w-5 ${categoryColor}`} />
            <span className={categoryColor}>{communication.category}</span>
            {communication.priority && (
              <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
                Priorità alta
              </span>
            )}
          </DialogTitle>
          <DialogDescription className="text-xl font-semibold pt-2">
            {communication.title}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          {communication.date}
        </div>
        <div className="space-y-4">
          {communication.description && (
            <p className="text-muted-foreground">{communication.description}</p>
          )}
          <p className="text-sm leading-relaxed">{communication.content}</p>
        </div>
        <div className="flex justify-end mt-6">
          <Link href={`/dashboard/comunicazioni/${communication.id}`} passHref>
            <Button>Vedi dettagli completi</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

