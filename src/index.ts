import './assets/main.css'

import WButton from './components/Button/WButton.vue'
import WLink from './components/Link/WLink.vue'
import WNavbar from './components/Navbar/WNavbar.vue'

export { WLink, WButton, WNavbar }
export type WButtonType = typeof WButton
export type LinkType = typeof WLink
export type WNavbar = typeof WNavbar

import type { App } from 'vue'

const WComponents = {
  install(app: App) {
    app.component('WButton', WButton)
    app.component('WLink', WLink)
    app.component('WNavbar', WNavbar)
  }
}

export default WComponents
