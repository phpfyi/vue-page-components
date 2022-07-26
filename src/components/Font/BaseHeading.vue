<script setup lang="ts">
import { computed } from 'vue'
import { Heading } from '../../types/Element'
import { CLASSES, PREFIXES } from '../../constants/Classes'

// props
const props = withDefaults(
    defineProps<{
        size: Heading
        text?: string
    }>(),
    {
        text: undefined,
    }
)

// computed
const classes = computed(() => [...CLASSES.BASE_HEADING, heading.value])
const heading = computed(() => `${PREFIXES.HEADING}${props.size}`)
</script>

<template>
    <component :is="heading" :class="classes">
        <slot>{{ text }}</slot>
    </component>
</template>
