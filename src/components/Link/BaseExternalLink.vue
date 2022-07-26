<script setup lang="ts">
import { CLASSES } from '../constants/Classes'

// props
withDefaults(
    defineProps<{
        href: string
        target?: string
        rel?: string
        text?: string
    }>(),
    {
        target: '_blank',
        rel: 'noopener',
        text: undefined,
    }
)
</script>

<template>
    <a :href="href" :class="CLASSES.BASE_EXTERNAL_LINK" :target="target" :rel="rel">
        <slot>{{ text }}</slot>
    </a>
</template>
