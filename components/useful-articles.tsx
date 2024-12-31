"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const articles = [
  {
    title: "Come risparmiare energia in condominio",
    excerpt: "Scopri 10 semplici modi per ridurre i consumi energetici e abbassare le bollette condominiali.",
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/beef7c201cf9402f85103fab617242ec22994830/energia.jpg",
    link: "/articles/risparmio-energetico",
    content: `Il risparmio energetico in condominio non solo aiuta l'ambiente, ma può anche portare a significative riduzioni delle spese condominiali. Iniziare con piccoli cambiamenti può fare una grande differenza. Ad esempio, sostituire le lampadine tradizionali con LED a basso consumo nelle aree comuni può ridurre il consumo di elettricità fino al 75%. Inoltre, l'installazione di sensori di movimento per l'illuminazione in corridoi e scale assicura che le luci siano accese solo quando necessario.

    L'isolamento termico è un altro aspetto cruciale per il risparmio energetico. Migliorare l'isolamento del tetto, delle pareti e delle finestre può ridurre significativamente la dispersione di calore in inverno e mantenere gli ambienti più freschi in estate. Questo non solo migliora il comfort abitativo, ma può portare a una riduzione dei costi di riscaldamento e raffreddamento fino al 30%. Considerare l'installazione di infissi a doppio vetro o l'applicazione di pellicole isolanti sulle finestre esistenti può essere un ottimo punto di partenza.

    Infine, l'adozione di tecnologie smart per la gestione dell'energia può offrire ulteriori opportunità di risparmio. Termostati intelligenti programmabili possono ottimizzare il riscaldamento e il raffreddamento in base alle effettive esigenze del condominio. Sistemi di monitoraggio energetico permettono di identificare aree di spreco e intervenire prontamente. Inoltre, valutare l'installazione di pannelli solari sul tetto del condominio può essere un investimento a lungo termine che porta a significativi risparmi sulla bolletta elettrica e aumenta il valore dell'immobile.`
  },
  {
    title: "Gestione dei rifiuti: best practices",
    excerpt: "Una guida completa per migliorare la raccolta differenziata e ridurre l'impatto ambientale del tuo condominio.",
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/beef7c201cf9402f85103fab617242ec22994830/Rifiuti.jpg",
    link: "/articles/gestione-rifiuti",
    content: `Una gestione efficiente dei rifiuti in condominio non solo contribuisce a un ambiente più pulito e salubre, ma può anche ridurre i costi di smaltimento. La chiave per una raccolta differenziata di successo è l'educazione e la sensibilizzazione di tutti i condomini. Organizzare incontri informativi e distribuire guide chiare sulla corretta separazione dei rifiuti può fare la differenza. È importante spiegare i benefici ambientali ed economici della raccolta differenziata, motivando così i residenti a partecipare attivamente.

    L'organizzazione degli spazi dedicati alla raccolta dei rifiuti è fondamentale. Creare un'area ben strutturata e facilmente accessibile, con contenitori chiaramente etichettati per ogni tipo di rifiuto, rende la differenziazione più semplice e intuitiva. Considerare l'installazione di compattatori per ridurre il volume dei rifiuti, specialmente per materiali come plastica e cartone, può ottimizzare lo spazio e ridurre la frequenza di svuotamento dei contenitori. Inoltre, promuovere il compostaggio dei rifiuti organici, se possibile, può ridurre significativamente la quantità di rifiuti da smaltire.

    Implementare un sistema di monitoraggio e feedback può aiutare a migliorare costantemente le pratiche di gestione dei rifiuti. Tenere traccia delle quantità di rifiuti prodotti e riciclati può fornire dati utili per identificare aree di miglioramento. Organizzare sfide o competizioni amichevoli tra i condomini per incentivare la raccolta differenziata può aumentare l'engagement. Infine, collaborare con le autorità locali e le aziende di gestione dei rifiuti può portare a soluzioni innovative e personalizzate per le esigenze specifiche del condominio, come la raccolta porta a porta o l'installazione di isole ecologiche intelligenti.`
  },
  {
    title: "Manutenzione preventiva: perché è importante",
    excerpt: "Impara come la manutenzione regolare può prevenire costose riparazioni e migliorare la qualità della vita in condominio.",
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/beef7c201cf9402f85103fab617242ec22994830/manutenzione.jpg",
    link: "/articles/manutenzione-preventiva",
    content: `La manutenzione preventiva è un aspetto cruciale nella gestione di un condominio, spesso sottovalutato ma di fondamentale importanza. Questo approccio proattivo alla cura dell'edificio non solo previene costose riparazioni d'emergenza, ma contribuisce anche a mantenere e aumentare il valore della proprietà nel tempo. Un programma di manutenzione regolare permette di identificare e risolvere piccoli problemi prima che si trasformino in guasti maggiori, risparmiando tempo e denaro a lungo termine. Ad esempio, la pulizia regolare delle grondaie può prevenire infiltrazioni d'acqua e danni strutturali ben più costosi da riparare.

    Un altro vantaggio significativo della manutenzione preventiva è il miglioramento della sicurezza e del comfort per tutti i residenti. Controlli regolari degli impianti elettrici, del gas e dell'ascensore non solo prevengono incidenti potenzialmente pericolosi, ma assicurano anche un funzionamento ottimale di questi servizi essenziali. La manutenzione regolare degli spazi comuni, come giardini e aree ricreative, contribuisce a creare un ambiente piacevole e accogliente, aumentando la qualità della vita dei condomini e il senso di comunità.

    Per implementare un efficace programma di manutenzione preventiva, è essenziale sviluppare un piano dettagliato che copra tutti gli aspetti dell'edificio. Questo dovrebbe includere ispezioni periodiche di strutture, impianti e aree comuni, con una chiara calendarizzazione degli interventi necessari. Coinvolgere professionisti qualificati per le ispezioni e gli interventi specializzati è fondamentale per garantire risultati ottimali. Inoltre, mantenere una documentazione accurata di tutte le attività di manutenzione aiuta a tracciare la storia dell'edificio e a pianificare future azioni. Infine, comunicare regolarmente con i condomini riguardo alle attività di manutenzione in corso e pianificate aumenta la trasparenza e la fiducia nella gestione del condominio.`
  },
  {
    title: "Convivenza in condominio: regole di buon vicinato",
    excerpt: "Consigli pratici per mantenere buoni rapporti con i vicini e creare un ambiente armonioso nel tuo condominio.",
    image: "https://raw.githubusercontent.com/BeppeManukaHut/condomnia-images/beef7c201cf9402f85103fab617242ec22994830/convivenza.jpg",
    link: "/articles/convivenza-condominio",
    content: `La convivenza armoniosa in un condominio è fondamentale per creare un ambiente di vita piacevole e sereno per tutti i residenti. Il rispetto reciproco è la base di ogni buon rapporto di vicinato. Inizia con piccoli gesti di cortesia, come salutare i vicini quando li incontri o offrire aiuto quando necessario. È importante essere consapevoli del rumore che produciamo, specialmente in orari sensibili come la sera tardi o la mattina presto. Utilizzare tappeti o feltri sotto i mobili, evitare di sbattere porte e finestre, e moderare il volume di televisori e sistemi audio può fare una grande differenza nella qualità di vita di tutti.

    La comunicazione aperta e rispettosa è essenziale per prevenire e risolvere eventuali conflitti. Se hai un problema con un vicino, cerca di affrontarlo direttamente e in modo civile prima di coinvolgere l'amministratore o ricorrere a vie legali. Spesso, molti problemi nascono da semplici malintesi che possono essere risolti con una conversazione pacata. Partecipare attivamente alle assemblee condominiali è un altro modo importante per contribuire alla comunità e far sentire la propria voce in modo costruttivo. Questo permette di essere informati sulle decisioni che riguardano il condominio e di contribuire al processo decisionale.

    Infine, rispettare gli spazi comuni è fondamentale per mantenere un ambiente piacevole per tutti. Questo include mantenere pulite le aree condivise, rispettare le regole per lo smaltimento dei rifiuti e l'uso corretto di parcheggi e altre strutture comuni. Considerare l'organizzazione di eventi sociali, come una festa di condominio o un progetto di giardinaggio comunitario, può essere un ottimo modo per costruire relazioni positive tra vicini. Ricorda che la flessibilità e la comprensione sono qualità preziose nella vita condominiale: essere disposti a fare piccoli compromessi può portare a grandi miglioramenti nella qualità della convivenza per tutti.`
  }
]

export function UsefulArticles() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    // Add custom styles for Swiper pagination
    const style = document.createElement('style')
    style.textContent = `
      .swiper-pagination {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        padding: 10px 0;
      }
      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        margin: 0 4px;
        background-color: #ccc;
        border-radius: 50%;
        opacity: 0.5;
        cursor: pointer;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
        background-color: #000;
      }
    `
    document.head.appendChild(style)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
      document.head.removeChild(style)
    }
  }, [])

  const ArticleCard = ({ article, index }: { article: typeof articles[0], index: number }) => (
    <Card className="flex flex-col h-full mb-4">
      <CardHeader className="p-0">
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="rounded-t-lg object-cover"
            priority={index < 2}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl mb-2 line-clamp-2">{article.title}</CardTitle>
        <p className="text-muted-foreground line-clamp-3">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={article.link} passHref>
          <Button variant="outline" className="w-full">Leggi di più</Button>
        </Link>
      </CardFooter>
    </Card>
  )

  if (isMobile) {
    return (
      <div className="relative pb-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          className="mb-8"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <ArticleCard article={article} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination absolute bottom-0 left-0 right-0"></div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} index={index} />
      ))}
    </div>
  )
}

