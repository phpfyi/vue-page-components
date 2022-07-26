import { computed } from 'vue'
import { CLASSES, PREFIXES } from '../constants/Classes'

interface InputProps {
    name: string
    type?: string
    label?: string | boolean
    id?: string
    messages?: Array<string>
}

export function useFormInput(props: InputProps) {
    const elementId = computed(() => (props.name ? `${PREFIXES.INPUT_ELEMENT}-${props.name}` : ''))
    const inputId = computed(() => {
        if (props.id) {
            return props.id
        }
        return props.name ? `${PREFIXES.INPUT}-${props.name}` : ''
    })
    const elementClasses = computed(() =>
        CLASSES.INPUT_ELEMENT.concat([`${CLASSES.INPUT_ELEMENT}-${props.type}`])
    )
    const innerClasses = computed(() => CLASSES.INPUT_INNER)
    const inputClasses = computed<Array<string>>(() => [
        ...CLASSES.INPUT,
        ...(props.type ? [`${PREFIXES.INPUT}-${props.type}`] : []),
        ...((props.messages || []).length > 0 ? CLASSES.INPUT_ERROR : []),
    ])
    const labelText = computed(() => {
        if (props.label !== false) {
            return props.label
                ? String(props.label)
                : (props.name.charAt(0).toUpperCase() + props.name.slice(1)).replace('_', ' ')
        }
        return props.label
    })
    return {
        elementId,
        inputId,
        elementClasses,
        innerClasses,
        inputClasses,
        labelText,
    }
}
