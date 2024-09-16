import './assets/main.css'

import WButton from './components/Button/WButton.vue'
import WCard from './components/Card/WCard.vue'
import WEmptyState from './components/EmptyState/WEmptyState.vue'
import WFooter from './components/Footer/WFooter.vue'
import WIcon from './components/icon/WIcon.vue'
import WIconRounded from './components/IconRounded/WIconRounded.vue'
import WIconText from './components/IconText/WIconText.vue'
import WInput from './components/Input/WInput.vue'
import WLink from './components/Link/WLink.vue'
import WLoadingPlaceholder from './components/LoadingPlaceholder/WLoadingPlaceholder.vue'
import WNavbar from './components/Navbar/WNavbar.vue'
import WPagination from './components/pagination/WPagination.vue'
import WSection from './components/Section/WSection.vue'
import WSelect from './components/Select/WSelect.vue'
import WSpinner from './components/Spinner/WSpinner.vue'
import WTooltip from './components/Tooltip/WTooltip.vue'
import WSocialsBar from './components/SocialsBar/WSocialsBar.vue'

export { buttonTypes, ButtonType } from './components/Button/WButton'
export { CardType, cardTypes } from './components/Card/WCard'
export { type FooterSection, type FooterLink } from './components/Footer/WFooter'
export { IconName, iconNames } from './components/icon/WIcon'
export { IconTextPosition, iconTextPositions } from './components/IconText/WIconText'
export { InputType, inputTypes } from './components/Input/WInput'
export { type NavLinks, type NavLink } from './components/Navbar/WNavbar'
export {
  type Option,
  DropdownYPosition,
  DropdownXPosition,
  dropdownYPositions,
  dropdownXPositions
} from './components/Select/WSelect'
export { SOCIAL_URLS } from './components/SocialsBar/WSocialsBar'
export { TooltipPosition, tooltipPostions } from './components/Tooltip/WTooltip'

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
  WSelect,
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
export type WSelect = typeof WSelect
export type WSpinner = typeof WSpinner
export type WTooltip = typeof WTooltip

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
    app.component('WSelect', WSelect)
    app.component('WSpinner', WSpinner)
    app.component('WTooltip', WTooltip)
  }
}

export default WComponents
