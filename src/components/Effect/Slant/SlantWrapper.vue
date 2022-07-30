<script setup lang="ts">
import { computed } from 'vue'

// props
const props = withDefaults(
    defineProps<{
        height: string
        top?: string
        reverse?: boolean
    }>(),
    {
        top: '-5px',
        reverse: false,
    }
)

// computed
const styles = computed(() => {
    return {
        height: props.height,
        top: props.top,
    }
})
const classes = computed(() => {
    return {
        'slant-wrapper-reverse': props.reverse,
    }
})
</script>

<template>
    <div class="slant-wrapper" :class="classes" :style="styles" />
</template>
