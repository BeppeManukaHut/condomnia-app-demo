import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

interface ArticleContentProps {
  title: string
  image: string
  content: string
}

export function ArticleContent({ title, image, content }: ArticleContentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-64 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="prose max-w-none">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

