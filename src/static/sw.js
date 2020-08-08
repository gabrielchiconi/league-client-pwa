// eslint-disable-next-line
const swVersion = 3

self.addEventListener('install', (event) => {
  console.log('Installing...')

  event.waitUntil(
    caches.open('v1').then(cache =>
      cache.addAll([
        '/',
        '/league-icon.png'
      ]))
  )
})

self.addEventListener('activate', () => {
  console.log('Worker running!')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
