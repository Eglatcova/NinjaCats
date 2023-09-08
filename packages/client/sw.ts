const sw = self as unknown as ServiceWorkerGlobalScope

const CACHE_NAME = 'game-cache-v3'

const staticAssets = [
  '/',
  '/login',
  '/profile',
  '/registration',
  '/game',
  '/game-over',
  '/game-start',
  '/main',
  '/forum',
  '/leaderboard',
  '/error-404',
  '/error-500',
]

sw.addEventListener('install', async () => {
  const cache = await caches.open(CACHE_NAME)
  await cache.addAll(staticAssets)
})

sw.addEventListener('activate', async () => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(cacheItem => cacheItem !== CACHE_NAME)
      .map(cacheItem => caches.delete(cacheItem))
  )
})

sw.addEventListener('fetch', event => {
  const { request } = event
  const cacheFirst = async () => {
    const cachedRequest = await caches.match(request)

    if (cachedRequest) {
      return cachedRequest
    }

    const fetchRequest = request.clone()
    const response = await fetch(fetchRequest)
    if (!response || response.status !== 200) {
      return response
    }

    const responseToCache = response.clone()
    const cache = await caches.open(CACHE_NAME)
    await cache.put(request, responseToCache)

    return response
  }

  event.respondWith(cacheFirst())
})
