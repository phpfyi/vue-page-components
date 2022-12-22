<script setup lang="ts">
import { computed } from 'vue'

type Loading = 'eager' | 'lazy'

// props
const props = defineProps<{
    src: string
    size?: number
    height?: number
    loading?: Loading
    width?: number
}>()

// computed
const attributes = computed(() => ({
    height: props.height || props.size,
    ...(props.loading ? { loading: props.loading } : {}),
    width: props.width || props.size,
}))
</script>

<template>
    <img class="app-image block" v-bind="attributes" :src="src" />
</template>
