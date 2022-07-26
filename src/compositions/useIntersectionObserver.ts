import { onMounted, onUnmounted, ref, Ref } from 'vue'

export function useIntersectionObserver(element: Ref<Element | null>) {
    const observer: Ref<IntersectionObserver | null> = ref(null)
    const intersected: Ref<boolean> = ref(false)

    onMounted(() => {
        observer.value = new IntersectionObserver((entries) => {
            const element: IntersectionObserverEntry = entries[0]
            if (element.isIntersecting) {
                intersected.value = true
                observer.value?.disconnect()
            }
        })
        observer.value.observe(element.value as Element) // @todo test
    })
    onUnmounted(() => {
        observer.value?.disconnect()
    })
    return {
        intersected,
    }
}
