<template>
    <transition name="fade" mode="out-in">
        <slot />
    </transition>
</template>

<style lang="scss" scoped>
.fade {
    &-enter-active,
    &-leave-active {
        transition: opacity 0.6s ease;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
</style>
