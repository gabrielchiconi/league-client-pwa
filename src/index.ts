interface Navigator {
  standalone: boolean
}

window.addEventListener('load', () => {
  navigator.serviceWorker?.register('./sw.js')
    .then(r => {
      console.log('Service worker registered!', r)
    })
    .catch(console.error)

  const isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator?.standalone === true

  if (isInstalled) {
    window.resizeTo(1280, 720)
    // window.addEventListener('resize', () => {
    //   window.resizeTo(1280, 720)
    // })
  }
})
