import './assets/main.css'

import WButton from './components/Button/WButton.vue'
import WLink from './components/Link/WLink.vue'

export { WLink, WButton }
export type WButtonType = typeof WButton
export type LinkType = typeof WLink

import type { App } from 'vue'

const WComponents = {
  install(app: App) {
    app.component('WButton', WButton)
    app.component('WLink', WLink)
  }
}

export default WComponents
