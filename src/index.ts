import './assets/main.css'

import WButton from './components/Button/WButton.vue'
import WLink from './components/Link/WLink.vue'
import WNavbar from './components/Navbar/WNavbar.vue'
import WFooter from './components/Footer/WFooter.vue'

export { WLink, WButton, WNavbar, WFooter }
export type WButtonType = typeof WButton
export type LinkType = typeof WLink
export type WNavbar = typeof WNavbar
export type WFooter = typeof WFooter

import type { App } from 'vue'

const WComponents = {
  install(app: App) {
    app.component('WButton', WButton)
    app.component('WLink', WLink)
    app.component('WNavbar', WNavbar)
    app.component('WFooter', WFooter)
  }
}

export default WComponents
