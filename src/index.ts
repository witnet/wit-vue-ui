import './assets/main.css'

import WButton from './components/Button/WButton.vue'
import WEmptyState from './components/EmptyState/WEmptyState.vue'
import WFooter from './components/Footer/WFooter.vue'
import WLink from './components/Link/WLink.vue'
import WLoadingPlaceholder from './components/LoadingPlaceholder/WLoadingPlaceholder.vue'
import WNavbar from './components/Navbar/WNavbar.vue'
import WSection from './components/Section/WSection.vue'
import WSpinner from './components/Spinner/WSpinner.vue'

export { WButton, WEmptyState, WFooter, WLink, WLoadingPlaceholder, WNavbar, WSection, WSpinner }
export type WButton = typeof WButton
export type WEmptyState = typeof WEmptyState
export type WFooter = typeof WFooter
export type WLink = typeof WLink
export type WLoadingPlaceholder = typeof WLoadingPlaceholder
export type WNavbar = typeof WNavbar
export type WSection = typeof WSection
export type WSpinner = typeof WSpinner

import type { App } from 'vue'

const WComponents = {
  install(app: App) {
    app.component('WButton', WButton)
    app.component('WEmptyState', WEmptyState)
    app.component('WFooter', WFooter)
    app.component('WLink', WLink)
    app.component('WLoadingPlaceholder', WLoadingPlaceholder)
    app.component('WNavbar', WNavbar)
    app.component('WSection', WSection)
    app.component('WSpinner', WSpinner)
  }
}

export default WComponents
