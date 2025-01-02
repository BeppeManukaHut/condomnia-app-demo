import fs from 'fs'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import sharp from 'sharp'
import { AppIcon } from '../components/app-icon'

async function generateIcons() {
  // Generate SVG
  const svg = renderToString(
    createElement(AppIcon, { className: 'w-64 h-64' })
  )

  // Convert SVG to PNG buffer
  const pngBuffer = await sharp(Buffer.from(svg))
    .resize(512, 512)
    .png()
    .toBuffer()

  // Generate different sizes
  const sizes = {
    'favicon.ico': 32,
    'icon.png': 192,
    'icon-512.png': 512,
    'apple-icon.png': 180
  }

  // Create icons
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(pngBuffer)
      .resize(size, size)
      .toFile(`public/${filename}`)
  }

  console.log('Icons generated successfully!')
}

generateIcons().catch(console.error)

