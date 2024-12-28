import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  link: string
}

export function ArticleCard({ title, excerpt, image, link }: ArticleCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl mb-2 line-clamp-2">{title}</CardTitle>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={link} passHref>
          <Button variant="outline" className="w-full">Leggi di più</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

