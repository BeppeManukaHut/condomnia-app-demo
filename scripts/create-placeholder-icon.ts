import sharp from 'sharp'

const size = 1024
const backgroundColor = '#bb78ff'
const textColor = '#ffffff'

const svg = `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${backgroundColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="400" font-weight="bold" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">C</text>
</svg>
`

sharp(Buffer.from(svg))
  .png()
  .toFile('public/app-icon.png')
  .then(() => console.log('Placeholder app icon created'))
  .catch(console.error)

