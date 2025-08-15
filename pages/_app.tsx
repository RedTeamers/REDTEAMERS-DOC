// pages/_app.tsx
import type { AppProps } from 'next/app'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  )
}
