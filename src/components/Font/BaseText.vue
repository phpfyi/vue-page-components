<script setup lang="ts">
import { computed } from 'vue'
import { Tag } from '../../types/Element'
import { CLASSES } from '../../constants/Classes'

// props
withDefaults(
    defineProps<{
        tag?: Tag
        text?: string
    }>(),
    {
        tag: 'p',
        text: undefined,
    }
)

// computed
const classes = computed(() => CLASSES.BASE_TEXT)
</script>

<template>
    <component :is="tag" :class="classes">
        <slot>{{ text }}</slot>
    </component>
</template>
