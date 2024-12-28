"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileIcon, DownloadIcon, EyeIcon, XIcon } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"

const documents = [
  { id: 1, name: "Bilancio_2023.pdf", type: "PDF", size: "2.5 MB", date: "2023-05-15", content: "Questo è il bilancio del condominio per l'anno 2023. Include entrate, uscite e saldo finale." },
  { id: 2, name: "Verbale_Assemblea.docx", type: "DOCX", size: "1.8 MB", date: "2023-04-30", content: "Verbale dell'ultima assemblea condominiale, con le decisioni prese e i punti discussi." },
  { id: 3, name: "Preventivo_Lavori.xlsx", type: "XLSX", size: "3.2 MB", date: "2023-04-22", content: "Dettaglio dei costi previsti per i lavori di ristrutturazione della facciata." },
  { id: 4, name: "Regolamento_Condominio.pdf", type: "PDF", size: "1.5 MB", date: "2023-03-10", content: "Regolamento interno del condominio, con tutte le norme da rispettare." },
  { id: 5, name: "Contratto_Pulizie.pdf", type: "PDF", size: "1.2 MB", date: "2023-02-28", content: "Contratto con la ditta di pulizie, includente servizi offerti e costi." },
]

export function DocumentList() {
  const [previewDocument, setPreviewDocument] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {previewDocument && (
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Anteprima Documento</CardTitle>
              <CardDescription>
                {documents.find(doc => doc.id === previewDocument)?.name}
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setPreviewDocument(null)}>
              <XIcon className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              <p className="text-sm text-muted-foreground">
                {documents.find(doc => doc.id === previewDocument)?.content}
              </p>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
      <div className="grid gap-4">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{doc.name}</CardTitle>
              <FileIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm text-muted-foreground">
                <CardDescription>{doc.type}</CardDescription>
                <CardDescription>{doc.size}</CardDescription>
                <CardDescription>{doc.date}</CardDescription>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button variant="outline" size="sm" onClick={() => setPreviewDocument(doc.id)}>
                  <EyeIcon className="h-4 w-4 mr-2" />
                  Anteprima
                </Button>
                <Button variant="default" size="sm">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Scarica
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

