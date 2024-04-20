import { source } from '$lib/source.js'

export function load({ url }) {
  const searchParams = new URLSearchParams(url.search)

  /**
   * @type {import('svelte/store').Readable<null|import('./events/+server').Quote>}
   */
  const quote = source(`/events?${searchParams}`, {
    close({ connect }) {
      console.log('reconnecting...')
      connect()
    },
  })
    .select('cat-quote')
    .json()

  return {
    quote,
  }
}
