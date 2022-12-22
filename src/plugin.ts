import { App } from 'vue'

import {
  BaseHeading,
  BaseText,
  BaseImage,
  BaseExternalLink,
  BaseLink,
  CheckboxInput,
  FormBase,
  FormMessages,
  EmailInput,
  InputLabel,
  PhoneNumberInput,
  SelectInput,
  SubmitInput,
  TextareaInput,
  TextInput,
} from '../bundles/main'

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
    app.component('BaseHeading', BaseHeading)
    app.component('BaseText', BaseText)
    app.component('BaseImage', BaseImage)
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