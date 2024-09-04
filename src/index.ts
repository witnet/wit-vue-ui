import './assets/main.css'

import WButton from './components/Button/WButton.vue'
export { buttonTypes } from './components/Button/WButton'

import WCard from './components/Card/WCard.vue'
import WEmptyState from './components/EmptyState/WEmptyState.vue'

import WFooter from './components/Footer/WFooter.vue'

import WIcon from './components/icon/WIcon.vue'
export { IconName, iconNames } from './components/icon/WIcon'

import WIconRounded from './components/IconRounded/WIconRounded.vue'

import WIconText from './components/IconText/WIconText.vue'
export { iconTextPositions } from './components/IconText/WIconText'

import WInput from './components/Input/WInput.vue'
import WLink from './components/Link/WLink.vue'

import WLoadingPlaceholder from './components/LoadingPlaceholder/WLoadingPlaceholder.vue'

import WNavbar from './components/Navbar/WNavbar.vue'

import WPagination from './components/pagination/WPagination.vue'

import WSection from './components/Section/WSection.vue'

import WSpinner from './components/Spinner/WSpinner.vue'

import WSocialsBar from './components/SocialsBar/WSocialsBar.vue'
export { SOCIAL_URLS } from './components/SocialsBar/WSocialsBar'

export {
  WButton,
  WCard,
  WEmptyState,
  WFooter,
  WIcon,
  WIconText,
  WIconRounded,
  WInput,
  WLink,
  WLoadingPlaceholder,
  WNavbar,
  WPagination,
  WSection,
  WSocialsBar,
  WSpinner
}
export type WButton = typeof WButton
export type WCard = typeof WCard
export type WEmptyState = typeof WEmptyState
export type WFooter = typeof WFooter
export type WIcon = typeof WIcon
export type WIconRounded = typeof WIconRounded
export type WIconText = typeof WIconText
export type WInput = typeof WInput
export type WLink = typeof WLink
export type WLoadingPlaceholder = typeof WLoadingPlaceholder
export type WNavbar = typeof WNavbar
export type WPagination = typeof WPagination
export type WSection = typeof WSection
export type WSocialsBar = typeof WSocialsBar
export type WSpinner = typeof WSpinner

import type { App } from 'vue'

const WComponents = {
  install(app: App) {
    app.component('WButton', WButton)
    app.component('WCard', WCard)
    app.component('WEmptyState', WEmptyState)
    app.component('WFooter', WFooter)
    app.component('WIcon', WIcon)
    app.component('WIconRounded', WIconRounded)
    app.component('WIconText', WIconText)
    app.component('WInput', WInput)
    app.component('WLink', WLink)
    app.component('WLoadingPlaceholder', WLoadingPlaceholder)
    app.component('WNavbar', WNavbar)
    app.component('WPagination', WPagination)
    app.component('WSection', WSection)
    app.component('WSocialsBar', WSocialsBar)
    app.component('WSpinner', WSpinner)
  }
}

export default WComponents
