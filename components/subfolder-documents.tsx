"use client"

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileIcon, DownloadIcon, EyeIcon, FolderIcon, ChevronRight, CalendarIcon } from 'lucide-react'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const folders = [
  {
    name: "Bilanci",
    documents: [
      { id: 1, name: "Bilancio_2023.pdf", type: "PDF", size: "2.5 MB", date: "2023-12-15", year: 2023 },
      { id: 6, name: "Bilancio_Previsionale_2024.pdf", type: "PDF", size: "2.1 MB", date: "2023-10-15", year: 2023 },
      { id: 9, name: "Bilancio_2022.pdf", type: "PDF", size: "2.3 MB", date: "2022-12-20", year: 2022 },
    ]
  },
  {
    name: "Verbali",
    documents: [
      { id: 2, name: "Verbale_Assemblea_Ordinaria.docx", type: "DOCX", size: "1.8 MB", date: "2023-11-30", year: 2023 },
      { id: 7, name: "Verbale_Assemblea_Straordinaria.docx", type: "DOCX", size: "2.0 MB", date: "2023-09-30", year: 2023 },
      { id: 10, name: "Verbale_Assemblea_Ordinaria_2022.docx", type: "DOCX", size: "1.7 MB", date: "2022-11-25", year: 2022 },
    ]
  },
  {
    name: "Preventivi",
    documents: [
      { id: 3, name: "Preventivo_Lavori_Facciata.xlsx", type: "XLSX", size: "3.2 MB", date: "2023-11-22", year: 2023 },
      { id: 8, name: "Preventivo_Manutenzione_Ascensori.xlsx", type: "XLSX", size: "2.8 MB", date: "2023-09-22", year: 2023 },
      { id: 11, name: "Preventivo_Rifacimento_Tetto.xlsx", type: "XLSX", size: "3.0 MB", date: "2022-08-15", year: 2022 },
    ]
  },
  {
    name: "Regolamenti",
    documents: [
      { id: 4, name: "Regolamento_Condominio_2024.pdf", type: "PDF", size: "1.5 MB", date: "2023-11-10", year: 2023 },
      { id: 12, name: "Regolamento_Condominio_2022.pdf", type: "PDF", size: "1.4 MB", date: "2022-01-05", year: 2022 },
    ]
  },
  {
    name: "Contratti",
    documents: [
      { id: 5, name: "Contratto_Pulizie.pdf", type: "PDF", size: "1.2 MB", date: "2023-10-28", year: 2023 },
      { id: 13, name: "Contratto_Manutenzione_Giardino.pdf", type: "PDF", size: "1.1 MB", date: "2022-03-15", year: 2022 },
    ]
  },
]

export function SubfolderDocuments() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  const renderDocument = (doc: any) => (
    <Card key={doc.id}>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <FileIcon className="h-8 w-8 text-blue-500" />
          <div>
            <p className="font-medium">{doc.name}</p>
            <p className="text-sm text-muted-foreground">{doc.type} • {doc.size} • {doc.date}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Link href={`/dashboard/documents/${doc.id}`} passHref>
            <Button variant="outline" size="sm">
              <EyeIcon className="h-4 w-4 mr-2" />
              Visualizza
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Scarica
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderYearlyDocuments = (documents: any[]) => {
    const groupedByYear = documents.reduce((acc, doc) => {
      (acc[doc.year] = acc[doc.year] || []).push(doc);
      return acc;
    }, {});

    return (
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(groupedByYear).sort(([a], [b]) => Number(b) - Number(a)).map(([year, docs]) => (
          <AccordionItem value={year} key={year}>
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                {year}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 mt-2">
                {(docs as any[]).map(renderDocument)}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  return (
    <div>
      {selectedFolder ? (
        <div>
          <Button variant="ghost" onClick={() => setSelectedFolder(null)} className="mb-4">
            <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
            Torna alle cartelle
          </Button>
          <h2 className="text-2xl font-bold mb-4">{selectedFolder}</h2>
          {renderYearlyDocuments(folders.find(f => f.name === selectedFolder)?.documents || [])}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <Card key={folder.name} className="cursor-pointer hover:bg-accent" onClick={() => setSelectedFolder(folder.name)}>
              <CardContent className="flex items-center p-4">
                <FolderIcon className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <p className="font-medium">{folder.name}</p>
                  <p className="text-sm text-muted-foreground">{folder.documents.length} documenti</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

