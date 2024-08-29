import './assets/main.css'

import WButton from './components/Button/WButton.vue'
import WFooter from './components/Footer/WFooter.vue'
import WLink from './components/Link/WLink.vue'
import WNavbar from './components/Navbar/WNavbar.vue'

export { WLink, WButton, WNavbar, WFooter }
export type WButton = typeof WButton
export type WFooter = typeof WFooter
export type WLink = typeof WLink
export type WNavbar = typeof WNavbar

import type { App } from 'vue'

const WComponents = {
  install(app: App) {
    app.component('WButton', WButton)
    app.component('WFooter', WFooter)
    app.component('WLink', WLink)
    app.component('WNavbar', WNavbar)
  }
}

export default WComponents
