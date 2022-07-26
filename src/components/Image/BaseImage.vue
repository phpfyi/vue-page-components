<script setup lang="ts">
import { computed } from 'vue'

// props
const props = defineProps<{
    src: string
    size?: number
    height?: number
    width?: number
}>()

// computed
const attributes = computed(() => ({
    height: props.height || props.size,
    width: props.width || props.size,
}))
</script>

<template>
    <img class="app-image block" v-bind="attributes" :src="src" />
</template>
