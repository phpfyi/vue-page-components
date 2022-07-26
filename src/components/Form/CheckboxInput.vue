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
        modelValue?: boolean
        readonly?: boolean
        required?: boolean
        messages?: Array<string>
    }>(),
    {
        type: 'checkbox',
        label: true,
        id: undefined,
        name: undefined,
        description: undefined,
        modelValue: undefined,
        readonly: false,
        required: false,
        messages: () => [],
    }
)

// compositions
const { elementId, inputId, elementClasses, innerClasses, inputClasses, labelText } =
    useFormInput(props)

// functions
const onInput = (e: Event) =>
    emit('update:modelValue', Boolean((e.target as HTMLInputElement).checked))
</script>

<template>
    <div :id="elementId" :class="elementClasses">
        <div :class="innerClasses">
            <label v-if="labelText" :for="inputId">
                <span class="label-content">{{ labelText }}</span>
                <span v-if="required" class="required"> *</span>
                <input
                    :id="inputId"
                    :type="type"
                    :name="name"
                    :class="inputClasses"
                    :required="required"
                    :readonly="readonly"
                    :checked="modelValue"
                    @input="onInput"
                />
                <span class="switch" />
                <div class="cl" />
            </label>
            <FormMessages :messages="messages" />
        </div>
    </div>
</template>
