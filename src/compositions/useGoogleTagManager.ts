export function useGoogleTagManager() {
    const trackPage = (path: string, title: string): void => {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: 'PageView',
            page_path: path,
            page_title: title,
        })
    }
    return {
        trackPage,
    }
}
