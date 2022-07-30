<script setup lang="ts">
import { computed } from 'vue'

// props
const props = withDefaults(
    defineProps<{
        rotateX?: string
        rotateY?: string
        translateY?: string
        translateZ?: string
    }>(),
    {
        rotateX: '0deg',
        rotateY: '0deg',
        translateY: '0px',
        translateZ: '0px',
    }
)

// computed
const styles = computed(() => {
    return {
        transform: `
            rotateX(${props.rotateX}) 
            rotateY(${props.rotateY}) 
            translateY(${props.translateY}) 
            translateZ(${props.translateZ})`,
    }
})
</script>

<template>
    <div class="perspective-plane" :style="styles">
        <slot />
    </div>
</template>
