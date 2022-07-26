<script setup lang="ts">
import { CLASSES } from '../constants/Classes'

// props
withDefaults(
    defineProps<{
        text?: string
        to: string | Record<string, string>
    }>(),
    {
        text: undefined,
    }
)
</script>

<template>
    <RouterLink :to="to" :class="CLASSES.BASE_LINK">
        <slot>{{ text }}</slot>
    </RouterLink>
</template>
