import { reactive, ref } from 'vue'
import * as Consent from '../types/Consent'
import { useCookie } from '../compositions/useCookie'

export const SETTINGS_COOKIE = 'phpfyi_settings'

export function useConsent() {
    const { getCookie, setCookie } = useCookie()

    const consentLogged = ref(true)
    let consent: Consent.Cookie = reactive({
        preferences: false,
        marketing: false,
        statistics: false,
    })
    const bootConsent = () => {
        const cookie: Consent.Cookie | null = getConsentCookie()

        cookie 
            ? (consent = reactive(cookie)) 
            : (consentLogged.value = false)
    }
    const getConsentCookie = (): Consent.Cookie | null => {
        const cookie = String(getCookie(SETTINGS_COOKIE))

        return cookie ? JSON.parse(cookie) : null
    }
    const setConsentCookie = (consent: Consent.Cookie | null) => {
        setCookie(SETTINGS_COOKIE, JSON.stringify(consent))
        consentLogged.value = true
    }
    return {
        consent,
        consentLogged,
        bootConsent,
        getConsentCookie,
        setConsentCookie,
    }
}
