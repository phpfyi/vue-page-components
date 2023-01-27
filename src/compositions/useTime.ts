export function useTime() {
    const microtime = () => new Date().getTime() / 1000

    const currentYear = () => new Date().getFullYear()
    const currentHour = () => new Date().getHours()

    const timestamp = () => {
        const now = new Date()

        const year = now.getFullYear()
        const month = pad(now.getMonth() + 1)
        const day = pad(now.getDate())

        const hours = pad(now.getHours())
        const minutes = pad(now.getMinutes())
        const seconds = pad(now.getSeconds())

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    }
    const pad = (value: number): string => (value < 10 ? `0${value}` : `${value}`)

    return {
        microtime,
        currentYear,
        currentHour,
        timestamp,
    }
}
