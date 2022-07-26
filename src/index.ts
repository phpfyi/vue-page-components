import { App } from 'vue'

import BaseImage from './components/Image/BaseImage.vue'
import BaseIntersectionImage from './components/Image/BaseIntersectionImage.vue'

import BaseExternalLink from './components/Link/BaseExternalLink.vue'
import BaseLink from './components/Link/BaseLink.vue'

const plugin = {
  install (app: App) {
    /*
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        app.component(component.name, component)
      }
    }
    */

    app.component('BaseImage', BaseImage)
    app.component('BaseIntersectionImage', BaseIntersectionImage)

    app.component('BaseExternalLink', BaseExternalLink)
    app.component('BaseLink', BaseLink)
  }
}

export default plugin