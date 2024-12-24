import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Lightbulb, LineChart, Smartphone, HomeIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Updated Header with more minimal, housing-related icon */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <HomeIcon className="h-6 w-6 text-[#bb78ff] mr-2" />
          <h1 className="text-2xl font-bold text-[#bb78ff]">Condomnia App</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl lg:text-3xl text-[#2d1846] leading-relaxed text-center mb-16 font-bold">
            Semplifica la gestione del tuo condominio con comunicazioni veloci, spese trasparenti e riunioni più serene, grazie al team di supporto disponibile 24/7 e a portata di click.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Lightbulb className="h-12 w-12 text-[#bb78ff]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d1846] mb-2">Meno stress amministrativo</h3>
            <p className="text-[#2d1846]">Gestisci il tuo condominio con facilità e tranquillità.</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <LineChart className="h-12 w-12 text-[#bb78ff]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d1846] mb-2">Trasparenza ed efficienza</h3>
            <p className="text-[#2d1846]">Monitora spese e attività in modo chiaro e dettagliato.</p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Smartphone className="h-12 w-12 text-[#bb78ff]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2d1846] mb-2">Disponibile su sito web e App</h3>
            <p className="text-[#2d1846]">Accedi alle informazioni ovunque tu sia, in qualsiasi momento.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/dashboard">
            <Button className="bg-[#2d1846] hover:bg-[#2d1846]/90 text-white text-lg px-8 py-6 h-auto">
              Entra nella demo
            </Button>
          </Link>
        </div>

        <div className="mt-16 text-center text-sm text-[#2d1846]">
          <p>
            Questa demo è ad accesso limitato e riservata solo agli invitati. Tutti i contenuti, il design e le funzionalità
            presentati sono di proprietà intellettuale di Condomnia. È vietata qualsiasi riproduzione o utilizzo non autorizzato.
          </p>
        </div>
      </main>
    </div>
  )
}

