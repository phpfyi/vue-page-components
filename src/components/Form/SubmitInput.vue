<script setup lang="ts">
import { computed } from 'vue'
import { useFormInput } from '../../compositions/useFormInput'
import { CLASSES } from 'vue-page-components/src/constants/Classes'

// props
const props = withDefaults(
    defineProps<{
        type?: string
        name?: string
        id?: string
        disabled?: boolean
        modelValue?: string | number | boolean | string[] | number[]
    }>(),
    {
        type: 'submit',
        name: undefined,
        id: undefined,
        disabled: false,
        modelValue: 'Submit',
    }
)

// compositions
const { inputId } = useFormInput(props)

// computed
const inputClasses = computed(() => CLASSES.SUBMIT_INPUT)
</script>

<template>
    <input
        :id="inputId"
        :type="type"
        :name="name"
        :value="modelValue"
        :class="inputClasses"
        :disabled="disabled"
    />
</template>
