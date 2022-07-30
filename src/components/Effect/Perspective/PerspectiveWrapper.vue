<script setup lang="ts">
import { computed } from 'vue'

// props
const props = withDefaults(
    defineProps<{
        size?: string
    }>(),
    {
        size: '0px',
    }
)

// computed
const styles = computed(() => {
    return {
        height: props.size,
        width: props.size,
    }
})
</script>

<template>
    <div class="perspective">
        <div class="perspective__inner" :style="styles">
            <slot />
        </div>
    </div>
</template>
