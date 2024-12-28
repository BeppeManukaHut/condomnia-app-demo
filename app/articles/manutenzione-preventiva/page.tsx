import { ArticleContent } from "@/components/article-content"
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { BackButton } from "@/components/back-button"

const article = {
  title: "Manutenzione preventiva: perché è importante",
  image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/beef7c201cf9402f85103fab617242ec22994830/manutenzione.jpg",
  content: `La manutenzione preventiva è un aspetto cruciale nella gestione di un condominio, spesso sottovalutato ma di fondamentale importanza. Questo approccio proattivo alla cura dell'edificio non solo previene costose riparazioni d'emergenza, ma contribuisce anche a mantenere e aumentare il valore della proprietà nel tempo. Un programma di manutenzione regolare permette di identificare e risolvere piccoli problemi prima che si trasformino in guasti maggiori, risparmiando tempo e denaro a lungo termine. Ad esempio, la pulizia regolare delle grondaie può prevenire infiltrazioni d'acqua e danni strutturali ben più costosi da riparare.

  Un altro vantaggio significativo della manutenzione preventiva è il miglioramento della sicurezza e del comfort per tutti i residenti. Controlli regolari degli impianti elettrici, del gas e dell'ascensore non solo prevengono incidenti potenzialmente pericolosi, ma assicurano anche un funzionamento ottimale di questi servizi essenziali. La manutenzione regolare degli spazi comuni, come giardini e aree ricreative, contribuisce a creare un ambiente piacevole e accogliente, aumentando la qualità della vita dei condomini e il senso di comunità.

  Per implementare un efficace programma di manutenzione preventiva, è essenziale sviluppare un piano dettagliato che copra tutti gli aspetti dell'edificio. Questo dovrebbe includere ispezioni periodiche di strutture, impianti e aree comuni, con una chiara calendarizzazione degli interventi necessari. Coinvolgere professionisti qualificati per le ispezioni e gli interventi specializzati è fondamentale per garantire risultati ottimali. Inoltre, mantenere una documentazione accurata di tutte le attività di manutenzione aiuta a tracciare la storia dell'edificio e a pianificare future azioni. Infine, comunicare regolarmente con i condomini riguardo alle attività di manutenzione in corso e pianificate aumenta la trasparenza e la fiducia nella gestione del condominio.`
}

export default function ManutenzionePreventivePage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading={article.title}
        text="Scopri come la manutenzione regolare può migliorare la qualità della vita nel tuo condominio"
      />
      <ArticleContent {...article} />
      <div className="mt-6">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

