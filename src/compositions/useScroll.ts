import { nextTick, onMounted, ref, Ref } from 'vue'

export function useScroll() {
    // data
    const scrolled: Ref<boolean> = ref(false)

    // hooks
    onMounted(() => {
        window.addEventListener('scroll', onScroll)
    })
    
    // functions
    const onScroll = (): void => {
        scrolled.value = window.scrollY > 100
    }

    // functions
    const scrollTo = (top = 0) => {
        window.scrollTo({
            top: top,
            left: 0,
            behavior: 'smooth',
        })
    }
    const scrollToElement = (selector: string, offset = 0) => {
        const element = document.querySelector(selector) as Element

        if (element) {
            nextTick(() => {
                setTimeout(() => {
                    scrollTo(element.getBoundingClientRect().top + window.scrollY - offset)
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
        scrollTo,
        scrollToElement,
        scrollIntoView,
    }
}
