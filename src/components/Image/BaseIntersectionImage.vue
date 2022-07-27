<script setup lang="ts">
import { useIntersectionObserver } from '../../compositions/useIntersectionObserver'
import { computed, onMounted, onUnmounted, ref, Ref } from 'vue'

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
const { intersected, observe, unobserve } = useIntersectionObserver(image)

// computed
const imageSrc = computed(() =>  intersected.value ? props.src : '')
const attributes = computed(() => {
    return {
        height: props.height || props.size,
        width: props.width || props.size,
    }
})
// hooks
onMounted(() => observe())
onUnmounted(() => unobserve())
</script>

<template>
    <img ref="image" class="app-image block" :class="{ intersected }" v-bind="attributes" :src="imageSrc" />
</template>
