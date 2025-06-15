import { createClient, type ClientConfig } from 'next-sanity'
import { getSanityConfig } from '@/sanity/env.ts'
import imageUrlBuilder from '@sanity/image-url'

/**
 * Default client configuration
 */
const baseConfig: ClientConfig = {
  ...getSanityConfig(),
  perspective: 'published',
  stega: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
}

/**
 * Production client with CDN caching
 */
export const client = createClient(baseConfig)

/**
 * Preview client with fresh data and draft support
 */
export const previewClient = createClient({
  ...baseConfig,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts'
})

/**
 * Type-safe Sanity client
 */
export type SanityClient = typeof client

/**
 * Image URL builder helper
 */
const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

/**
 * Helper to switch between clients based on environment
 */
export function getClient(previewMode: boolean = false): SanityClient {
  return previewMode && process.env.SANITY_API_READ_TOKEN 
    ? previewClient 
    : client
}