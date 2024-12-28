import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileIcon, DownloadIcon, EyeIcon } from 'lucide-react'
import Link from 'next/link'

const documents = [
  { id: 1, name: "Bilancio_2023.pdf", type: "PDF", size: "2.5 MB", date: "2023-12-15", category: "Bilanci" },
  { id: 2, name: "Verbale_Assemblea_Ordinaria.docx", type: "DOCX", size: "1.8 MB", date: "2023-11-30", category: "Verbali" },
  { id: 3, name: "Preventivo_Lavori_Facciata.xlsx", type: "XLSX", size: "3.2 MB", date: "2023-11-22", category: "Preventivi" },
  { id: 4, name: "Regolamento_Condominio_2024.pdf", type: "PDF", size: "1.5 MB", date: "2023-11-10", category: "Regolamenti" },
  { id: 5, name: "Contratto_Pulizie.pdf", type: "PDF", size: "1.2 MB", date: "2023-10-28", category: "Contratti" },
  { id: 6, name: "Bilancio_Previsionale_2024.pdf", type: "PDF", size: "2.1 MB", date: "2023-10-15", category: "Bilanci" },
  { id: 7, name: "Verbale_Assemblea_Straordinaria.docx", type: "DOCX", size: "2.0 MB", date: "2023-09-30", category: "Verbali" },
  { id: 8, name: "Preventivo_Manutenzione_Ascensori.xlsx", type: "XLSX", size: "2.8 MB", date: "2023-09-22", category: "Preventivi" },
]

export function ChronologicalDocuments() {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
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
      ))}
    </div>
  )
}

