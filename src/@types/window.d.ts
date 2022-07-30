export {}

declare global {
    interface Window {
        dataLayer: {
            push: (data: Record<string, unknown>) => void
            [key: string]: string
        }
    }
}
