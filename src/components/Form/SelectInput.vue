<script setup lang="ts">
import { SelectOption } from '../../types/Form'
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
        modelValue?: string | number | boolean | string[] | number[]
        placeholder?: string
        readonly?: boolean
        required?: boolean
        messages?: Array<string>
        options?: Array<SelectOption>
        emptyOption?: string
    }>(),
    {
        type: 'select',
        label: true,
        id: undefined,
        name: undefined,
        description: undefined,
        modelValue: undefined,
        placeholder: undefined,
        readonly: false,
        required: false,
        messages: () => [],
        options: () => [],
        emptyOption: '- select one -',
    }
)

// compositions
const { elementId, inputId, elementClasses, innerClasses, inputClasses, labelText } =
    useFormInput(props)

// functions
const onChange = (e: Event) => emit('update:modelValue', (e.target as HTMLSelectElement).value)
</script>

<template>
    <div :id="elementId" :class="elementClasses">
        <InputLabel :id="inputId" :label="labelText" :required="required" />
        <div :class="innerClasses">
            <select
                :id="inputId"
                :value="modelValue"
                :name="name"
                :class="inputClasses"
                :required="required"
                :readonly="readonly"
                @input="onChange"
            >
                <option v-if="emptyOption" disabled value="">
                    {{ emptyOption }}
                </option>
                <option v-for="(option, i) in options" :key="i" :value="option.value">
                    {{ option.title }}
                </option>
            </select>
            <FormMessages :messages="messages" />
        </div>
    </div>
</template>
