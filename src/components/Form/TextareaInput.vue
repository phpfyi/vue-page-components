<script setup lang="ts">
import { useFormInput } from '../../compositions/useFormInput'

// emits
const emit = defineEmits(['update:modelValue'])

// props
const props = withDefaults(
    defineProps<{
        type?: string
        label?: string | boolean
        id?: string
        name?: string
        description?: string
        modelValue?: string
        placeholder?: string
        readonly?: boolean
        required?: boolean
        rows?: number
        messages?: Array<string>
    }>(),
    {
        type: 'textarea',
        label: true,
        id: undefined,
        name: undefined,
        description: undefined,
        modelValue: undefined,
        placeholder: undefined,
        readonly: false,
        required: false,
        rows: 4,
        messages: () => [],
    }
)

// compositions
const { elementId, inputId, elementClasses, innerClasses, inputClasses, labelText } =
    useFormInput(props)

// functions
const onInput = (e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)
</script>

<template>
    <div :id="elementId" :class="elementClasses">
        <InputLabel :id="inputId" :label="labelText" :required="required" />
        <div :class="innerClasses">
            <textarea
                :id="inputId"
                :name="name"
                :rows="rows"
                :class="inputClasses"
                :value="modelValue"
                :placeholder="placeholder"
                :required="required"
                :readonly="readonly"
                @input="onInput"
            />
            <i v-if="description">{{ description }}</i>
            <FormMessages :messages="messages" />
        </div>
    </div>
</template>
