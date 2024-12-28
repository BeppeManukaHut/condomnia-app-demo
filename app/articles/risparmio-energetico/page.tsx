import { ArticleContent } from "@/components/article-content"
import DashboardShell from "@/components/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard-header"
import { BackButton } from "@/components/back-button"

const article = {
  title: "Come risparmiare energia in condominio",
  image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/beef7c201cf9402f85103fab617242ec22994830/energia.jpg",
  content: `Il risparmio energetico in condominio non solo aiuta l'ambiente, ma può anche portare a significative riduzioni delle spese condominiali. Iniziare con piccoli cambiamenti può fare una grande differenza. Ad esempio, sostituire le lampadine tradizionali con LED a basso consumo nelle aree comuni può ridurre il consumo di elettricità fino al 75%. Inoltre, l'installazione di sensori di movimento per l'illuminazione in corridoi e scale assicura che le luci siano accese solo quando necessario.

  L'isolamento termico è un altro aspetto cruciale per il risparmio energetico. Migliorare l'isolamento del tetto, delle pareti e delle finestre può ridurre significativamente la dispersione di calore in inverno e mantenere gli ambienti più freschi in estate. Questo non solo migliora il comfort abitativo, ma può portare a una riduzione dei costi di riscaldamento e raffreddamento fino al 30%. Considerare l'installazione di infissi a doppio vetro o l'applicazione di pellicole isolanti sulle finestre esistenti può essere un ottimo punto di partenza.

Infine, l'adozione di tecnologie smart per la gestione dell'energia può offrire ulteriori opportunità di risparmio. Termostati intelligenti programmabili possono ottimizzare il riscaldamento e il raffreddamento in base alle effettive esigenze del condominio. Sistemi di monitoraggio energetico permettono di identificare aree di spreco e intervenire prontamente. Inoltre, valutare l'installazione di pannelli solari sul tetto del condominio può essere un investimento a lungo termine che porta a significativi risparmi sulla bolletta elettrica e aumenta il valore dell'immobile.`
}

export default function RisparmioEnergeticoPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading={article.title}
        text="Consigli per ridurre i consumi energetici nel tuo condominio"
      />
      <ArticleContent {...article} />
      <div className="mt-6">
        <BackButton href="/dashboard" label="Dashboard" />
      </div>
    </DashboardShell>
  )
}

