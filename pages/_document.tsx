import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add these CDN links */}
        <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/react-hook-form@7.43.9/dist/index.umd.js"></script>
        <script src="https://unpkg.com/@hookform/resolvers@3.1.0/dist/umd/zod.min.js"></script>
        <script src="https://unpkg.com/zod@3.21.4/lib/index.umd.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

