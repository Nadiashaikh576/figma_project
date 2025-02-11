export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-10-21'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skdQdgbujGi10zcE4fYjYNHnLDrR1a23rLaE63wlfR9VYpViEIx2bDx2b2wD38qhkHuvL5K4SJsvS36Zv6cwn94FqSXF9GFOUYqU3EryQzeDdD7kUy5yEnIWXHajAzODn1acdnbE1N8NyrVGse5SnQ3pn8GMVvYEXVZgxa91CCZngW5B3drN",

  // process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}