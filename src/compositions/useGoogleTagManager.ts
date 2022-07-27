export function useGoogleTagManager() {
    const bootGoogleTagManager = () => window.dataLayer = window.dataLayer || []

    const trackPage = (path: string, title: string): void => {
        window.dataLayer.push({
            event: 'PageView',
            page_path: path,
            page_title: title,
        })
    }
    const pushData = (data: Record<string,unknown>): void => {
        window.dataLayer.push(data)
    }
    return {
        bootGoogleTagManager,
        trackPage,
        pushData
    }
}
