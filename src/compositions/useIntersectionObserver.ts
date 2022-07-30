import { ref, Ref } from 'vue'

export function useIntersectionObserver(element: Ref<Element | null>) {
    const observer: Ref<IntersectionObserver | null> = ref(null)
    const intersected: Ref<boolean> = ref(false)

    const observe = () => {
        observer.value = new IntersectionObserver((entries) => {
            const element: IntersectionObserverEntry = entries[0]
            if (element.isIntersecting) {
                intersected.value = true
                unobserve()
            }
        })
        observer.value.observe(element.value as Element) // @todo test
    }
    const unobserve = () => observer.value?.disconnect()
    
    return {
        observer,
        intersected,
        observe,
        unobserve
    }
}
