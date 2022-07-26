<script setup lang="ts">
// props
withDefaults(
    defineProps<{
        messages?: Array<string>
    }>(),
    {
        messages: () => [],
    }
)
</script>

<template>
    <div v-if="messages.length" class="form-messages input-error">
        <span v-for="(message, index) in messages" :key="index">{{ message }}</span>
    </div>
</template>
