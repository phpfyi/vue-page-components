<script setup lang="ts">
import { useIntersectionObserver } from '@/compositions/useIntersectionObserver'
import { computed, ref, Ref } from 'vue'

// props
const props = defineProps<{
    src: string
    size?: number
    height?: number
    width?: number
}>()

// data
const image: Ref<Element | null> = ref(null)

// compositions
const { intersected } = useIntersectionObserver(image)

// computed
const imageSrc = computed(() => {
    return intersected.value ? props.src : ''
})
const attributes = computed(() => {
    return {
        height: props.height || props.size,
        width: props.width || props.size,
    }
})
</script>

<template>
    <img ref="image" class="app-image block" v-bind="attributes" :src="imageSrc" />
</template>
