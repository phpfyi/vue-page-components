import { nextTick, onMounted, ref, Ref } from 'vue'

export function useScroll() {
    // data
    const scrolled: Ref<boolean> = ref(false)

    const bootScroll = () => window.addEventListener('scroll', onScroll)
    
    // functions
    const onScroll = (): void => {
        scrolled.value = window.scrollY > 100
    }

    // functions
    const scrollTo = (top = 0, behavior: ScrollBehavior = 'auto') => {
        window.scrollTo({
            top: top,
            left: 0,
            behavior,
        })
    }
    const scrollToElement = (selector: string, offset = 0, behavior: ScrollBehavior = 'auto') => {
        const element = document.querySelector(selector) as Element

        if (element) {
            nextTick(() => {
                setTimeout(() => {
                    scrollTo(element.getBoundingClientRect().top + window.scrollY - offset, behavior)
                }, 0)
            })
        }
    }
    const scrollIntoView = (selector: string) => {
        const element = document.querySelector(selector) as Element

        if (element) {
            nextTick(() => {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 0)
            })
        }
    }
    return {
        scrolled,
        bootScroll,
        scrollTo,
        scrollToElement,
        scrollIntoView,
    }
}
