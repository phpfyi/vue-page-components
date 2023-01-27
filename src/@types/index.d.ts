import { Computed, Ref, VueConstructor } from "vue"; // @todo DefineComponent instead of VueConstructor

export const PerspectivePlane: VueConstructor;
export const PerspectiveWrapper: VueConstructor;
export const SlantWrapper: VueConstructor;
export const TransitionFade: VueConstructor;

export const BaseHeading: VueConstructor;
export const BaseText: VueConstructor;

export const CheckboxInput: VueConstructor;
export const EmailInput: VueConstructor;
export const FormBase: VueConstructor
export const FormMessages: VueConstructor
export const InputLabel: VueConstructor
export const PhoneNumberInput: VueConstructor
export const SelectInput: VueConstructor
export const SubmitInput: VueConstructor
export const TextareaInput: VueConstructor
export const TextInput: VueConstructor

export const BaseImage: VueConstructor
export const BaseIntersectionImage: VueConstructor

export const BaseExternalLink: VueConstructor
export const BaseLink: VueConstructor

export const useConsent: (id: string) => {
    consentCookie: Ref<import("../types/Consent").Cookie | null>
    createConsent: () => import("../types/Consent").Cookie,
    getConsentCookie: () => import("../types/Consent").Cookie | null,
    setConsentCookie: (consent: import("../types/Consent").Cookie | null) => void,
}

export const useCookie: () => {
    getCookie: (name: string) => null | string,
    setCookie: (name: string, value: string, days: number) => void,
    parseCookie: (name: string, value: string) => string | null
    deleteCookie: (name: string) => void
}

export const useDOM: () => {
    getNodes: (selector: string) => void
    removeNodes: (selector: string) => void
}

export const useEnvironment: () => {
    isEnv: (environment: import("../types/Environment").Environment) => boolean
    isDev: () => boolean
    isProd: () => boolean
    isSSR: () => boolean 
}

export const useFormInput: () => {
    elementId: Computed<string>
    inputId: Computed<string>
    elementClasses: Computed<Array<string>>
    innerClasses: Computed<Array<string>>
    inputClasses: Computed<Array<string>>
    labelText: Computed<string | boolean>
}

export const useGoogleTagManager: () => {
    bootGoogleTagManager: () => void
    pushData: (data: Record<string,unknown>) => void 
    trackPage: (path: string, title: string) => void
}

export const useIntersectionObserver: (element: Ref<Element | null>) => {
    observer: Ref<IntersectionObserver | null>
    intersected: Ref<false>
    observe: () => void
    unobserve: () => void
}

export const useScroll: () => {
    scrolled: Ref<boolean> 
    bootScroll: () => void
    onScroll: () => void
    scrollTo: (top?: number, behavior?: ScrollBehavior) => void
    scrollToElement: (selector: string, offset?: number, behavior?: ScrollBehavior) => void
    scrollIntoView: (selector: string) => void
}

export const useTime: () => {
    microtime: () => number,
    currentYear: () => number,
    currentHour: () => number,
    timestamp: () => string
}
