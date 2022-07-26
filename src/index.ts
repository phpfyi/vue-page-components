import { App } from 'vue'

import BaseImage from './components/Image/BaseImage.vue'
import BaseIntersectionImage from './components/Image/BaseIntersectionImage.vue'

import BaseExternalLink from './components/Link/BaseExternalLink.vue'
import BaseLink from './components/Link/BaseLink.vue'

import CheckboxInput from './components/Form/CheckboxInput.vue'
import FormBase from './components/Form/FormBase.vue'
import FormMessages from './components/Form/FormMessages.vue'
import EmailInput from './components/Form/EmailInput.vue'
import InputLabel from './components/Form/InputLabel.vue'
import PhoneNumberInput from './components/Form/PhoneNumberInput.vue'
import SelectInput from './components/Form/SelectInput.vue'
import SubmitInput from './components/Form/SubmitInput.vue'
import TextareaInput from './components/Form/TextareaInput.vue'
import TextInput from './components/Form/TextInput.vue'

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

    app.component('CheckboxInput', CheckboxInput)
    app.component('FormBase', FormBase)
    app.component('FormMessages', FormMessages)
    app.component('EmailInput', EmailInput)
    app.component('InputLabel', InputLabel)
    app.component('PhoneNumberInput', PhoneNumberInput)
    app.component('SelectInput', SelectInput)
    app.component('SubmitInput', SubmitInput)
    app.component('TextareaInput', TextareaInput)
    app.component('TextInput', TextInput)
  }
}

export default plugin