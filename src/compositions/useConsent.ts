import { reactive, ref } from 'vue'
import * as Consent from '../types/Consent'
import { useCookie } from '../compositions/useCookie'

export function useConsent(id: string = 'app_settings') {
    const { getCookie, setCookie } = useCookie()

    const consentCookie = ref<Consent.Cookie | null>(null)
 
    const createConsent = (): Consent.Cookie => reactive({
        preferences: false,
        marketing: false,
        statistics: false,
    })
    const getConsentCookie = (): Consent.Cookie | null => {
        const cookie = String(getCookie(id))

        return consentCookie.value = cookie ? JSON.parse(cookie) : null
    }
    const setConsentCookie = (consent: Consent.Cookie | null) => {
        setCookie(id, JSON.stringify(consent))
        consentCookie.value = consent
    }
    return {
        consentCookie,
        createConsent,
        getConsentCookie,
        setConsentCookie,
    }
}
