<template>
    <form
        :id="id"
        :name="name"
        :action="action"
        :method="method"
        class="form"
        :novalidate="novalidate"
        @submit="submit"
    >
        <FormMessages :messages="messages" />
        <slot />
    </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['submit'])

// props
const props = withDefaults(
    defineProps<{
        id?: string
        name?: string
        action?: string
        method?: string
        novalidate?: boolean
        guard?: boolean
        processing?: boolean
        messages?: Array<string>
    }>(),
    {
        id: undefined,
        name: undefined,
        action: undefined,
        method: 'POST',
        novalidate: true,
        guard: true,
        processing: true,
        messages: () => [],
    }
)

// methods
const submit = (e: Event): void => {
    emit('submit', e)

    if (props.guard) {
        e.preventDefault()
    }
}
</script>
