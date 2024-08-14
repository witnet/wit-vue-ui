import wBtn from './components/btn/Btn.vue';
import wLink from './components/link/Link.vue';
import type { DefineComponent } from 'vue';

// Export component type explicitly
// export type MyBtnType = DefineComponent<{}, {}, any>; // You can type props, events, etc. here
export type wBtnType = typeof wBtn;
export type wLinkType = typeof wLink;


// Export components
export { wBtn, wLink };

// Plugin installation
    import type { App } from 'vue';

const wComponents = {
  install(app: App) {
    app.component('wBtn', wBtn);
    app.component('wLink', wLink);
  },
};

export default wComponents;