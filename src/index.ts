import { App } from 'vue'

import BaseImage from 'vue-page-components/src/components/src/Image/BaseImage.vue'
import BaseIntersectionImage from 'vue-page-components/src/components/src/Image/BaseIntersectionImage.vue'

import BaseExternalLink from 'vue-page-components/src/components/Link/BaseExternalLink.vue'
import BaseLink from 'vue-page-components/src/components/Link/BaseLink.vue'

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