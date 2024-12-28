import { ArticleContent } from "@/components/article-content"
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { BackButton } from "@/components/back-button"

const article = {
  title: "Gestione dei rifiuti: best practices",
  image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/beef7c201cf9402f85103fab617242ec22994830/Rifiuti.jpg",
  content: `Una gestione efficiente dei rifiuti in condominio non solo contribuisce a un ambiente più pulito e salubre, ma può anche ridurre i costi di smaltimento. La chiave per una raccolta differenziata di successo è l'educazione e la sensibilizzazione di tutti i condomini. Organizzare incontri informativi e distribuire guide chiare sulla corretta separazione dei rifiuti può fare la differenza. È importante spiegare i benefici ambientali ed economici della raccolta differenziata, motivando così i residenti a partecipare attivamente.

  L'organizzazione degli spazi dedicati alla raccolta dei rifiuti è fondamentale. Creare un'area ben strutturata e facilmente accessibile, con contenitori chiaramente etichettati per ogni tipo di rifiuto, rende la differenziazione più semplice e intuitiva. Considerare l'installazione di compattatori per ridurre il volume dei rifiuti, specialmente per materiali come plastica e cartone, può ottimizzare lo spazio e ridurre la frequenza di svuotamento dei contenitori. Inoltre, promuovere il compostaggio dei rifiuti organici, se possibile, può ridurre significativamente la quantità di rifiuti da smaltire.

  Implementare un sistema di monitoraggio e feedback può aiutare a migliorare costantemente le pratiche di gestione dei rifiuti. Tenere traccia delle quantità di rifiuti prodotti e riciclati può fornire dati utili per identificare aree di miglioramento. Organizzare sfide o competizioni amichevoli tra i condomini per incentivare la raccolta differenziata può aumentare l'engagement. Infine, collaborare con le autorità locali e le aziende di gestione dei rifiuti può portare a soluzioni innovative e personalizzate per le esigenze specifiche del condominio, come la raccolta porta a porta o l'installazione di isole ecologiche intelligenti.`
}

export default function GestioneRifiutiPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading={article.title}
        text="Una guida completa per migliorare la raccolta differenziata nel tuo condominio"
      />
      <ArticleContent {...article} />
      <div className="mt-6">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

