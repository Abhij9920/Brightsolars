'use client'

/**
 * Sanity Studio embedded at /dashboard
 * Must be a pure client component — Sanity Studio uses React context
 * at module evaluation time which is incompatible with Next.js SSR.
 */

import dynamic from 'next/dynamic'
import config from '../../../../sanity.config'

// Disable SSR entirely for NextStudio to avoid "createContext is not a function"
// during build-time page data collection (Next.js 16 + Turbopack)
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
