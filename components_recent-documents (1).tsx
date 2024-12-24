"use client"

import { FileIcon, MoreHorizontal, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function RecentDocuments() {
  const documents = [
    {
      id: "1",
      name: "Bilancio_2023.pdf",
      date: "2023-04-15",
    },
    {
      id: "2",
      name: "Verbale_Assemblea.docx",
      date: "2023-04-14",
    },
    {
      id: "3",
      name: "Preventivo_Lavori.xlsx",
      date: "2023-04-13",
    },
  ]

  const handleDownload = (documentName: string) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading ${documentName}`)
    alert(`Downloading ${documentName}`)
  }

  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center">
          <FileIcon className="h-6 w-6 mr-2" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{doc.name}</p>
            <p className="text-sm text-muted-foreground">{doc.date}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleDownload(doc.name)}>
                <Download className="mr-2 h-4 w-4" />
                <span>Download</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}

