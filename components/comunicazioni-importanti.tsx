"use client"

import { useState } from 'react'
import { Calendar, FileText, AlertCircle, Bell, FileCheck, Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CommunicationPreviewModal } from "@/components/communication-preview-modal"

type CommunicationType = 'CONDOMINIO' | 'AMMINISTRAZIONE' | 'URGENTE' | 'ASSEMBLEA'

interface Comunicazione {
  id: string
  category: CommunicationType
  title: string
  date: string
  description?: string
  read: boolean
  content?: string;
}

const initialComunicazioni: Comunicazione[] = [
  {
    id: "1",
    category: "URGENTE",
    title: "Interruzione servizio acqua per manutenzione straordinaria",
    date: "2 Gennaio 2024",
    description: "Intervento programmato dalle 9:00 alle 14:00",
    read: false,
    content: "Contenuto completo della comunicazione 1..."
  },
  {
    id: "2",
    category: "CONDOMINIO",
    title: "Chiusura preventivo n. 156 su rielaborazione millesimi",
    date: "31 Dicembre 2023",
    description: "Approvazione del preventivo in assemblea",
    read: false,
    content: "Contenuto completo della comunicazione 2..."
  },
  {
    id: "3",
    category: "ASSEMBLEA",
    title: "Convocazione assemblea ordinaria",
    date: "28 Dicembre 2023",
    description: "Prima convocazione: 15 Gennaio 2024",
    read: true,
    content: "Contenuto completo della comunicazione 3..."
  },
  {
    id: "4",
    category: "AMMINISTRAZIONE",
    title: "Aggiornamento tabelle millesimali 2024",
    date: "27 Dicembre 2023",
    description: "Nuove tabelle in vigore dal 1° Gennaio",
    read: true,
    content: "Contenuto completo della comunicazione 4..."
  }
]

const categoryIcons = {
  CONDOMINIO: FileText,
  AMMINISTRAZIONE: FileCheck,
  URGENTE: AlertCircle,
  ASSEMBLEA: Bell
}

const categoryColors = {
  CONDOMINIO: "text-primary",
  AMMINISTRAZIONE: "text-blue-500",
  URGENTE: "text-red-500",
  ASSEMBLEA: "text-orange-500"
}

export function ComunicazioniImportanti() {
  const [comunicazioni, setComunicazioni] = useState<Comunicazione[]>(initialComunicazioni)
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all')
  const [selectedCommunication, setSelectedCommunication] = useState<Comunicazione | null>(null)

  const filteredComunicazioni = comunicazioni.filter(com => {
    if (filter === 'unread') return !com.read
    if (filter === 'read') return com.read
    return true
  })

  const toggleRead = (id: string) => {
    setComunicazioni(prevComunicazioni =>
      prevComunicazioni.map(com =>
        com.id === id ? { ...com, read: !com.read } : com
      )
    )
  }

  const openPreviewModal = (communication: Comunicazione) => {
    setSelectedCommunication(communication)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Select onValueChange={(value: 'all' | 'unread' | 'read') => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtra per" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tutte</SelectItem>
            <SelectItem value="unread">Non lette</SelectItem>
            <SelectItem value="read">Lette</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        {filteredComunicazioni.map((comunicazione) => {
          const IconComponent = categoryIcons[comunicazione.category]
          const categoryColor = categoryColors[comunicazione.category]

          return (
            <div key={comunicazione.id} className="p-4 hover:bg-muted/50 rounded-lg transition-colors flex justify-between items-start">
              <Link href={`/dashboard/comunicazioni/${comunicazione.id}`} className="flex-grow">
                <div className="relative mb-2">
                  <div className="flex items-center gap-2">
                    <IconComponent className={`h-4 w-4 ${categoryColor}`} />
                    <span className={`text-sm font-medium ${categoryColor}`}>
                      {comunicazione.category}
                    </span>
                  </div>
                </div>
                <h3 className={`text-lg ${comunicazione.read ? 'font-normal' : 'font-semibold'} mb-1`}>
                  {comunicazione.title}
                </h3>
                {comunicazione.description && (
                  <p className="text-muted-foreground text-sm mb-2">
                    {comunicazione.description}
                  </p>
                )}

                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{comunicazione.date}</span>
                </div>
              </Link>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openPreviewModal(comunicazione)}
                >
                  Anteprima
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleRead(comunicazione.id)}
                  className="ml-2"
                >
                  <Check className={`h-4 w-4 ${comunicazione.read ? 'text-primary' : 'text-muted-foreground'}`} />
                </Button>
              </div>
            </div>
          )
        })}
      </div>
      {selectedCommunication && (
        <CommunicationPreviewModal
          isOpen={!!selectedCommunication}
          onClose={() => setSelectedCommunication(null)}
          communication={{
            ...selectedCommunication,
            content: selectedCommunication.content // Replace with actual content
          }}
        />
      )}
    </div>
  )
}

