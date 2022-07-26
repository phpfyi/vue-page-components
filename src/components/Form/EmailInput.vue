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
        messages?: Array<string>
    }>(),
    {
        type: 'email',
        label: true,
        id: undefined,
        name: undefined,
        description: undefined,
        modelValue: undefined,
        placeholder: undefined,
        readonly: undefined,
        required: undefined,
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
            <input
                :id="inputId"
                :type="type"
                :name="name"
                :class="inputClasses"
                :placeholder="placeholder"
                :readonly="readonly"
                :required="required"
                :value="modelValue"
                @input="onInput"
            />
            <i v-if="description">{{ description }}</i>
            <FormMessages :messages="messages" />
        </div>
    </div>
</template>
