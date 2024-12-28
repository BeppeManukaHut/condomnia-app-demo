"use client"

import { Calendar } from 'lucide-react'
import Link from 'next/link'

const documents = [
  {
    id: "1",
    category: "CONDOMINIO",
    title: "Chiusura preventivo n. 156 su rielaborazione millesimi",
    date: "31 Dicembre 2023",
  },
  {
    id: "2",
    category: "CONDOMINIO",
    title: "Verbale assemblea straordinaria lavori facciata",
    date: "28 Dicembre 2023",
  },
  {
    id: "3",
    category: "AMMINISTRAZIONE",
    title: "Aggiornamento tabelle millesimali 2024",
    date: "27 Dicembre 2023",
  },
]

export function RecentDocuments() {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <Link key={doc.id} href={`/dashboard/documents/${doc.id}`}>
          <div className="p-4 hover:bg-muted/50 rounded-lg transition-colors">
            <div className="text-primary text-sm font-medium mb-1">{doc.category}</div>
            <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              {doc.date}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

