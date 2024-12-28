import { DashboardHeader } from "@/components/dashboard-header"
import DashboardShell from "@/components/dashboard-shell"
import { ContactForm } from "@/components/contact-form"
import { LiveChat } from "@/components/live-chat"
import { PhoneContact } from "@/components/phone-contact"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackButton } from "@/components/back-button"

export default function ContactPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Contattaci"
        text="Siamo qui per aiutarti. Scegli il metodo di contatto che preferisci."
      />
      <Tabs defaultValue="email" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="chat">Live Chat</TabsTrigger>
          <TabsTrigger value="phone">Telefono</TabsTrigger>
        </TabsList>
        <TabsContent value="email">
          <ContactForm />
        </TabsContent>
        <TabsContent value="chat">
          <LiveChat />
        </TabsContent>
        <TabsContent value="phone">
          <PhoneContact />
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

