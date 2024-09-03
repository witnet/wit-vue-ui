declare module '*.svg?component' {
  import { DefineComponent, SVGAttributes } from 'vue'
  const src: DefineComponent<SVGAttributes>
  export default src
}
declare module '*.vue';