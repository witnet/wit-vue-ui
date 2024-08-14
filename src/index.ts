import wBtn from './components/btn/Button.vue'
import wLink from './components/link/Link.vue'

export type wBtnType = typeof wBtn
export type wLinkType = typeof wLink

// Export components
export { wBtn, wLink }

import type { App } from 'vue'

const wComponents = {
  install(app: App) {
    app.component('wBtn', wBtn)
    app.component('wLink', wLink)
  }
}

export default wComponents
