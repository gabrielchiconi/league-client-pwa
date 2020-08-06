import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'

interface Navigator {
  standalone: boolean
}

window.addEventListener('load', () => {
  ReactDOM.render(<App />, document.querySelector('#app'))

  navigator.serviceWorker?.register('./sw.js')
    .then(r => {
      console.log('Service worker registered!', r)
    })
    .catch(console.error)

  const isInstalled = window.matchMedia('(display-mode: standalone)').matches
  if (isInstalled) {
    window.resizeTo(1280, 720)
    // window.addEventListener('resize', () => {
    //   window.resizeTo(1280, 720)
    // })
  }
})
