import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChronologicalDocuments } from "@/components/chronological-documents"
import { SubfolderDocuments } from "@/components/subfolder-documents"
import { BackButton } from "@/components/back-button"

export default function DocumentsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Documenti"
        text="Visualizza e scarica i documenti disponibili."
      />
      <Tabs defaultValue="chronological" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chronological">Cronologico</TabsTrigger>
          <TabsTrigger value="subfolder">Cartelle</TabsTrigger>
        </TabsList>
        <TabsContent value="chronological">
          <ChronologicalDocuments />
        </TabsContent>
        <TabsContent value="subfolder">
          <SubfolderDocuments />
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

