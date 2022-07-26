<script setup lang="ts">
// props
withDefaults(
    defineProps<{
        label: string | boolean
        id: string
        required?: boolean
    }>(),
    {
        required: false,
    }
)
</script>

<template>
    <label v-if="label" :for="id">
        <span class="label-content">{{ label }}</span>
        <span v-if="required" class="required"> *</span>
    </label>
</template>
