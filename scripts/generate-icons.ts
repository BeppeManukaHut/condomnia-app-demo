import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const sizes = [
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon.ico', size: 32 }
]

async function generateIcons() {
  const inputFile = path.join(process.cwd(), 'public', 'app-icon.png')
  
  for (const { name, size } of sizes) {
    const outputFile = path.join(process.cwd(), 'public', name)
    
    if (name === 'favicon.ico') {
      // For favicon.ico, we need to create a PNG first and then convert it
      const pngBuffer = await sharp(inputFile)
        .resize(size, size)
        .png()
        .toBuffer()
      
      // Write the buffer directly as ICO
      fs.writeFileSync(outputFile, pngBuffer)
    } else {
      await sharp(inputFile)
        .resize(size, size)
        .png()
        .toFile(outputFile)
    }
    
    console.log(`Generated ${name}`)
  }
}

generateIcons().catch(console.error)
