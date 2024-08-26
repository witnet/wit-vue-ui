import './assets/main.css'

import WButton from './components/Button/WButton.vue'
export { buttonTypes } from './components/Button/WButton'

import WIconRounded from './components/IconRounded/WIconRounded.vue'

import WIconText from './components/IconText/WIconText.vue'
export { iconTextPositions } from './components/IconText/WIconText'

import WLink from './components/Link/WLink.vue'

import WSocialsBar from './components/SocialsBar/WSocialsBar.vue'
export { socialsUrls } from './components/SocialsBar/WSocialsBar'

export { WButton, WIconRounded, WIconText, WLink, WSocialsBar }

export type WButtonType = typeof WButton
export type LinkType = typeof WLink

import type { App } from 'vue'

const WComponents = {
  install(app: App) {
    app.component('WButton', WButton)
    app.component('WIconRounded', WIconRounded)
    app.component('WIconText', WIconText)
    app.component('WLink', WLink)
    app.component('WSocialsBar', WSocialsBar)
  }
}

export default WComponents
