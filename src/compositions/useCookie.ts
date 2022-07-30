export function useCookie() {
    const getCookie = (name: string): string | null => parseCookie(name, document.cookie)
    const setCookie = (name: string, value: string, days = 30): void => {
        let expires = ''
        if (days) {
            const date = new Date()
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
            expires = '; expires=' + date.toUTCString()
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/'
    }
    const parseCookie = (name: string, value: string): string | null => {
        const nameEQ = `${name}=`
        const cookies = value.split(';')
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i]
            while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length)
            if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length)
        }
        return null
    }
    const deleteCookie = (name: string): void => {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }
    return {
        setCookie,
        getCookie,
        deleteCookie,
    }
}
